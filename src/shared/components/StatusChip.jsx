import React from "react";
import styles from "./StatusChip.module.css";

const StatusChip = ({ status, className = "" }) => {
  const normalizedStatus = status?.toLowerCase().replace(/\s+/g, "_");

  return (
    <span
      className={`${styles.status} ${styles[normalizedStatus]} ${className}`}
    >
      {status}
    </span>
  );
};

export default StatusChip;
