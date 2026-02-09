import React, { useState } from "react";
import "../../super-admin.css";
import ImageCheckbox from "../../../../shared/components/ImageCheckbox"; // Import ImageCheckbox

const ApiKeysTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const apiKeys = [
    {
      id: "KEY-001",
      merchant: "Ironclad Systems",
      keyPreview: "sk_live_••••••••••••4a2b",
      created: "2024-01-15",
      lastUsed: "2024-09-15 10:30",
      requests: "12,450",
      status: "active",
    },
    {
      id: "KEY-002",
      merchant: "TechFlow Solutions",
      keyPreview: "sk_live_••••••••••••7c8d",
      created: "2024-01-20",
      lastUsed: "2024-09-15 09:15",
      requests: "8,320",
      status: "active",
    },
    {
      id: "KEY-003",
      merchant: "GreenLeaf Ventures",
      keyPreview: "sk_live_••••••••••••9e1f",
      created: "2024-02-05",
      lastUsed: "2024-09-10 14:20",
      requests: "5,680",
      status: "inactive",
    },
    {
      id: "KEY-004",
      merchant: "Quantum Dynamics",
      keyPreview: "sk_live_••••••••••••2g3h",
      created: "2024-02-12",
      lastUsed: "2024-09-15 08:45",
      requests: "15,230",
      status: "active",
    },
    {
      id: "KEY-005",
      merchant: "CloudNine Inc",
      keyPreview: "sk_live_••••••••••••5i6j",
      created: "2024-02-18",
      lastUsed: "2024-08-30 16:10",
      requests: "3,450",
      status: "revoked",
    },
  ];

  const handleSelectAll = () => {
    if (selectedRows.length === apiKeys.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(apiKeys.map((key) => key.id));
    }
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "active":
        return "approved";
      case "inactive":
        return "pending";
      case "revoked":
        return "rejected";
      default:
        return "";
    }
  };

  const handleRevoke = (keyId) => {
    console.log(`Revoking key: ${keyId}`);
  };

  const handleRegenerate = (keyId) => {
    console.log(`Regenerating key: ${keyId}`);
  };

  return (
    <div className="merchant_table api_keys_table">
      <div className="table_header">
        <div className="cell checkbox_cell">
          <ImageCheckbox
            checked={selectedRows.length === apiKeys.length}
            onChange={handleSelectAll}
          />
        </div>
        <div className="cell">
          <p>Merchant</p>
        </div>
        <div className="cell">
          <p>API Key</p>
        </div>
        <div className="cell">
          <p>Created</p>
        </div>
        <div className="cell">
          <p>Last Used</p>
        </div>
        <div className="cell">
          <p>Requests (30d)</p>
        </div>
        <div className="cell">
          <p>Status</p>
        </div>
        <div className="cell action_cell">
          <p>Actions</p>
        </div>
      </div>

      <div className="table_body">
        {apiKeys.map((key) => (
          <div key={key.id} className="table_row">
            <div className="cell checkbox_cell">
              <ImageCheckbox
                checked={selectedRows.includes(key.id)}
                onChange={() => handleSelectRow(key.id)}
              />
            </div>
            <div className="cell">
              <p>{key.merchant}</p>
            </div>
            <div className="cell">
              <p className="api_key_preview">{key.keyPreview}</p>
            </div>
            <div className="cell">
              <p>{key.created}</p>
            </div>
            <div className="cell">
              <p>{key.lastUsed}</p>
            </div>
            <div className="cell">
              <p>{key.requests}</p>
            </div>
            <div className="cell">
              <p className={`status ${getStatusClass(key.status)}`}>
                {key.status.charAt(0).toUpperCase() + key.status.slice(1)}
              </p>
            </div>
            <div className="cell action_cell">
              <div className="action_buttons">
                <button
                  className="action_button"
                  onClick={() => handleRegenerate(key.id)}
                  title="Regenerate"
                >
                  <span className="material-symbols-outlined">refresh</span>
                </button>
                <button
                  className="action_button danger"
                  onClick={() => handleRevoke(key.id)}
                  title="Revoke"
                >
                  <span className="material-symbols-outlined">block</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiKeysTable;