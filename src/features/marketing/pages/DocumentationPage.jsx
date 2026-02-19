import React from "react";
import WebNav from "../../../shared/components/WebNav";
import ApiDeveloperContent from "../../../shared/components/ApiDeveloperContent";
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
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer_content}>
          <div className={styles.footer_logo}>
            <h3>PrivyID</h3>
            <p>The identity infrastructure for the modern web.</p>
          </div>
          <div className={styles.footer_links}>
            <div className={styles.link_group}>
              <h4>Product</h4>
              <a href="#">Verification</a>
              <a href="#">API Reference</a>
              <a href="#">Pricing</a>
            </div>
            <div className={styles.link_group}>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Privacy</a>
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <p>© 2026 PrivyID Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DocumentationPage;
