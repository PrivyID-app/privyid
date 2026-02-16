import React from "react";
import PageTitle from "../../../shared/components/PageTitle";
import NotificationsContent from "../../../shared/components/NotificationsContent";
import { useLocation } from "react-router-dom";

const NotificationsPage = () => {
  const location = useLocation();
  const isNotificationActive = location.pathname === "/super-admin/notifications";

  return (
    <div
      className="notifications_page_wrapper"
      style={{
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <PageTitle
        title="Notifications"
        subtitle="Manage your personal account settings and preferences"
        notificationIconRoute="/super-admin/notifications"
        isNotificationActive={isNotificationActive}
      />
      <NotificationsContent />
    </div>
  );
};

export default NotificationsPage;
