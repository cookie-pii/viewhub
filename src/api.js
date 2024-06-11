import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';  //

export const loadData = async (apiKey, videoIds) => {
  try {
    const response = await axios.post(`${API_URL}/load_data`, { api_key: apiKey, video_ids: videoIds });
    return response.data;
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};

export const getRecommendations = async (videoId) => {
  try {
    const response = await axios.post(`${API_URL}/recommend`, { video_id: videoId });
    return response.data.recommendations;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    throw error;
  }
};
