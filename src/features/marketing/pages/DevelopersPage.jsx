import React from "react";
import { Link } from "react-router-dom";
import WebNav from "../../../shared/components/WebNav";
import Footer from "../../../shared/components/Footer";
import SpecialButton from "../../../shared/components/SpecialButton";
import SecondaryButton from "../../../shared/components/SecondaryButton";
import "../../../app/pages/LandingPage.css";

const DevelopersPage = () => {
  return (
    <div className="lp-body">
      <WebNav />
      <main className="lp-main">
        <section className="lp-hero">
          <div className="lp-hero-content">
            <div className="lp-hero-chip">
              <span className="lp-hero-chip-new">API First</span>
              <p>Built by developers, for developers</p>
            </div>
            <h1 className="lp-hero-title">Integration in Minutes</h1>
            <p className="lp-hero-subtitle">
              Our robust API and SDKs make it easy to integrate identity
              verification into any application stack.
            </p>
            <div className="lp-hero-buttons">
              <SpecialButton as={Link} to="/documentation" icon="code">
                API Reference
              </SpecialButton>
              <SecondaryButton as={Link} to="/onboarding?mode=signup">
                Get API Keys
              </SecondaryButton>
            </div>
          </div>
        </section>

        <section className="lp-section">
          <div className="lp-container">
            <div className="lp-bento-grid">
              <div
                className="lp-bento-card lp-bento-tall"
                style={{ gridColumn: "1 / 3" }}
              >
                <div className="lp-bento-icon">
                  <span className="material-symbols-outlined">terminal</span>
                </div>
                <h3>Modern API Design</h3>
                <p>
                  RESTful endpoints, consistent JSON responses, and versioned
                  updates that never break your production code.
                </p>
                <div
                  style={{
                    background: "#0e121b",
                    padding: "1.5rem",
                    borderRadius: "0.5rem",
                    marginTop: "2rem",
                    color: "#60a5fa",
                  }}
                >
                  <pre
                    style={{ fontSize: "0.875rem" }}
                  >{`curl -X POST https://api.privyid.com/v1/verify \\
  -H "Authorization: Bearer YOUR_KEY" \\
  -d '{ "type": "kyc", "user_id": "cust_123" }'`}</pre>
                </div>
              </div>

              <div className="lp-bento-card">
                <div className="lp-bento-icon">
                  <span className="material-symbols-outlined">webhook</span>
                </div>
                <h3>Reliable Webhooks</h3>
                <p>
                  State-of-the-art event delivery system with automatic retries
                  and cryptographic signing.
                </p>
              </div>

              <div className="lp-bento-card">
                <div className="lp-bento-icon">
                  <span className="material-symbols-outlined">
                    developer_mode
                  </span>
                </div>
                <h3>Official SDKs</h3>
                <p>
                  Drop-in libraries for React, Node.js, Python, Go, and Ruby.
                </p>
              </div>

              <div className="lp-bento-card">
                <div className="lp-bento-icon">
                  <span className="material-symbols-outlined">visibility</span>
                </div>
                <h3>Sandbox Environment</h3>
                <p>
                  Test your entire flow with simulated responses before going
                  live.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DevelopersPage;
