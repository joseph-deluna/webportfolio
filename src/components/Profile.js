import React, { useState } from 'react';
import ProfileModal from './modals/ProfileModal';
import profileImage from '../assets/img/profile.png'; // Import your profile image

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <>
    <div className="profile" onClick={toggleModal}>
      <div class="label">About Me</div>
      <img src={profileImage} alt="Profile" />
    </div>
      {isModalOpen && <ProfileModal onClose={toggleModal} />}
      </>
  );
}

export default Profile;

