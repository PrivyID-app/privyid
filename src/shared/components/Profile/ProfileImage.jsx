import React, { useRef } from "react";
import { useAppContext } from "../../../context/appContextHooks";

const ProfileImage = () => {
  const { user, updateUser } = useAppContext();
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateUser({ avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile_image_container">
      <div
        className="avatar_wrapper"
        onClick={() => fileInputRef.current.click()}
      >
        <img src={user.avatar} alt="Profile" />
        <div className="edit_overlay">
          <span className="material-symbols-outlined">add</span>
        </div>
      </div>
      <div className="profile_info">
        <p style={{ fontWeight: "500" }}>{user.name} </p>
        <p style={{ fontWeight: "300", color: "var(--text-sub-600)" }}>
          {user.email}
        </p>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ProfileImage;
