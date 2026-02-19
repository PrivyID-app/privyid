import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./PageHeader.css";
import { supabase } from "../../shared/services/supabase";

const PageHeader = ({ title, description, notificationIconRoute }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isNotificationActive = location.pathname === notificationIconRoute;

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div className="page_title">
      <div className="title_summary">
        <p className="page_title_bg">{title}</p>
        <p className="page_title_sm">{description}</p>
      </div>

      <div className="header_actions">
        {notificationIconRoute && (
          <Link
            to={notificationIconRoute}
            className={`notification_icon_link ${isNotificationActive ? "active" : ""}`}
            style={{ pointerEvents: isNotificationActive ? "none" : "auto" }}
          >
            <span className="material-symbols-outlined notification_bell_icon">
              notifications
            </span>
            <div className="notification_indicator_dot" />
          </Link>
        )}

        <button
          className="logout_button_header"
          onClick={handleLogout}
          title="Logout"
        >
          <span className="material-symbols-outlined">logout</span>
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
