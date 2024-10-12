import React from 'react';
import '../css/Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <div className="profile-details">
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
        <button>Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
