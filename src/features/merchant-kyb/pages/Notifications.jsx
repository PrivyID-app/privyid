import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import "../../../shared/styles/extra-pages.css";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "New Business Verification Approved",
      message: "ABC Corp's verification has been successfully approved.",
      time: "2 hours ago",
      type: "success",
    },
    {
      id: 2,
      title: "Batch Business Verification Processing",
      message: "Batch #B-1005 is currently being processed.",
      time: "5 hours ago",
      type: "info",
    },
    {
      id: 3,
      title: "Rejected Business Verification",
      message: "XYZ Ltd's verification was rejected due to invalid TIN.",
      time: "Yesterday",
      type: "error",
    },
  ];

  return (
    <>
      <PageHeader
        title="Notifications"
        description="Stay updated with your latest business verification activities"
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
