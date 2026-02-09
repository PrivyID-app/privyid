import React, { useState, useRef, useEffect } from "react";
import Portal from "./Portal";

const FilterDropdown = ({
  options = [],
  onFilterChange,
  label = "Filter Records",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const dropdownRef = useRef(null);

  const updateCoords = () => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".filter_dropdown_content")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      updateCoords();
      window.addEventListener("scroll", updateCoords, true);
      window.addEventListener("resize", updateCoords);
    }
    return () => {
      window.removeEventListener("scroll", updateCoords, true);
      window.removeEventListener("resize", updateCoords);
    };
  }, [isOpen]);

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
        <Portal>
          <div
            className="filter_dropdown_content"
            style={{
              position: "fixed",
              top: `${coords.top - window.scrollY + 8}px`,
              left: `${coords.left - window.scrollX}px`,
              width: `${coords.width}px`,
              minWidth: "max-content",
              zIndex: 9999,
            }}
          >
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
        </Portal>
      )}
    </div>
  );
};

export default FilterDropdown;
