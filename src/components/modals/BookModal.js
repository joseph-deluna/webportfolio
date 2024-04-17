import React from 'react';
import book1Image from '../../assets/img/book/book1.jpg'; // Import book cover images
import book2Image from '../../assets/img/book/book2.jpg'; // Import book cover images
import book3Image from '../../assets/img/book/book3.jpg'; // Import book cover images
import book4Image from '../../assets/img/book/book4.jpg'; // Import book cover images
import book5Image from '../../assets/img/book/book5.jpg'; // Import book cover images
import book6Image from '../../assets/img/book/book6.jpg'; // Import book cover images
import book7Image from '../../assets/img/book/book7.jpg'; // Import book cover images
// Import other book cover images as needed

const BookModal = ({ onClose }) => {
  return (
    <div className="modal-overlasy">
      <div className="modal book-modal">
        <button className="close-btn" onClick={onClose}></button>
        <div className="modal-content">
          <h2>Books I've Read</h2>
          <div className="book-list">
            <div className="book">
              <img src={book1Image} alt="Book 1" />
              <p>The Alchemist</p>
            </div>
            <div className="book">
              <img src={book2Image} alt="Book 2" />
              <p>Man and his<br></br> Symbols</p>

            </div>
            <div className="book">
              <img src={book3Image} alt="Book 2" />
              <p>Food of the Gods</p>

            </div>
            <div className="book">
              <img src={book4Image} alt="Book 2" />
              <p>The Little Prince</p>
            </div>
            <div className="book">
              <img src={book5Image} alt="Book 2" />
              <p>The Way of the Zen</p>
            </div>
            <div className="book">
              <img src={book6Image} alt="Book 2" />
              <p>The Wisdom of<br></br> Insecurity</p>
            </div>
            <div className="book">
              <img src={book7Image} alt="Book 2" />
              <p>The Indolence of<br></br> the Filipino</p>
            </div>
            {/* Add other books as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookModal;
