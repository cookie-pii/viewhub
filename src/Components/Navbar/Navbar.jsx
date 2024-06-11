import PropTypes from 'prop-types';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';

import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/user_profile.jpg';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = ({ setSidebar, onSearch }) => {
  const handleMenuClick = () => {
    setSidebar(prev => !prev);
    console.log("Menu icon clicked, toggling sidebar");
  };

  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img
          className='menu_icon'
          onClick={handleMenuClick}
          src={menu_icon}
          alt='Menu Icon'
        />
        <Link to ='/'><img className='logo' src={logo} alt='Logo' /></Link>
      </div>

      <div className='nav-middle flex-div'>
        <div className='search-box flex-div'>
          <SearchBar onSearch={onSearch} />
        </div>
      </div>

      <div className='nav-right flex-div'>
        <img src={upload_icon} alt='Upload Icon' />
        <img src={more_icon} alt='More Icon' />
        <img src={notification_icon} alt='Notification Icon' />
        <img src={profile_icon} className='user-icon' alt='Profile Icon' />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setSidebar: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Navbar;
