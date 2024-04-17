import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import picture1 from '../../assets/img/picture/picture1.jpg';
import picture2 from '../../assets/img/picture/picture2.jpg';
import picture3 from '../../assets/img/picture/picture3.jpg';
import picture4 from '../../assets/img/picture/picture4.jpg';
import picture5 from '../../assets/img/picture/picture5.jpg';
import picture6 from '../../assets/img/picture/picture6.jpg';
import picture7 from '../../assets/img/picture/picture7.jpg';

const PictureModal = ({ onClose }) => {
  console.log('Images:', picture1, picture2, picture3, picture4, picture5, picture6, picture7);

  const [openLightbox, setOpenLightbox] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const images = [picture1, picture2, picture3, picture4, picture5, picture6, picture7];

  const openImageInLightbox = (index) => {
    setCurrentImageIndex(index); // Set the index of the clicked image
    setOpenLightbox(true);
  };

  console.log('Lightbox props:', {
    open: openLightbox,
    close: () => setOpenLightbox(false),
    slides: images.map((src) => ({ src })),
    initialIndex: currentImageIndex,
  });

  return (
    <div className="modal-overslay">
      <div className="modal picture-modal">
        <button className="close-btn" onClick={onClose}></button>
        <div className="modal-content">
          <div className="gallery">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Picture ${index + 1}`}
                onClick={() => openImageInLightbox(index)}
                className="gallery-image"
              />
            ))}
          </div>
        </div>
      </div>
      {openLightbox && (
        <Lightbox
          open={openLightbox}
          close={() => setOpenLightbox(false)}
          slides={images.map((src) => ({ src }))}
          initialIndex={currentImageIndex} // Pass the currentImageIndex as initialIndex
        />
      )}
    </div>
  );
};

export default PictureModal;
