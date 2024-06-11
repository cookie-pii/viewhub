import './Feed.css';
import { Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResult=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoListUrl).then(response=>response.json()).then(data=>setData(data.items));
  
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item,index) => (
        <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card" key={item.id}>
          <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
      ))}
    </div>
  );
};

Feed.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Feed;
