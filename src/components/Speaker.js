import React, { useState } from 'react';
import speakerImage from '../assets/img/speaker.png';
import SpeakerModal from './modals/SpeakerModal'; // Import the Speaker modal component

const Speaker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="speaker" onClick={toggleModal}>
      <div class="label">Play Music</div>
      <img src={speakerImage} alt="speaker" />
      </div>
      {isModalOpen && <SpeakerModal onClose={toggleModal} />}
    </>
  );
}

export default Speaker;
