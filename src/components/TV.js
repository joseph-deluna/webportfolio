import React, { useState } from 'react';
import TVImage from '../assets/img/tv.png';
import TVModal from './modals/TVModal'; // Import the Speaker modal component

const TV = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="tv" onClick={toggleModal}>
      <div class="label">Play</div>
      <img src={TVImage} alt="TV" />
      </div>
      {isModalOpen && <TVModal onClose={toggleModal} />}
    </>
  );
}

export default TV;
