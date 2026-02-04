import React, { useState, useRef, useEffect } from "react";

const FilterDropdown = ({
  options = [],
  onFilterChange,
  label = "Filter Records",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="filter_dropdown_wrapper"
      ref={dropdownRef}
      style={{ position: "relative" }}
    >
      <button className="secondary_button" onClick={() => setIsOpen(!isOpen)}>
        <span className="material-symbols-outlined">filter_list</span>
        <p>{label}</p>
      </button>

      {isOpen && (
        <div className="filter_dropdown_content">
          {options.map((option) => (
            <div
              key={option.value}
              className="filter_dropdown_item"
              onClick={() => {
                onFilterChange && onFilterChange(option.value);
                setIsOpen(false);
              }}
            >
              <p>{option.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
