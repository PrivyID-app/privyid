import React from "react";
import { Link } from "react-router-dom";
import SpecialButton from "./SpecialButton";
import "./web-nav.css";

// Using the logo icon from assets if available, otherwise using the one from the legacy folder for now
// Assuming the build system handles images in src/assets
import logo_black from "../../assets/images/Logo dark.svg";

const WebNav = () => {
  return (
    <nav className="web_nav">
      <div className="nav_content_container">
        <div className="logo_link_container">
          <Link to="/" className="nav_logo">
            <img src={logo_black} alt="PrivyID Logo" />
          </Link>

          <div className="nav_links">
            <a href="#" className="nav_link">
              Products{" "}
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </a>
            <a href="#" className="nav_link">
              Developers{" "}
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </a>
            <a href="#" className="nav_link">
              Pricing
            </a>
          </div>
        </div>

        <div className="nav_action_buttons">
          <Link to="/login" className="nav_link">
            Log In
          </Link>
          <Link to="/api-keys" className="api_page_link">
            <SpecialButton>Get API Keys</SpecialButton>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default WebNav;
