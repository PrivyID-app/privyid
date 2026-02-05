import React, { useState, useRef, useEffect } from "react";
import Portal from "./Portal";

const CustomSelect = ({
  options = [],
  value,
  onSelect,
  placeholder = "Select option",
  className = "",
  placement = "bottom",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const dropdownRef = useRef(null);

  const updateCoords = () => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const isTop = placement === "top";
      setCoords({
        top: (isTop ? rect.top : rect.bottom) + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        isTop,
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside trigger wrapper AND not within a portal-rendered dropdown
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".custom_select_dropdown")
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

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div
      className={`custom_select_wrapper ${className} ${isOpen ? "is-open" : ""}`}
      ref={dropdownRef}
      style={{ position: "relative" }}
    >
      <div className="styled_select_trigger" onClick={() => setIsOpen(!isOpen)}>
        <p>{selectedOption ? selectedOption.label : placeholder}</p>
        <span className="material-symbols-outlined dropdown_icon">
          expand_more
        </span>
      </div>

      {isOpen && (
        <Portal>
          <div
            className="filter_dropdown_content custom_select_dropdown"
            style={{
              position: "fixed",
              top: `${coords.top - window.scrollY + (coords.isTop ? -8 : 8)}px`,
              left: `${coords.left - window.scrollX}px`,
              width: `${coords.width}px`,
              minWidth: "unset",
              zIndex: 9999,
              transform: coords.isTop ? "translateY(-100%)" : "none",
            }}
          >
            {options.map((option) => (
              <div
                key={option.value}
                className={`filter_dropdown_item ${value === option.value ? "selected" : ""}`}
                onClick={() => {
                  onSelect && onSelect(option.value);
                  setIsOpen(false);
                }}
              >
                <p>{option.label}</p>
                {value === option.value && (
                  <span className="material-symbols-outlined check_icon">
                    check
                  </span>
                )}
              </div>
            ))}
          </div>
        </Portal>
      )}
    </div>
  );
};

export default CustomSelect;
