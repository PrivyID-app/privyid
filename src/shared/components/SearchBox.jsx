import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className={styles.searchBoxContainer}>
      <span 
        className={`material-symbols-outlined ${styles.searchIcon}`}
      >
        search
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBox;
