import React, { useState } from 'react';
import WorkModal from './modals/WorkModal';
import workImage from '../assets/img/work.png'; // Import your profile image

const Work = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="work" onClick={toggleModal}>
      <div class="label">View Work</div>
        <img src={workImage} alt="Work" />
      </div>
      {isModalOpen && <WorkModal onClose={toggleModal} />}
    </>
  );
}

export default Work;
