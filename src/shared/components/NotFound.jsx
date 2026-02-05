import React from "react";
import { Link } from "react-router-dom";
import WebNav from "./WebNav";
import SpecialButton from "./SpecialButton";
import "./notfound.css";

// Importing images
import bgPattern from "../../assets/images/404-bg.svg";
import chipIndicator from "../../assets/images/chart-legend-dots-[1.0].svg";

const NotFound = () => {
  return (
    <div className="notfound_container">
      <WebNav />

      <main className="notfound_content_wrapper">
        <div className="notfound_bg_pattern">
          <img src={bgPattern} alt="Background Pattern" />
        </div>

        <div className="notfound_chip">
          <div className="notfound_indicator_img">
            <img src={chipIndicator} alt="Chip Indicator" />
          </div>
          <p>404 error</p>
        </div>

        <h1 className="Page_Not_Found_Title">Page Not Found</h1>

        <p className="notfound_error_message">
          We couldn't mint the page you are looking for 🤔, maybe it never
          existed or has been moved.
        </p>

        <Link to="/" className="notfound_home_link">
          <SpecialButton icon="arrow_insert">Go Back Home</SpecialButton>
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
