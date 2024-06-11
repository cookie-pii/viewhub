import PropTypes from 'prop-types';
import './Viewhome.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';
import { useState } from 'react';

const Viewhome = ({ sidebar }) => {
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar sidebar={sidebar} category={category.toString()} setCategory={setCategory} />
      <div className={`container ${sidebar ? '' : 'large-container'}`}>
        <Feed category={category.toString()} />
      </div>
    </>
  );
};

Viewhome.propTypes = {
  sidebar: PropTypes.bool.isRequired,
  
};

export default Viewhome;
