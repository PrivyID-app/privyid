import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import "../../../shared/styles/extra-pages.css";

const UserProfile = () => {
  return (
    <>
      <PageHeader
        title="User Profile"
        description="View and manage your account details"
      />

      <div className="content_area">
        <div className="profile_wrapper">
          <div className="profile_card">
            <div className="profile_header">
              <div className="profile_avatar">
                <img src="/src/assets/images/Avatar [1.0].svg" alt="Avatar" />
              </div>
              <div className="profile_info">
                <h2>Emma Wright</h2>
                <p>emma@company.com</p>
              </div>
            </div>

            <div className="profile_details">
              <div className="detail_item">
                <p className="label">Full Name</p>
                <p className="value">Emma Wright</p>
              </div>
              <div className="detail_item">
                <p className="label">Email Address</p>
                <p className="value">emma@company.com</p>
              </div>
              <div className="detail_item">
                <p className="label">Role</p>
                <p className="value">Merchant Business Admin</p>
              </div>
              <div className="detail_item">
                <p className="label">Member Since</p>
                <p className="value">Sept 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
