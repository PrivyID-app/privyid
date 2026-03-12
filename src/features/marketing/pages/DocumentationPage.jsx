import React from "react";
import WebNav from "../../../shared/components/WebNav";
import ApiDeveloperContent from "../../../shared/components/ApiDeveloperContent";
import CtaSection from "../../../shared/components/CtaSection";
import Footer from "../../../shared/components/Footer";
import styles from "./MarketingPage.module.css";

const DocumentationPage = () => {
  return (
    <div className={styles.marketing_container}>
      <WebNav />
      <main className={styles.main_content}>
        <div style={{ marginBottom: "2rem" }}>
          <h1 className={styles.section_title}>Documentation</h1>
          <p className={styles.section_subtitle}>
            Everything you need to integrate identity verification into your
            platform.
          </p>
        </div>

        <div
          className="documentation_content"
          style={{
            background: "#fff",
            borderRadius: "1rem",
            padding: "1rem",
            border: "1px solid var(--stroke-sub-300)",
          }}
        >
          <ApiDeveloperContent />
        </div>
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
};

export default DocumentationPage;
