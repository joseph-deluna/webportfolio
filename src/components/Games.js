import React from 'react';
import gamesImage from '../assets/img/games.png'; // Import your profile image
import GameModal from './modals/GameModal'; // Assuming you have a GameModal component

const Games = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="games" onClick={openModal}>
      <div class="label">View Games</div>
        <img src={gamesImage} alt="Games" />
      </div>
      {isModalOpen && <GameModal onClose={closeModal} />}
    </>
  );
}

export default Games;
