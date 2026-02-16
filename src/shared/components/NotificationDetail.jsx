import React from "react";
import styles from "./NotificationsContent.module.css"; // Reusing styles

const NotificationDetail = ({ notification, onClose }) => {
  const [reply, setReply] = React.useState("");

  const handleSendReply = () => {
    console.log(`Replying to notification ${notification.id}: ${reply}`);
    // In a real application, you would send the reply here
    setReply("");
    onClose(); // Close the detail view after replying
  };

  return (
    <div className="content_area">
      <button className="secondary_button" onClick={onClose}>
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Notifications
      </button>

      <div className={styles.notificationDetailHeader}>
        <h2>{notification.title}</h2>
        <p className={styles.notificationDetailMeta}>
          Notification ID: {notification.id} | Received: {notification.time}
        </p>
      </div>

      <div className={styles.notificationDetailBody}>
        <h3>Message</h3>
        <p>{notification.message}</p>
      </div>

      <div className={styles.responseComposer}>
        <h3>Reply / Take Action</h3>
        <textarea
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Type your reply or action here..."
          rows="6"
          className={styles.responseTextArea}
        />
        <div className={styles.composerActions}>
          <button className="primary_button" onClick={handleSendReply}>
            <span className="material-symbols-outlined">send</span>
            Send Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetail;
