import React, { useState } from "react";
import CheckboxIcon from "../../assets/images/Checkbox [1.0].svg";
import CheckboxActiveIcon from "../../assets/images/Checkbox-active [1.0].svg";
import VerificationModal from "./VerificationModal";

import CustomSelect from "./CustomSelect";

const VerificationTable = ({ data = [], idLabel = "Verification No." }) => {
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

  const handleViewDetails = (item) => {
    setSelectedData(item);
    setIsModalOpen(true);
  };

  return (
    <div className="merchant_table">
      <div className="table_header">
        <div className="cell checkbox_cell">
          <img
            src={selectAll ? CheckboxActiveIcon : CheckboxIcon}
            alt="Select all"
            onClick={toggleSelectAll}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="cell">
          <p>{idLabel}</p>
        </div>
        <div className="cell">
          <p>ID Type</p>
        </div>
        <div className="cell">
          <p>User Name</p>
        </div>
        <div className="cell">
          <p>Status</p>
        </div>
        <div className="cell">
          <p>Batch No.</p>
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
        {data.map((item, index) => (
          <div
            className={`table_row ${selectedRows.has(index) ? "selected_row" : ""}`}
            key={index}
          >
            <div className="cell checkbox_cell">
              <img
                src={
                  selectedRows.has(index) ? CheckboxActiveIcon : CheckboxIcon
                }
                alt={selectedRows.has(index) ? "Selected" : "Select"}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleRow(index);
                }}
                style={{ cursor: "pointer" }}
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
              <p className={`status ${item.status.toLowerCase()}`}>
                {item.status}
              </p>
            </div>
            <div className="cell">
              <p>{item.batch}</p>
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
                onClick={() => handleViewDetails(item)}
              >
                <span className="material-symbols-outlined table_action">
                  visibility
                </span>
              </button>

              <button className="action_button">
                <span className="material-symbols-outlined table_action delete_icon">
                  delete
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <p className="pagination_title">Page 1 of 5</p>
        <div className="pagination_buttons">
          <button className="pagination_button">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="page">
            <button className="page_button active_page">1</button>
            <button className="page_button">2</button>
            <button className="page_button">3</button>
            <button className="page_button">4</button>
            <button className="page_button">5</button>
          </div>
          <button className="pagination_button">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
        <CustomSelect
          options={[
            { value: "1", label: "1/Page 5" },
            { value: "2", label: "2/Page 5" },
            { value: "3", label: "3/Page 5" },
            { value: "4", label: "4/Page 5" },
            { value: "5", label: "5/Page 5" },
          ]}
          value="1"
          onSelect={(val) => console.log("Page:", val)}
          className="service_selector_custom page_dropdown_custom"
          placement="top"
        />
      </div>
      <VerificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedData}
      />
    </div>
  );
};

export default VerificationTable;
