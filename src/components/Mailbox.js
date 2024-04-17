import React, { useState } from 'react';
import mailBox from '../assets/img/mailbox.png';
import MessageModal from './modals/MessageModal'; // Import the Speaker modal component

const Speaker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="mailbox" onClick={toggleModal}>
      <div class="label">Email Us</div>
      <img src={mailBox} alt="Mailbox" />
      </div>
      {isModalOpen && <MessageModal onClose={toggleModal} />}
    </>
  );
}

export default Speaker;
