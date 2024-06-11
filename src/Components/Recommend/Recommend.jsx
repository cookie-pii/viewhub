import './Recommend.css'
import { useEffect, useState } from 'react';
import { API_KEY, value_converter } from '../../data';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Recommend = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
      const response = await fetch(relatedVideo_url);
      const data = await response.json();
      if (data.items) {
        setApiData(data.items);
      } else {
        setError('No data available');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="recommend">
      {apiData.map((item, index) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
          <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
          <div className="vid-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_converter(item.statistics.viewCount)} Views</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

Recommend.propTypes = {
  categoryId: PropTypes.string.isRequired,
};

export default Recommend;
