import React from "react";
import { Link } from "react-router-dom";

const PageTitle = ({ title, subtitle, action, notificationIconRoute, isNotificationActive }) => {
  return (
    <div className="page_title">
      <div className="title_summary">
        <p className="page_title_bg">{title}</p>
        {subtitle && <p className="page_title_sm">{subtitle}</p>}
      </div>
      <div className="page_title_actions_wrapper">
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
        {action && <div className="page_title_action">{action}</div>}
      </div>
    </div>
  );
};

export default PageTitle;
