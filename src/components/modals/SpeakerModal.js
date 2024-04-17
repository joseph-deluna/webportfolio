import React, { useRef, useState } from 'react';

const SpeakerModal = ({ onClose }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const modalRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - modalRef.current.getBoundingClientRect().left,
      y: e.clientY - modalRef.current.getBoundingClientRect().top
    });
    // Change cursor style to grabbing
    document.body.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const left = e.clientX - dragOffset.x;
      const top = e.clientY - dragOffset.y;
      modalRef.current.style.left = `${left}px`;
      modalRef.current.style.top = `${top}px`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Reset cursor style to default
    document.body.style.cursor = 'auto';
  };

  const handleMouseEnter = () => {
    // Change cursor style to grab when hovering over draggable area
    if (!isDragging) {
      document.body.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    // Reset cursor style to default when leaving draggable area
    if (!isDragging) {
      document.body.style.cursor = 'auto';
    }
  };

  return (
    <div
      className={`modal speaker-modal ${isDragging ? 'dragging' : ''}`}
      ref={modalRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'fixed', left: '20%' }}
    >
      <button className="close-btn" onClick={onClose}></button>
      <div className="modal-content">
        {/* Add iframe for Spotify playlist */}
        <iframe src="https://open.spotify.com/embed/playlist/3O8ZstDuyQoevDwysjWJER?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
  );
}

export default SpeakerModal;
