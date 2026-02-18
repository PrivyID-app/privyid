import React, { useEffect, useState, useRef } from "react";
import Portal from "./Portal";
import cardPattern from "../../assets/images/card-pattern.svg";
import styles from "./Drawer.module.css";

const Drawer = ({ isOpen, onClose, children, title, width = "400px" }) => {
  const [isRendered, setIsRendered] = useState(false);
  const prevIsOpen = useRef(isOpen);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (isOpen && !prevIsOpen.current) {
      // Only when opening
      setIsRendered(true);
      document.body.style.overflow = "hidden";
    } else if (!isOpen && prevIsOpen.current) {
      // Only when closing
      document.body.style.overflow = "unset";
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 300); // match animation duration
      return () => clearTimeout(timer);
    }
    prevIsOpen.current = isOpen; // Update ref for next render
  }, [isOpen]);

  if (!isRendered && !isOpen) return null;

  return (
    <Portal>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlay_open : ""}`}
        onClick={onClose}
      />
      <div
        className={`${styles.drawer} ${isOpen ? styles.drawer_open : ""}`}
        style={{ width }}
      >
        <div className={styles.drawer_header}>
          <h3>{title}</h3>

          <div className={styles.pattern}>
            <img src={cardPattern} alt="pattern" />
          </div>

          <button className={styles.close_button} onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className={styles.drawer_content}>{children}</div>
      </div>
    </Portal>
  );
};

export default Drawer;
