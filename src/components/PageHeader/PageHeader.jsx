import React from "react";
import { Link, useLocation } from "react-router-dom";

const PageHeader = ({
  title,
  description,
  notificationIconRoute,
}) => {
  const location = useLocation();
  const isNotificationActive = location.pathname === notificationIconRoute;

  return (
    <div className="page_title">
      <div className="title_summary">
        <p className="page_title_bg">{title}</p>
        <p className="page_title_sm">{description}</p>
      </div>

      {notificationIconRoute && (
        <Link
          to={notificationIconRoute}
          className={`notification_icon_link ${isNotificationActive ? 'active' : ''}`}
          style={{ pointerEvents: isNotificationActive ? 'none' : 'auto' }}
        >
          <span className="material-symbols-outlined notification_bell_icon">
            notifications
          </span>
          {/* Red dot indicator - assuming it's always present for now */}
          <div className="notification_indicator_dot" />
        </Link>
      )}
    </div>
  );
};

export default PageHeader;
