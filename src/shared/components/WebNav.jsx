import React, { useState } from "react";
import { Link } from "react-router-dom";
import SpecialButton from "./SpecialButton";
import "./web-nav.css";

// Using the logo icon from assets if available, otherwise using the one from the legacy folder for now
// Assuming the build system handles images in src/assets
import logo_black from "../../assets/images/Logo dark.svg";

const WebNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`web_nav ${isMenuOpen ? "menu_open" : ""}`}>
      <div className="nav_content_container">
        <div className="logo_link_container">
          <Link to="/" className="nav_logo">
            <img src={logo_black} alt="PrivyID Logo" />
          </Link>

          <button
            className="menu_toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>

          <div className={`nav_links ${isMenuOpen ? "active" : ""}`}>
            <Link
              to="/products"
              className="nav_link"
              onClick={() => setIsMenuOpen(false)}
            >
              Products{" "}
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </Link>
            <Link
              to="/developers"
              className="nav_link"
              onClick={() => setIsMenuOpen(false)}
            >
              Developers{" "}
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </Link>
            <Link
              to="/pricing"
              className="nav_link"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
          </div>
        </div>

        <div className={`nav_action_buttons ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/login"
            className="nav_link"
            onClick={() => setIsMenuOpen(false)}
          >
            Log In
          </Link>
          <Link
            to="/onboarding?mode=signup"
            className="api_page_link"
            onClick={() => setIsMenuOpen(false)}
          >
            <SpecialButton>Get API Keys</SpecialButton>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default WebNav;
