from flask import Flask, request, jsonify
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import NearestNeighbors
import requests

app = Flask(__name__)

# Variables globales pour le modèle et les données
knn = None
combined_features = None
data = None

# Fonction pour charger les données de YouTube
def load_youtube_data(api_key, video_ids):
    global data
    url = f"https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id={','.join(video_ids)}&key={api_key}"
    response = requests.get(url)
    items = response.json().get('items', [])

    # Transformez les éléments en DataFrame
    data = pd.DataFrame([{
        'video_id': item['id'],
        'title': item['snippet']['title'],
        'description': item['snippet']['description'],
        'duration': item['contentDetails']['duration'],
        'views': item['statistics'].get('viewCount', 0),
        'likes': item['statistics'].get('likeCount', 0),
        'dislikes': item['statistics'].get('dislikeCount', 0),
        'comment': item['statistics'].get('commentCount', 0)
    } for item in items])

    data.fillna('', inplace=True)
    return data

# Fonction pour préparer les données et entraîner le modèle
def prepare_and_train_model():
    global knn, combined_features, data

    # Normaliser les caractéristiques numériques
    scaler = StandardScaler()
    data[['views', 'likes', 'dislikes', 'comment']] = scaler.fit_transform(data[['views', 'likes', 'dislikes', 'comment']])

    # Encoder les caractéristiques textuelles en utilisant TF-IDF
    tfidf_vectorizer = TfidfVectorizer(max_features=5000)
    tfidf_matrix = tfidf_vectorizer.fit_transform(data['description'] + ' ' + data['title'])

    # Combiner toutes les caractéristiques
    numerical_features = data[['views', 'likes', 'dislikes', 'comment']].values
    combined_features = pd.concat([pd.DataFrame(numerical_features), pd.DataFrame(tfidf_matrix.toarray())], axis=1)

    # Construire le modèle NearestNeighbors
    knn = NearestNeighbors(metric='cosine', algorithm='brute')
    knn.fit(combined_features)

# Fonction pour obtenir des recommandations
def get_recommendations(video_id, n=5):
    if video_id not in data['video_id'].values:
        return f"Video ID {video_id} not found in the dataset."
    
    idx = data[data['video_id'] == video_id].index[0]
    distances, indices = knn.kneighbors([combined_features.iloc[idx]], n_neighbors=n+1)
    similar_items = indices[0][1:]  # Obtenir les n voisins les plus proches en excluant l'élément lui-même
    return data['video_id'].iloc[similar_items].tolist()

@app.route('/load_data', methods=['POST'])
def load_data():
    content = request.json
    api_key = content['api_key']
    video_ids = content['video_ids']
    load_youtube_data(api_key, video_ids)
    prepare_and_train_model()
    return jsonify({'status': 'Data loaded and model trained'})

@app.route('/recommend', methods=['POST'])
def recommend():
    content = request.json
    video_id = content['video_id']
    recommendations = get_recommendations(video_id)
    return jsonify({'recommendations': recommendations})

if __name__ == '__main__':
    app.run(debug=True)
