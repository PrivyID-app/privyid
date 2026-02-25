import React from "react";
import { Link } from "react-router-dom";
import WebNav from "../../../shared/components/WebNav";
import Footer from "../../../shared/components/Footer";
import SpecialButton from "../../../shared/components/SpecialButton";
import SecondaryButton from "../../../shared/components/SecondaryButton";
import CtaSection from "../../../shared/components/CtaSection";
import "../../../app/pages/LandingPage.css";

const PricingPage = () => {
  return (
    <div className="lp-body">
      <WebNav />
      <main className="lp-main">
        <section className="lp-hero">
          <div className="lp-hero-content">
            <h1 className="lp-hero-title">Simple, Transparent Pricing</h1>
            <p className="lp-hero-subtitle">
              Scale your identity infrastructure with predictable costs that
              grow with your business.
            </p>
          </div>
        </section>

        <section className="lp-section">
          <div className="lp-container">
            <div
              className="lp-testimonial-grid"
              style={{ alignItems: "stretch" }}
            >
              {/* Pricing Card 1 */}
              <div
                className="lp-bento-card"
                style={{ flex: 1, border: "1px solid var(--stroke-sub-300)" }}
              >
                <div className="lp-hero-chip">Startup</div>
                <h3 style={{ fontSize: "2.5rem", margin: "1.5rem 0" }}>
                  $0
                  <span
                    style={{ fontSize: "1rem", color: "var(--text-soft-400)" }}
                  >
                    /mo
                  </span>
                </h3>
                <p style={{ marginBottom: "2rem" }}>
                  Perfect for exploring and early-stage projects.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "1rem",
                    marginBottom: "3rem",
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#10b981" }}
                    >
                      check_circle
                    </span>{" "}
                    10 verifications / mo
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#10b981" }}
                    >
                      check_circle
                    </span>{" "}
                    Full API Access
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#10b981" }}
                    >
                      check_circle
                    </span>{" "}
                    Community Support
                  </li>
                </ul>
                <SecondaryButton
                  as={Link}
                  to="/onboarding?mode=signup"
                  style={{ width: "100%" }}
                >
                  Get Started
                </SecondaryButton>
              </div>

              {/* Pricing Card 2 (Featured) */}
              <div
                className="lp-bento-card lp-bento-tall"
                style={{ flex: 1.2, transform: "scale(1.05)", zIndex: 1 }}
              >
                <div
                  className="lp-hero-chip"
                  style={{
                    background: "var(--bg-surface-800)",
                    color: "white",
                  }}
                >
                  Growth
                </div>
                <h3 style={{ fontSize: "3rem", margin: "1.5rem 0" }}>
                  $99
                  <span
                    style={{ fontSize: "1rem", color: "var(--text-soft-400)" }}
                  >
                    /mo
                  </span>
                </h3>
                <p style={{ marginBottom: "2rem" }}>
                  For growing teams scaling their user base.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "1rem",
                    marginBottom: "3rem",
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#10b981" }}
                    >
                      check_circle
                    </span>{" "}
                    500 verifications / mo
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#10b981" }}
                    >
                      check_circle
                    </span>{" "}
                    Webhook Delivery
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#10b981" }}
                    >
                      check_circle
                    </span>{" "}
                    Priority Support
                  </li>
                </ul>
                <SpecialButton
                  as={Link}
                  to="/onboarding?mode=signup"
                  style={{ width: "100%" }}
                >
                  Choose Growth
                </SpecialButton>
              </div>

              {/* Pricing Card 3 */}
              <div
                className="lp-bento-card"
                style={{ flex: 1, border: "1px solid var(--stroke-sub-300)" }}
              >
                <div className="lp-hero-chip">Enterprise</div>
                <h3 style={{ fontSize: "2.5rem", margin: "1.5rem 0" }}>
                  Custom
                </h3>
                <p style={{ marginBottom: "2rem" }}>
                  Tailored solutions for large-scale operations.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "1rem",
                    marginBottom: "3rem",
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#10b981" }}
                    >
                      check_circle
                    </span>{" "}
                    Unlimited volume
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#10b981" }}
                    >
                      check_circle
                    </span>{" "}
                    Dedicated Account Manager
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#10b981" }}
                    >
                      check_circle
                    </span>{" "}
                    Custom SLA
                  </li>
                </ul>
                <SecondaryButton
                  href="mailto:sales@privyid.com"
                  style={{ width: "100%" }}
                >
                  Contact Sales
                </SecondaryButton>
              </div>
            </div>
          </div>
        </section>

        <CtaSection
          title="Looking for a custom plan?"
          subtitle="Our team is ready to help you find the right solution for your business."
          primaryButtonText="Contact Sales"
          primaryButtonTo="mailto:sales@privyid.com"
          primaryButtonIcon="mail"
          showSecondaryButton={false}
        />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
