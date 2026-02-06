import React, { useState } from "react";
import ToggleCard from "../ToggleCard";

const NotificationPreferences = () => {
  const [prefs, setPrefs] = useState({
    email: true,
    push: false,
    sms: false,
    weekly: true,
  });

  const handleToggle = (key) => (checked) => {
    setPrefs((prev) => ({ ...prev, [key]: checked }));
  };

  return (
    <div className="notification_preferences_section">
      <div className="header">
        <p className="info">Notification Preference</p>
        <p>Manage your notifications preference</p>
      </div>

      <div className="notification_grid">
        <ToggleCard
          title="Email Notification"
          description="Receive notifications via email"
          checked={prefs.email}
          onChange={handleToggle("email")}
        />
        <ToggleCard
          title="Push Notification"
          description="Receive push notifications on your devices"
          checked={prefs.push}
          onChange={handleToggle("push")}
        />
        <ToggleCard
          title="SMS Notification"
          description="Receive alerts via text messages"
          checked={prefs.sms}
          onChange={handleToggle("sms")}
        />
        <ToggleCard
          title="Weekly Digest"
          description="Summary of your weekly activity"
          checked={prefs.weekly}
          onChange={handleToggle("weekly")}
        />
      </div>

      <div style={{ marginTop: "24px" }}>
        <button
          className="primary_btn"
          onClick={() => alert("Preferences saved!")}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default NotificationPreferences;
