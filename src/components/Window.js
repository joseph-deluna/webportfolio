import React from 'react';
import windowImage from '../assets/img/window.png'; // Import your profile image
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Window = () => {
  return (
    <>
    <div className='window'>
      <Link to="/TheDreamerStudio" className="window-link"> 
        <img src={windowImage} alt="Window" />
      </Link>
      </div>
    </>
  );
}

export default Window;
