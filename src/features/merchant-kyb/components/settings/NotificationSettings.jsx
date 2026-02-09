import React from "react";
import "../../pages/SettingsPage.css";

const NotificationCard = ({ title, description, defaultChecked }) => (
  <div className="notification_card">
    <div className="notification_info">
      <div className="notification_title">{title}</div>
      <div className="notification_desc">{description}</div>
    </div>
    <label
      className="toggle_switch"
      style={{
        position: "relative",
        display: "inline-block",
        width: "40px",
        height: "24px",
      }}
    >
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        style={{ opacity: 0, width: 0, height: 0 }}
      />
      <span
        className="slider"
        style={{
          position: "absolute",
          cursor: "pointer",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#ccc" /* Default grey */,
          transition: ".4s",
          borderRadius: "34px",
        }}
      ></span>
      <style>{`
            .toggle_switch input:checked + .slider {
                background-color: var(--text-strong-950) !important;
            }
            .toggle_switch .slider:before {
                position: absolute;
                content: "";
                height: 20px;
                width: 20px;
                left: 2px;
                bottom: 2px;
                background-color: white;
                transition: .4s;
                border-radius: 50%;
            }
            .toggle_switch input:checked + .slider:before {
                transform: translateX(16px);
            }
        `}</style>
    </label>
  </div>
);

const NotificationSettings = () => {
  return (
    <div className="settings_section">
      <h2 className="section_title">Email notifications</h2>
      <p className="section_description">
        You can configure the notifications you receive here
      </p>

      <div className="notification_grid">
        <NotificationCard
          title="New Merchant Signups"
          description="Get notified when a new merchant registers"
          defaultChecked={false}
        />
        <NotificationCard
          title="KYB Submissions"
          description="Receive alerts for new KYB verification requests"
          defaultChecked={true}
        />
        <NotificationCard
          title="Flagged Verifications"
          description="Get notified when a new merchant registers"
          defaultChecked={false}
        />
        <NotificationCard
          title="System Errors"
          description="Critical system error notifications"
          defaultChecked={false}
        />
        <NotificationCard
          title="Daily Summary"
          description="Daily platform performance summary"
          defaultChecked={false}
        />
        <NotificationCard
          title="Weekly Report"
          description="Comprehensive weekly analytics report"
          defaultChecked={false}
        />
      </div>
    </div>
  );
};

export default NotificationSettings;
