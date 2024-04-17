import React, { useState } from 'react';
import BookModal from './modals/BookModal';
import booksImage from '../assets/img/books.png'; // Import your profile image

const Books = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="books" onClick={toggleModal}>
      <div class="label">Books</div>
        <img src={booksImage} alt="Books" />
      </div>
      {isModalOpen && <BookModal onClose={toggleModal} />}
    </>
  );
}

export default Books;
