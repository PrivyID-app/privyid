import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import "../../../shared/styles/extra-pages.css";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "New Verification Approved",
      message: "John Doe's verification has been successfully approved.",
      time: "2 hours ago",
      type: "success",
    },
    {
      id: 2,
      title: "Batch Verification Processing",
      message: "Batch #1005 is currently being processed.",
      time: "5 hours ago",
      type: "info",
    },
    {
      id: 3,
      title: "Rejected Verification",
      message: "Jane Smith's verification was rejected due to blurry document.",
      time: "Yesterday",
      type: "error",
    },
  ];

  return (
    <>
      <PageHeader
        title="Notifications"
        description="Stay updated with your latest verification activities"
      />

      <div className="content_area">
        <div className="notifications_wrapper">
          {notifications.map((n) => (
            <div key={n.id} className={`notification_item ${n.type}`}>
              <div className="notification_icon">
                <span className="material-symbols-outlined">
                  {n.type === "success"
                    ? "check_circle"
                    : n.type === "error"
                      ? "error"
                      : "info"}
                </span>
              </div>
              <div className="notification_content">
                <p className="notification_title">{n.title}</p>
                <p className="notification_message">{n.message}</p>
                <p className="notification_time">{n.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notifications;
