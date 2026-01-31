import React from 'react';

/**
 * Reusable Tabs component
 * @param {Array} tabs - Array of { label: string, key: string }
 * @param {string} activeTab - The key of the currently active tab
 * @param {function} onTabChange - Callback function when a tab is clicked
 */
const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="tab_menu">
      {tabs.map((tab) => (
        <div
          key={tab.key}
          className={`tab_menu_item ${activeTab === tab.key ? 'tab_active' : 'tab_inactive'}`}
          onClick={() => onTabChange(tab.key)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
