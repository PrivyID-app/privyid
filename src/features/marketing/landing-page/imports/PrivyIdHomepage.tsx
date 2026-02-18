import * as React from "react";
import { Link } from "react-router-dom";
import SharedWebNav from "../../../../shared/components/WebNav";
import SpecialButton from "../../../../shared/components/SpecialButton";
import "../../../../app/pages/LandingPage.css";

// Import assets from the project
import imgLogo from "../../../../assets/images/Logo dark.svg";
import imgLogoFooter from "../../../../assets/images/c1c20eae9ce7a905bc3e3f80a198f87dfc6dc8c3.png";
import imgPerson from "../../../../assets/images/0d2f66eb8e8e6701d3a89564b0b6f219eb1b5d77.png";
import bgPattern from "../../../../assets/images/404-bg.svg";
import pattern from "../../../../assets/images/hero-check-vector.svg";

export default function PrivyIdHomepage() {
  return (
    <div className="landing-page">
      <SharedWebNav />

      <main className="landing-main">
        {/* Hero Section */}
        <section className="landing-section hero-section">
          <div className="landing-container">
            {/* <div className="pattern">
              <img src={pattern} alt="Background Pattern" />
            </div> */}

            <div className="hero-badge">
              <span
                className="badge-new"
                style={{
                  background: "var(--bg-weak-50)",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "var(--text-strong-950)",
                }}
              >
                NEW
              </span>
              <span className="text-sub">
                Seamless identity verification via API
              </span>
            </div>

            <h1 className="hero-title">
              Identity infrastructure <br />
              without data custody
            </h1>

            <p className="hero-subtitle">
              Verify users and businesses via API. PrivyID handles identity
              documents and compliance — your product only receives a
              verification token.
            </p>

            <div className="hero-actions">
              <SpecialButton
                as={Link}
                to="/onboarding?mode=signup"
                icon="arrow_forward"
              >
                Get started free
              </SpecialButton>
              <SpecialButton
                as={Link}
                to="/onboarding?mode=signup"
                variant="secondary"
                icon="login"
              >
                Sign in with Google
              </SpecialButton>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="landing-section stats-section">
          <div className="landing-container">
            <div className="stats-grid">
              <div className="stat-row">
                <h2 className="text-strong">99.9%</h2>
                <div className="stat-divider" />
                <p className="text-sub">Verification Accuracy</p>
                <span className="text-soft">Direct source data</span>
              </div>
              <div className="stat-row">
                <h2 className="text-strong">15s</h2>
                <div className="stat-divider" />
                <p className="text-sub">Average Turnaround</p>
                <span className="text-soft">Real-time processing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="landing-section features-section">
          <div className="landing-container">
            <h2
              className="hero-title text-center"
              style={{ fontSize: "32px", marginBottom: "48px" }}
            >
              Built for developers
            </h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3 className="text-strong">Easy Integration</h3>
                <p className="text-sub">
                  REST APIs and SDKs for every platform. Get up and running in
                  minutes.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3 className="text-strong">Privacy First</h3>
                <p className="text-sub">
                  We never store your users' sensitive documents. Compliance
                  made simple.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌍</div>
                <h3 className="text-strong">Global Coverage</h3>
                <p className="text-sub">
                  Verify users from over 190 countries with localized support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="landing-section">
          <div className="landing-container">
            <h2
              className="hero-title text-center"
              style={{ fontSize: "32px", marginBottom: "48px" }}
            >
              How it works
            </h2>
            <div className="how-it-works-grid">
              <div className="step-card">
                <span
                  className="step-number"
                  style={{ color: "var(--state-information-base)" }}
                >
                  01
                </span>
                <h3 className="text-strong">Request Token</h3>
                <p className="text-sub">
                  Send a request to start a verification flow for your user.
                </p>
              </div>
              <div className="step-card">
                <span
                  className="step-number"
                  style={{ color: "var(--state-success-base)" }}
                >
                  02
                </span>
                <h3 className="text-strong">User Verifies</h3>
                <p className="text-sub">
                  User completes the flow in our secure, white-labeled
                  environment.
                </p>
              </div>
              <div className="step-card">
                <span
                  className="step-number"
                  style={{ color: "var(--state-feature-base)" }}
                >
                  03
                </span>
                <h3 className="text-strong">Get Results</h3>
                <p className="text-sub">
                  Receive a verification token back to your API instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="landing-section testimonial-section">
          <div className="landing-container">
            <div className="testimonial-card">
              <img
                src={imgPerson}
                alt="Testimonial Author"
                className="author-image"
              />
              <div className="testimonial-content">
                <p
                  className="text-strong"
                  style={{
                    fontSize: "24px",
                    fontStyle: "italic",
                    marginBottom: "24px",
                  }}
                >
                  "PrivyID allowed us to scale our onboarding globally without
                  worrying about data privacy compliance. It's a game changer
                  for our engineering team."
                </p>
                <div>
                  <h4 className="text-strong">Alex Rivera</h4>
                  <p className="text-soft">CTO at Horizon Tech</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="landing-section cta-section">
          <div className="landing-container">
            <h2 className="hero-title">Ready to integrate?</h2>
            <p className="hero-subtitle">
              Start by generating your API keys below and experience the future
              of identity.
            </p>
            <div className="hero-actions">
              <SpecialButton
                as={Link}
                to="/onboarding?mode=signup"
                icon="vpn_key"
              >
                Generate API keys
              </SpecialButton>
              <SpecialButton variant="secondary" icon="description">
                View documentation
              </SpecialButton>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-container">
          <div className="footer-nav-column">
            <img
              src={imgLogoFooter}
              alt="PrivyID"
              style={{ width: "100px", marginBottom: "16px" }}
            />
            <p className="text-soft">
              Privacy-first identity verification for modern platforms. Secure,
              fast, and compliant.
            </p>
            <p
              className="text-soft"
              style={{ marginTop: "auto", fontSize: "12px" }}
            >
              © 2026 PrivyID. All rights reserved.
            </p>
          </div>
          <div className="footer-nav-column">
            <h4 className="text-white" style={{ marginBottom: "16px" }}>
              Product
            </h4>
            <a href="#" className="footer-link">
              Features
            </a>
            <a href="#" className="footer-link">
              Pricing
            </a>
            <a href="#" className="footer-link">
              Security
            </a>
          </div>
          <div className="footer-nav-column">
            <h4 className="text-white" style={{ marginBottom: "16px" }}>
              Developers
            </h4>
            <a href="#" className="footer-link">
              Documentation
            </a>
            <a href="#" className="footer-link">
              API Reference
            </a>
            <a href="#" className="footer-link">
              System Status
            </a>
          </div>
          <div className="footer-nav-column">
            <h4 className="text-white" style={{ marginBottom: "16px" }}>
              Social
            </h4>
            <a href="#" className="footer-link">
              Twitter / X
            </a>
            <a href="#" className="footer-link">
              GitHub
            </a>
            <a href="#" className="footer-link">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
