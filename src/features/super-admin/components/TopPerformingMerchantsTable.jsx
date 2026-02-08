import React, { useState } from "react";
import ImageCheckbox from "../../../shared/components/ImageCheckbox";
import Pagination from "../../../shared/components/Pagination";
import "../super-admin.css"; // For general table styling

const TopPerformingMerchantsTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Display fewer items for top merchants

  const topMerchants = [
    {
      id: "MER-001",
      name: "Apex Holdings",
      businessType: "Enterprise",
      verifications: "21,340",
      revenue: "₦4,268,000",
      growth: "+15.2%",
    },
    {
      id: "MER-002",
      name: "NexGen Technologies",
      businessType: "Enterprise",
      verifications: "18,560",
      revenue: "₦3,710,000",
      growth: "+12.8%",
    },
    {
      id: "MER-003",
      name: "Quantum Dynamics",
      businessType: "Enterprise",
      verifications: "15,230",
      revenue: "₦3,050,000",
      growth: "+10.5%",
    },
    {
      id: "MER-004",
      name: "Ironclad Systems",
      businessType: "Startup",
      verifications: "12,450",
      revenue: "₦2,450,000",
      growth: "+8.3%",
    },
    {
      id: "MER-005",
      name: "TechFlow Solutions",
      businessType: "Startup",
      verifications: "8,320",
      revenue: "₦1,680,000",
      growth: "+6.7%",
    },
    {
      id: "MER-006",
      name: "Global Innovations",
      businessType: "SME",
      verifications: "7,500",
      revenue: "₦1,500,000",
      growth: "+5.0%",
    },
    {
      id: "MER-007",
      name: "Future Solutions",
      businessType: "SME",
      verifications: "6,200",
      revenue: "₦1,240,000",
      growth: "+4.1%",
    },
  ];

  const totalPages = Math.ceil(topMerchants.length / itemsPerPage);
  const paginatedMerchants = topMerchants.slice(
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

  return (
    <div className="chart_container"> {/* Reusing chart_container for consistent styling */}
      <div className="chart_header"> {/* Reusing chart_header for consistent styling */}
        <p>Top Performing Merchants</p>
        <button className="secondary_button">
          <span className="material-symbols-outlined">download</span>
          Export as CSV
        </button>
      </div>

      <div className="merchant_table"> {/* Reusing merchant_table styling */}
        <div className="table_header">
          <div className="cell checkbox_cell">
            <ImageCheckbox
              checked={selectedRows.length === paginatedMerchants.length && paginatedMerchants.every(merchant => selectedRows.includes(merchant.id))}
              onChange={handleSelectAll}
            />
          </div>
          <div className="cell">
            <p>Merchant Name</p>
          </div>
          <div className="cell">
            <p>Business Type</p>
          </div>
          <div className="cell">
            <p>Verifications</p>
          </div>
          <div className="cell">
            <p>Revenue</p>
          </div>
          <div className="cell">
            <p>Growth</p>
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
                <p>{merchant.name}</p>
              </div>
              <div className="cell">
                <p>{merchant.businessType}</p>
              </div>
              <div className="cell">
                <p>{merchant.verifications}</p>
              </div>
              <div className="cell">
                <p>{merchant.revenue}</p>
              </div>
              <div className="cell">
                <p className="growth_badge">{merchant.growth}</p>
              </div>
            </div>
          ))}
        </div>
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

export default TopPerformingMerchantsTable;
