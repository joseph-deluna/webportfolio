import React, { useState } from 'react';
import messageImage from '../assets/img/message.png'; // Import your profile image
import MessageModal from './modals/MessageModal'; // Assuming you have a MessageModal component

const Message = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="message" onClick={openModal}>
      <div class="label">Send Message</div>
        <img src={messageImage} alt="message" />
      </div>
      {isModalOpen && <MessageModal onClose={closeModal} />}
    </>
  );
}

export default Message;
