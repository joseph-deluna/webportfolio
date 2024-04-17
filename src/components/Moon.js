import React from 'react';
import moon from '../assets/img/moon.png'; // Import your profile image

const Moon = () => {

  return (
    <>
    <div className="moon" >
      <img src={moon} alt="Moon" />
      <p>&copy; Copyright 2024 Portal Project, TheDreamer Co. Ltd.</p>
    </div>
      </>
  );
}

export default Moon;

