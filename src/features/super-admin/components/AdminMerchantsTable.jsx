import React, { useState } from "react";
import "../super-admin.css";
import ImageCheckbox from "../../../shared/components/ImageCheckbox";
import Pagination from "../../../shared/components/Pagination";

const AdminMerchantsTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const merchants = [
    {
      id: "MER-2024-001",
      businessName: "Ironclad Systems",
      businessType: "Enterprise",
      status: "active",
      verifications: "12,450",
      revenue: "₦2,450,000",
      joinDate: "15 Jan 2024",
    },
    {
      id: "MER-2024-002",
      businessName: "TechFlow Solutions",
      businessType: "Startup",
      status: "active",
      verifications: "8,320",
      revenue: "₦1,680,000",
      joinDate: "20 Jan 2024",
    },
    {
      id: "MER-2024-003",
      businessName: "GreenLeaf Ventures",
      businessType: "SME",
      status: "inactive",
      verifications: "5,680",
      revenue: "₦1,120,000",
      joinDate: "05 Feb 2024",
    },
    {
      id: "MER-2024-004",
      businessName: "Quantum Dynamics",
      businessType: "Enterprise",
      status: "active",
      verifications: "15,230",
      revenue: "₦3,050,000",
      joinDate: "12 Feb 2024",
    },
    {
      id: "MER-2024-005",
      businessName: "CloudNine Inc",
      businessType: "Startup",
      status: "suspended",
      verifications: "3,450",
      revenue: "₦690,000",
      joinDate: "18 Feb 2024",
    },
    {
      id: "MER-2024-006",
      businessName: "BlueWave Corp",
      businessType: "SME",
      status: "active",
      verifications: "7,890",
      revenue: "₦1,580,000",
      joinDate: "25 Feb 2024",
    },
    {
      id: "MER-2024-007",
      businessName: "NexGen Technologies",
      businessType: "Enterprise",
      status: "active",
      verifications: "18,560",
      revenue: "₦3,710,000",
      joinDate: "03 Mar 2024",
    },
    {
      id: "MER-2024-008",
      businessName: "Innovate Labs",
      businessType: "Startup",
      status: "active",
      verifications: "4,120",
      revenue: "₦824,000",
      joinDate: "10 Mar 2024",
    },
    {
      id: "MER-2024-009",
      businessName: "Stellar Enterprises",
      businessType: "SME",
      status: "active",
      verifications: "6,780",
      revenue: "₦1,356,000",
      joinDate: "17 Mar 2024",
    },
    {
      id: "MER-2024-010",
      businessName: "Apex Holdings",
      businessType: "Enterprise",
      status: "active",
      verifications: "21,340",
      revenue: "₦4,268,000",
      joinDate: "24 Mar 2024",
    },
  ];

  const totalPages = Math.ceil(merchants.length / itemsPerPage);
  const paginatedMerchants = merchants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSelectAll = () => {
    const allMerchantIds = paginatedMerchants.map((m) => m.id);
    if (selectedRows.length === allMerchantIds.length && selectedRows.every(id => allMerchantIds.includes(id))) {
      setSelectedRows([]);
    } else {
      setSelectedRows(allMerchantIds);
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
      case "suspended":
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
            checked={selectedRows.length === paginatedMerchants.length && paginatedMerchants.every(merchant => selectedRows.includes(merchant.id))}
            onChange={handleSelectAll}
          />
        </div>
        <div className="cell">
          <p>Merchant ID</p>
        </div>
        <div className="cell">
          <p>Business Name</p>
        </div>
        <div className="cell">
          <p>Business Type</p>
        </div>
        <div className="cell">
          <p>Status</p>
        </div>
        <div className="cell">
          <p>Verifications</p>
        </div>
        <div className="cell">
          <p>Revenue</p>
        </div>
        <div className="cell">
          <p>Join Date</p>
        </div>
        <div className="cell action_cell">
          <p>Action</p>
        </div>
      </div>

      <div className="table_body">
        {paginatedMerchants.map((merchant) => (
          <div key={merchant.id} className="table_row">
            <div className="cell checkbox_cell">
              <ImageCheckbox
                checked={selectedRows.includes(merchant.id)}
                onChange={() => handleSelectRow(merchant.id)}
              />
            </div>
            <div className="cell">
              <p>{merchant.id}</p>
            </div>
            <div className="cell">
              <p>{merchant.businessName}</p>
            </div>
            <div className="cell">
              <p>{merchant.businessType}</p>
            </div>
            <div className="cell">
              <p className={`status ${getStatusClass(merchant.status)}`}>
                {getStatusLabel(merchant.status)}
              </p>
            </div>
            <div className="cell">
              <p>{merchant.verifications}</p>
            </div>
            <div className="cell">
              <p>{merchant.revenue}</p>
            </div>
            <div className="cell">
              <p>{merchant.joinDate}</p>
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

export default AdminMerchantsTable;
