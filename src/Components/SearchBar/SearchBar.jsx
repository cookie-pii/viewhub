
import  { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import search_icon from '../../assets/search.png'

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='search-bar'>
      <input
        type='text'
        value={searchQuery}
        onChange={handleInputChange}
        placeholder='Search...'
      />
      <button onClick={handleSearchClick}>
        <img src={search_icon} alt='Search Icon' />
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
