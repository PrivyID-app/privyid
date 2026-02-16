import React, { useState } from "react";
import Pagination from "./Pagination";
import SearchBox from "./SearchBox";
import styles from "./NotificationsContent.module.css";
import Tabs from "./Tabs";
import NotificationTable from "./NotificationTable";
import NotificationDetail from "./NotificationDetail";

// Reusing the Custom Checkbox from legacy
const Checkbox = ({ checked = false, onChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onChange?.(!checked);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styles.customCheckboxButton}
      style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
      aria-checked={checked}
      role="checkbox"
    >
      <div
        className={`${styles.customCheckboxInnerBox} ${
          checked ? styles.customCheckboxInnerBoxChecked : ""
        }`}
      />
      <div
        className={`${styles.customCheckboxDot} ${
          checked ? styles.customCheckboxDotChecked : ""
        }`}
      />
    </button>
  );
};

const initialNotifications = [
  {
    id: "1",
    title: "Verification Completed",
    message:
      'Batch verification for "Corporate_ID_Batch_01.csv" has been completed successfully. 145 out of 150 verifications passed.',
    time: "10 mins ago",
    read: false,
  },
  {
    id: "2",
    title: "New Team Member Added",
    message:
      "Sarah Johnson (sarah@company.com) has been added to your team with Developer role.",
    time: "5 hours ago",
    read: false,
  },
  {
    id: "3",
    title: "API Rate Limit Warning",
    message:
      "You have used 85% of your API rate limit for this billing period. Consider upgrading your plan.",
    time: "1 day ago",
    read: true,
  },
  {
    id: "4",
    title: "Webhook Delivery Failed",
    message:
      "Failed to deliver verification result to endpoint https://api.yourapp.com/webhook. Error: Connection timeout.",
    time: "1 day ago",
    read: true,
  },
  {
    id: "5",
    title: "KYB Verification Approved",
    message:
      "Your business verification has been approved. You now have full access to all platform features.",
    time: "3 days ago",
    read: true,
  },
  {
    id: "6",
    title: "Security Alert",
    message:
      'Batch verification for "Corporate_ID_Batch_01.csv" has been completed successfully. 145 out of 150 verifications passed.',
    time: "3 days ago",
    read: true,
  },
  {
    id: "7",
    title: "Webhook Delivery Failed",
    message:
      "Failed to deliver verification result to endpoint https://api.yourapp.com/webhook. Error: Connection timeout.",
    time: "5 days ago",
    read: true,
  },
  {
    id: "8",
    title: "Monthly Usage Report",
    message:
      "Your monthly usage report is ready. You used 1,247 verifications this month.",
    time: "5 days ago",
    read: true,
  },
  {
    id: "9",
    title: "Webhook Delivery Failed",
    message:
      "Failed to deliver verification result to endpoint https://api.yourapp.com/webhook. Error: Connection timeout.",
    time: "6 days ago",
    read: true,
  },
];

const NotificationsContent = () => {
  const [activeTab, setActiveTab] = useState("Messages");
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const itemsPerPage = 10;

  const toggleSelectAll = () => {
    if (selectedIds.size === initialNotifications.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(initialNotifications.map((n) => n.id)));
    }
  };

  const toggleSelectRow = (id) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  const handleCloseNotificationDetail = () => {
    setSelectedNotification(null);
  };

  const totalPages = Math.ceil(initialNotifications.length / itemsPerPage);
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePageSelect = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.notificationsContent}>
      {selectedNotification ? (
        <NotificationDetail
          notification={selectedNotification}
          onClose={handleCloseNotificationDetail}
        />
      ) : (
        <>
          {/* Action Bar */}
          <div className={styles.actionBar}>
            <span className={styles.recentNotificationsTitle}>
              Recent Notifications
            </span>

            <SearchBox value={searchQuery} onChange={setSearchQuery} placeholder="Search notifications..." />
            

            <div className={styles.actionButtons}>

              <button onClick={() => {}} className="secondary_button">
                <span className="material-symbols-outlined"> filter_list </span>
                  Filter Records
              </button>
        
              <button onClick={() => {}} className="secondary_button">
                <span className="material-symbols-outlined"> download </span>
                  Download as CSV
              </button>

            </div>
          </div>

          {/* Tabs */}
          <Tabs tabs={[{ label: "Messages", key: "Messages" }, { label: "Archived", key: "Archived" }]} activeTab={activeTab} onTabChange={setActiveTab} />

          <NotificationTable
            notifications={initialNotifications}
            selectedIds={selectedIds}
            toggleSelectAll={toggleSelectAll}
            toggleSelectRow={toggleSelectRow}
            onRowClick={handleNotificationClick}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            onPageSelect={handlePageSelect}
          />
        </>
      )}
    </div>
  );
};

export default NotificationsContent;
