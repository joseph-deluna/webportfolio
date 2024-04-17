import React, { useState } from 'react';

const TVModal = ({ onClose }) => {
  const [showVideos, setShowVideos] = useState(false);

  return (
    <div className="modal-overlays">
      <div className="modal tv-modal">
        <button className="close-btn" onClick={onClose}></button>
        <div className='modal-content'>
        <h2 className="modal-title">TV</h2>
        <div className="video-list">
          {/* Display list of videos here */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ku9edEKvGuY" // Corrected URL format
            title="Video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* Add more videos as needed */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default TVModal;
