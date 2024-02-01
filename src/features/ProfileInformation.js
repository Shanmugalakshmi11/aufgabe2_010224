// features/ProfileInformation.js
import React from "react";
import "./ProfileInformation.css";

const ProfileInformation = () => {
  return (
    <div className="profile-info-container">
      <h2>Profile Information Feature</h2>
      <div className="profile-info-content">
        {/* Profile Information component implementation */}
        <p>Username: Shanmugalakshmi Chandrasekaran</p>
        <p>Email: Shanmugalakshmi.Chandrasekaran@docc.gmail.de</p>
        <p>Bio: Web Developer</p>
      </div>
    </div>
  );
};

export default ProfileInformation;
