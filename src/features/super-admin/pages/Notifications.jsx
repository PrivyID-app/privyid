import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import "../super-admin.css";

const Notifications = () => {
  const [filter, setFilter] = useState("all");

  const notifications = [
    {
      id: 1,
      category: "merchant",
      title: "New Merchant Registration",
      message: "Apex Holdings has registered as a new merchant",
      timestamp: "2 minutes ago",
      read: false,
    },
    {
      id: 2,
      category: "security",
      title: "Failed Login Attempt",
      message: "Multiple failed login attempts from IP 45.123.67.89",
      timestamp: "15 minutes ago",
      read: false,
    },
    {
      id: 3,
      category: "system",
      title: "System Update Available",
      message: "A new platform update is available for installation",
      timestamp: "1 hour ago",
      read: true,
    },
    {
      id: 4,
      category: "support",
      title: "New Support Ticket",
      message: "TechFlow Solutions submitted a new support ticket",
      timestamp: "2 hours ago",
      read: false,
    },
    {
      id: 5,
      category: "merchant",
      title: "Merchant Verification Pending",
      message: "CloudNine Inc requires verification approval",
      timestamp: "3 hours ago",
      read: true,
    },
    {
      id: 6,
      category: "security",
      title: "API Key Generated",
      message: "New production API key generated for Quantum Dynamics",
      timestamp: "5 hours ago",
      read: true,
    },
    {
      id: 7,
      category: "system",
      title: "Scheduled Maintenance",
      message: "Platform maintenance scheduled for tomorrow at 2:00 AM",
      timestamp: "1 day ago",
      read: true,
    },
  ];

  const filteredNotifications =
    filter === "all"
      ? notifications
      : notifications.filter((n) => n.category === filter);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const getCategoryIcon = (category) => {
    switch (category) {
      case "merchant":
        return "group";
      case "security":
        return "security";
      case "system":
        return "settings";
      case "support":
        return "headphones";
      default:
        return "notifications";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "merchant":
        return "#8b5cf6";
      case "security":
        return "#ef4444";
      case "system":
        return "#06b6d4";
      case "support":
        return "#f59e0b";
      default:
        return "#64748b";
    }
  };

  return (
    <>
      <PageHeader
        title="Notifications"
        description={`You have ${unreadCount} unread notifications`}
      />

      <div className="content_area">
        {/* Filter Tabs */}
        <div className="notification_filters">
          <button
            className={`filter_tab ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`filter_tab ${filter === "merchant" ? "active" : ""}`}
            onClick={() => setFilter("merchant")}
          >
            Merchant Activity
          </button>
          <button
            className={`filter_tab ${filter === "security" ? "active" : ""}`}
            onClick={() => setFilter("security")}
          >
            Security Events
          </button>
          <button
            className={`filter_tab ${filter === "system" ? "active" : ""}`}
            onClick={() => setFilter("system")}
          >
            System Alerts
          </button>
          <button
            className={`filter_tab ${filter === "support" ? "active" : ""}`}
            onClick={() => setFilter("support")}
          >
            Support Tickets
          </button>
        </div>

        {/* Notifications List */}
        <div className="notifications_list">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification_item ${
                notification.read ? "read" : "unread"
              }`}
            >
              <div
                className="notification_icon"
                style={{
                  backgroundColor: getCategoryColor(notification.category),
                }}
              >
                <span className="material-symbols-outlined">
                  {getCategoryIcon(notification.category)}
                </span>
              </div>
              <div className="notification_content">
                <h4>{notification.title}</h4>
                <p>{notification.message}</p>
                <span className="notification_time">
                  {notification.timestamp}
                </span>
              </div>
              <div className="notification_actions">
                {!notification.read && (
                  <button className="mark_read_button">
                    <span className="material-symbols-outlined">done</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notifications;
