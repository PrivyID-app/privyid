import React, { useState } from "react";
import "../../super-admin.css";

const WebhookManager = () => {
  const [webhooks, setWebhooks] = useState([
    {
      id: "WH-001",
      event: "verification.completed",
      url: "https://api.ironclad.com/webhooks/verify",
      status: "active",
      lastTriggered: "2024-09-15 10:30",
    },
    {
      id: "WH-002",
      event: "merchant.created",
      url: "https://api.techflow.com/webhooks/merchant",
      status: "active",
      lastTriggered: "2024-09-14 15:20",
    },
    {
      id: "WH-003",
      event: "payment.received",
      url: "https://api.quantum.com/webhooks/payment",
      status: "inactive",
      lastTriggered: "2024-09-10 08:45",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

  const eventTypes = [
    "verification.completed",
    "verification.failed",
    "merchant.created",
    "merchant.updated",
    "payment.received",
    "payment.failed",
    "api.key.generated",
    "api.key.revoked",
  ];

  const handleToggleStatus = (id) => {
    setWebhooks(
      webhooks.map((wh) =>
        wh.id === id
          ? { ...wh, status: wh.status === "active" ? "inactive" : "active" }
          : wh,
      ),
    );
  };

  const handleDelete = (id) => {
    setWebhooks(webhooks.filter((wh) => wh.id !== id));
  };

  const handleTest = (id) => {
    console.log(`Testing webhook: ${id}`);
  };

  return (
    <div className="webhook_manager">
      <div className="webhook_header">
        <div>
          <h3>Webhook Management</h3>
          <p className="webhook_description">
            Configure webhooks for platform events
          </p>
        </div>
        <button
          className="add_webhook_button"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <span className="material-symbols-outlined">add</span>
          Add Webhook
        </button>
      </div>

      {showAddForm && (
        <div className="add_webhook_form">
          <h4>Add New Webhook</h4>
          <div className="form_group">
            <label>Event Type</label>
            <select className="form_input">
              {eventTypes.map((event) => (
                <option key={event} value={event}>
                  {event}
                </option>
              ))}
            </select>
          </div>
          <div className="form_group">
            <label>Webhook URL</label>
            <input
              type="url"
              placeholder="https://your-domain.com/webhook"
              className="form_input"
            />
          </div>
          <div className="form_actions">
            <button className="save_button">Create Webhook</button>
            <button
              className="cancel_button"
              onClick={() => setShowAddForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="webhooks_list">
        <div className="table_header">
          <div className="cell">Event Type</div>
          <div className="cell">Webhook URL</div>
          <div className="cell">Status</div>
          <div className="cell">Last Triggered</div>
          <div className="cell">Actions</div>
        </div>

        {webhooks.map((webhook) => (
          <div key={webhook.id} className="table_row">
            <div className="cell">
              <span className="event_badge">{webhook.event}</span>
            </div>
            <div className="cell">
              <p className="webhook_url">{webhook.url}</p>
            </div>
            <div className="cell">
              <span
                className={`status ${
                  webhook.status === "active" ? "approved" : "pending"
                }`}
              >
                {webhook.status.charAt(0).toUpperCase() +
                  webhook.status.slice(1)}
              </span>
            </div>
            <div className="cell">
              <p>{webhook.lastTriggered}</p>
            </div>
            <div className="cell">
              <div className="action_buttons">
                <button
                  className="action_button"
                  onClick={() => handleTest(webhook.id)}
                  title="Test"
                >
                  <span className="material-symbols-outlined">play_arrow</span>
                </button>
                <button
                  className="action_button"
                  onClick={() => handleToggleStatus(webhook.id)}
                  title={webhook.status === "active" ? "Disable" : "Enable"}
                >
                  <span className="material-symbols-outlined">
                    {webhook.status === "active" ? "pause" : "play_circle"}
                  </span>
                </button>
                <button
                  className="action_button danger"
                  onClick={() => handleDelete(webhook.id)}
                  title="Delete"
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebhookManager;
