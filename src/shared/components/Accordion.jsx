import React, { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = ({
  title,
  children,
  defaultOpen = false,
  className = "",
  headerClassName = "",
  contentClassName = "",
  icon = null,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${className}`}>
      <div
        className={`${styles.accordionHeader} ${headerClassName}`}
        onClick={toggleAccordion}
      >
        <div className={styles.accordionTitle}>{title}</div>
        <span
          className={`material-symbols-outlined ${styles.icon} ${isOpen ? styles.iconRotated : ""}`}
        >
          expand_more
        </span>
      </div>
      {isOpen && (
        <div
          className={`${styles.accordionContent} ${styles.accordionContentOpen} ${contentClassName}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
