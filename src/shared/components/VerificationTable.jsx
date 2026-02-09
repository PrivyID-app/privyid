import React, { useState } from "react";
import CheckboxIcon from "../../assets/images/Checkbox [1.0].svg";
import CheckboxActiveIcon from "../../assets/images/Checkbox-active [1.0].svg";
import VerificationModal from "./VerificationModal";
import Pagination from "./Pagination";

const VerificationTable = ({ data = [], idLabel = "Verification No." }) => {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set());
      setSelectAll(false);
      return;
    }

    const all = new Set(
      paginatedData.map((_, i) => i + (currentPage - 1) * itemsPerPage)
    );
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
        {paginatedData.map((item, index) => {
          const itemIndex = (currentPage - 1) * itemsPerPage + index;
          return (
            <div
              className={`table_row ${
                selectedRows.has(itemIndex) ? "selected_row" : ""
              }`}
              key={itemIndex}
            >
              <div className="cell checkbox_cell">
                <img
                  src={
                    selectedRows.has(itemIndex)
                      ? CheckboxActiveIcon
                      : CheckboxIcon
                  }
                  alt={selectedRows.has(itemIndex) ? "Selected" : "Select"}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleRow(itemIndex);
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
          );
        })}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onPageSelect={setCurrentPage}
      />

      <VerificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedData}
      />
    </div>
  );
};

export default VerificationTable;
