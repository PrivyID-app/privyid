import React, { useState } from "react";
import "../super-admin.css";
import ImageCheckbox from "../../../shared/components/ImageCheckbox";
import Pagination from "../../../shared/components/Pagination";

const AdminVerificationsTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const verifications = [
    {
      id: "PRY-2024-001",
      businessType: "Enterprise",
      businessName: "Ironclad Systems",
      status: "verified",
      count: "12,450",
      date: "15 Sep 2024",
      time: "10:30 AM",
    },
    {
      id: "PRY-2024-002",
      businessType: "Startup",
      businessName: "TechFlow Solutions",
      status: "pending",
      count: "8,320",
      date: "14 Sep 2024",
      time: "02:15 PM",
    },
    {
      id: "PRY-2024-003",
      businessType: "SME",
      businessName: "GreenLeaf Ventures",
      status: "verified",
      count: "5,680",
      date: "13 Sep 2024",
      time: "11:45 AM",
    },
    {
      id: "PRY-2024-004",
      businessType: "Enterprise",
      businessName: "Quantum Dynamics",
      status: "rejected",
      count: "15,230",
      date: "12 Sep 2024",
      time: "09:20 AM",
    },
    {
      id: "PRY-2024-005",
      businessType: "Startup",
      businessName: "CloudNine Inc",
      status: "verified",
      count: "3,450",
      date: "11 Sep 2024",
      time: "04:30 PM",
    },
    {
      id: "PRY-2024-006",
      businessType: "SME",
      businessName: "BlueWave Corp",
      status: "pending",
      count: "7,890",
      date: "10 Sep 2024",
      time: "01:10 PM",
    },
    {
      id: "PRY-2024-007",
      businessType: "Enterprise",
      businessName: "NexGen Technologies",
      status: "verified",
      count: "18,560",
      date: "09 Sep 2024",
      time: "10:00 AM",
    },
    {
      id: "PRY-2024-008",
      businessType: "Startup",
      businessName: "Innovate Labs",
      status: "verified",
      count: "4,120",
      date: "08 Sep 2024",
      time: "03:45 PM",
    },
    {
      id: "PRY-2024-009",
      businessType: "SME",
      businessName: "Stellar Enterprises",
      status: "pending",
      count: "6,780",
      date: "07 Sep 2024",
      time: "11:20 AM",
    },
    {
      id: "PRY-2024-010",
      businessType: "Enterprise",
      status: "verified",
      count: "21,340",
      date: "06 Sep 2024",
      time: "09:50 AM",
    },
  ];

  const totalPages = Math.ceil(verifications.length / itemsPerPage);
  const paginatedVerifications = verifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSelectAll = () => {
    const allVerificationIds = paginatedVerifications.map((v) => v.id);
    if (selectedRows.length === allVerificationIds.length && selectedRows.every(id => allVerificationIds.includes(id))) {
      setSelectedRows([]);
    } else {
      setSelectedRows(allVerificationIds);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "verified":
        return "approved";
      case "pending":
        return "pending";
      case "rejected":
        return "rejected";
      default:
        return "";
    }
  };

  const getStatusLabel = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="merchant_table">
      <div className="table_header">
        <div className="cell checkbox_cell">
          <ImageCheckbox
            checked={selectedRows.length === paginatedVerifications.length && paginatedVerifications.every(verification => selectedRows.includes(verification.id))}
            onChange={handleSelectAll}
          />
        </div>
        <div className="cell">
          <p>Verification No.</p>
        </div>
        <div className="cell">
          <p>Business Type</p>
        </div>
        <div className="cell">
          <p>Business Name</p>
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
        {paginatedVerifications.map((verification) => (
          <div key={verification.id} className="table_row">
            <div className="cell checkbox_cell">
              <ImageCheckbox
                checked={selectedRows.includes(verification.id)}
                onChange={() => handleSelectRow(verification.id)}
              />
            </div>
            <div className="cell">
              <p>{verification.id}</p>
            </div>
            <div className="cell">
              <p>{verification.businessType}</p>
            </div>
            <div className="cell">
              <p>{verification.businessName}</p>
            </div>
            <div className="cell">
              <p className={`status ${getStatusClass(verification.status)}`}>
                {getStatusLabel(verification.status)}
              </p>
            </div>
            <div className="cell">
              <p>{verification.count}</p>
            </div>
            <div className="cell">
              <p>{verification.date}</p>
            </div>
            <div className="cell">
              <p>{verification.time}</p>
            </div>
            <div className="cell action_cell">
              <button className="action_button">
                <span className="material-symbols-outlined">visibility</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onPageSelect={setCurrentPage}
      />
    </div>
  );
};

export default AdminVerificationsTable;
