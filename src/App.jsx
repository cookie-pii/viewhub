
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Viewhome from './Pages/ViewHome/Viewhome';
import VideoPlayer from './Pages/VideoPlayer/Videoplayer';
import { useState } from 'react';
import SearchResults from './Pages/SearchResults/SearchResults';

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query);
    navigate(`/search/${query}`);
  };

  return (
    <div>
      <Navbar setSidebar={setSidebar} onSearch={handleSearch} />
      <Routes>
        <Route path='/' element={<Viewhome sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<VideoPlayer />} />
        <Route path='/search/:query' element={<SearchResults query={searchQuery} />} />
      </Routes>
    </div>
  );
};

export default App;
