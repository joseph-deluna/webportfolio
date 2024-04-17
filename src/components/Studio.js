import React from 'react';
import studio from '../assets/img/studio.png'; // Import your profile image
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Studio = () => {
  return (
    <>
    <div className='studio'>
      <Link to="/" className="studio-link"> 
        <img src={studio} alt="Window" />
      </Link>
      </div>
    </>
  );
}

export default Studio;
