import React, { useState } from "react";
import "../../pages/SettingsPage.css";

const UserSettings = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Emma Wright", email: "emma@company.com", role: "Admin" },
    { id: 2, name: "John Doe", email: "john@company.com", role: "Viewer" },
  ]);

  return (
    <div className="settings_section">
      <h2 className="section_title">User Management</h2>
      <p className="section_description">
        Manage users and their roles within your organization.
      </p>

      <button
        className="primary_btn"
        style={{ marginBottom: "24px", gap: "8px" }}
      >
        <span className="material-symbols-outlined">add</span>
        Add New User
      </button>

      <div className="user_list">
        {users.map((user) => (
          <div key={user.id} className="user_item">
            <div className="user_avatar">{user.name.charAt(0)}</div>
            <div className="user_info">
              <div className="user_name">{user.name}</div>
              <div className="user_email">{user.email}</div>
            </div>
            <div className="user_role">{user.role}</div>
            <button className="upload_btn" style={{ padding: "4px 8px" }}>
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSettings;
