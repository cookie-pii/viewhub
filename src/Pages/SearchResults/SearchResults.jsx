
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SearchResults.css';
import { API_KEY } from '../../data';

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`;
      const response = await fetch(searchUrl);
      const data = await response.json();
      setResults(data.items);
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="search-results">
      {results.map((result) => (
        <Link key={result.id.videoId} to={`/video/${result.id.kind.split(':')[1]}/${result.id.videoId}`} className="search-result">
          <img src={result.snippet.thumbnails.default.url} alt={result.snippet.title} />
          <div className="search-result-info">
            <h3>{result.snippet.title}</h3>
            <p>{result.snippet.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;

