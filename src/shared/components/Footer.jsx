import React from "react";
import { Link } from "react-router-dom";
import SecondaryButton from "./SecondaryButton";
import "./footer.css";

// Assuming images are in assets
import logoWhite from "../../assets/images/Logo White.svg";

const Footer = () => {
  return (
    <footer className="lp-footer">
      <div className="lp-footer-inner">
        <div className="lp-footer-brand">
          <img src={logoWhite} alt="PrivyID" className="lp-footer-logo" />
          <p className="lp-footer-tagline">
            Scalable KYC and KYB solutions for your business.
          </p>
          <SecondaryButton
            as={Link}
            to="/onboarding?mode=signup"
            style={{ alignSelf: "flex-start" }}
          >
            Get Started Free
            <span className="material-symbols-outlined">arrow_outward</span>
          </SecondaryButton>
        </div>

        <div className="lp-footer-links-group">
          <div className="lp-footer-col">
            <p className="lp-footer-col-title">Product</p>
            <div className="lp-footer-link-group">
              <Link to="/products" className="lp-footer-link">
                Features
              </Link>
              <Link to="/pricing" className="lp-footer-link">
                Pricing
              </Link>
              <a href="#" className="lp-footer-link">
                Security
              </a>
            </div>
          </div>

          <div className="lp-footer-col">
            <p className="lp-footer-col-title">Developers</p>
            <div className="lp-footer-link-group">
              <Link to="/documentation" className="lp-footer-link">
                Documentation
              </Link>
              <Link to="/developers" className="lp-footer-link">
                API Reference
              </Link>
              <a href="#" className="lp-footer-link">
                API Status
              </a>
            </div>
          </div>

          <div className="lp-footer-col">
            <p className="lp-footer-col-title">Social Media</p>
            <div className="lp-footer-link-group">
              <a href="#" className="lp-footer-link">
                Twitter
                <span className="material-symbols-outlined">arrow_outward</span>
              </a>
              <a href="#" className="lp-footer-link">
                LinkedIn
                <span className="material-symbols-outlined">arrow_outward</span>
              </a>
              <a href="#" className="lp-footer-link">
                GitHub
                <span className="material-symbols-outlined">arrow_outward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
