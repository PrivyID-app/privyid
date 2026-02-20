import React, { useState } from "react";
import ImageCheckbox from "../../../shared/components/ImageCheckbox"; // Import the new Checkbox component
import CustomSelect from "../../../shared/components/CustomSelect";
import VerificationModal from "../../../shared/components/VerificationModal";

const AdminDashboardTable = ({ data = [], idLabel = "Verification No." }) => {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set());
      setSelectAll(false);
      return;
    }

    const all = new Set(data.map((_, i) => i));
    setSelectedRows(all);
    setSelectAll(true);
  };

  const toggleRow = (index) => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      setSelectAll(next.size === data.length);
      return next;
    });
  };

  const handleView = (item) => {
    setSelectedData(item);
    setIsModalOpen(true);
  };

  return (
    <div className="merchant_table">
      <div className="table_header">
        <div className="cell checkbox_cell">
          <ImageCheckbox checked={selectAll} onChange={toggleSelectAll} />
        </div>
        <div className="cell">
          <p>{idLabel}</p>
        </div>
        <div className="cell">
          <p>Organization Type</p>
        </div>
        <div className="cell">
          <p>Company Name</p>
        </div>
        <div className="cell">
          <p>Status</p>
        </div>
        <div className="cell">
          <p>Verifications</p>
        </div>
        <div className="cell">
          <p>Date</p>
        </div>
        <div className="cell">
          <p>Time</p>
        </div>
        <div className="cell action_cell">
          <p>Action</p>
        </div>
      </div>

      <div className="table_body">
        {data.length === 0 ? (
          <div
            style={{
              padding: "3rem",
              textAlign: "center",
              color: "var(--text-soft-400)",
            }}
          >
            No records found.
          </div>
        ) : (
          data.map((item, index) => (
            <div
              className={`table_row ${selectedRows.has(index) ? "selected_row" : ""}`}
              key={index}
            >
              <div className="cell checkbox_cell">
                <ImageCheckbox
                  checked={selectedRows.has(index)}
                  onChange={(e) => {
                    e.stopPropagation();
                    toggleRow(index);
                  }}
                />
              </div>
              <div className="cell">
                <p>{item.id}</p>
              </div>
              <div className="cell">
                <p>{item.type}</p>
              </div>
              <div className="cell">
                <p>{item.name}</p>
              </div>
              <div className="cell">
                <p className={`status ${item.status?.toLowerCase() || ""}`}>
                  {item.status || "N/A"}
                </p>
              </div>
              <div className="cell">
                <p>{item.verifications || "1"}</p>
              </div>
              <div className="cell">
                <p>{item.date}</p>
              </div>
              <div className="cell">
                <p>{item.time}</p>
              </div>
              <div className="cell action_cell">
                <button
                  className="action_button"
                  onClick={() => handleView(item)}
                >
                  <span className="material-symbols-outlined table_action">
                    visibility
                  </span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="pagination">
        <p className="pagination_title">Page 1 of 1</p>
        <div className="pagination_buttons">
          <button className="pagination_button">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="page">
            <button className="page_button active_page">1</button>
          </div>
          <button className="pagination_button">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      <VerificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedData}
      />
    </div>
  );
};

export default AdminDashboardTable;
