import React, { useState } from 'react';
import PictureModal from './modals/PictureModal';
import pictureImage from '../assets/img/picture.png';

const Picture = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="picture" onClick={toggleModal}>
      <div class="label">View Gallery</div>
      <img src={pictureImage} alt="Picture" />
      </div>
      {isModalOpen && <PictureModal onClose={toggleModal} />}
    </>
  );
};

export default Picture;
