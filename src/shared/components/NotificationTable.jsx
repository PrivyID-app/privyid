import React from "react";
import styles from "./NotificationsContent.module.css";
import ImageCheckbox from "./ImageCheckbox";

const NotificationTable = ({
  notifications,
  selectedIds,
  toggleSelectAll,
  toggleSelectRow,
  onRowClick,
}) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <div className={styles.tableHeaderCheckboxCol}>
          <ImageCheckbox
            checked={selectedIds.size === notifications.length}
            onChange={toggleSelectAll}
          />
        </div>
        <div className={styles.tableHeaderMessageCol}>Message</div>
        <div className={styles.tableHeaderSpacerCol} />
        <div className={styles.tableHeaderDateCol}>Date</div>
        <div className={styles.tableHeaderActionCol}>Action</div>
      </div>

      <div className={styles.tableBody}>
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`${styles.tableRow} ${
              selectedIds.has(notif.id) ? styles.tableRowSelected : ""
            }`}
            onClick={() => onRowClick(notif)}
          >
            <div className={styles.tableRowCheckboxCol}>
              <ImageCheckbox
                checked={selectedIds.has(notif.id)}
                onChange={() => toggleSelectRow(notif.id)}
              />
            </div>
            <div className={styles.tableRowTitleCol}>{notif.title}</div>
            <div className={styles.tableRowMessageCol}>{notif.message}</div>
            <div className={styles.tableRowDateCol}>{notif.time}</div>
            <div className={styles.tableRowActionCol}>
              <button className={styles.actionButton} aria-label="Open">
                <span className={`material-symbols-outlined ${styles.notificationIcon}`}>visibility</span>
              </button>
              <button className={styles.actionButton} aria-label="Archive">
                <span className={`material-symbols-outlined ${styles.notificationIcon}`}>archive</span>
              </button>
              <button className={styles.actionButton} aria-label="Delete">
                <span className={`material-symbols-outlined ${styles.notificationIcon}`}>delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationTable;
