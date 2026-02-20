import React, { useState, useEffect } from "react";
import { supabase } from "../../../shared/services/supabase";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../../app/GlobalContext";
import ImageCheckbox from "../../../shared/components/ImageCheckbox";
import Pagination from "../../../shared/components/Pagination";

const AdminMerchantsTable = ({ filter = "all" }) => {
  const navigate = useNavigate();
  const { showToast } = useGlobal();
  const [merchants, setMerchants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchMerchants();
  }, [filter]);

  const fetchMerchants = async () => {
    setLoading(true);
    try {
      let query = supabase.from("merchants").select("*");

      if (filter !== "all") {
        if (filter === "active") {
          query = query.or(
            "onboarding_step.eq.completed,verification_status.eq.active",
          );
        } else {
          query = query
            .not("onboarding_step", "eq", "completed")
            .not("verification_status", "eq", "active");
        }
      }

      const { data: merchantsData, error: mError } = await query;

      if (mError) throw mError;

      // Map to table structure, checking for different possible name columns
      const mapped = (merchantsData || []).map((m) => ({
        id: m.id,
        businessName:
          m.business_name ||
          m.business_details?.[0]?.business_name ||
          m.email ||
          "Unnamed Merchant",
        businessType: m.company_type || m.account_type || "N/A",
        status:
          m.onboarding_step === "completed" ||
          m.verification_status === "active"
            ? "active"
            : "pending",
        serviceType: m.service_type || "combined",
        verifications: "0",
        revenue: "₦0",
        joinDate: new Date(m.created_at).toLocaleDateString(),
      }));

      setMerchants(mapped);
    } catch (error) {
      console.error("Fetch Error:", error);
      // If fetching with join failed, try even simpler
      try {
        const { data: simpleData } = await supabase
          .from("merchants")
          .select("id, created_at");
        if (simpleData) {
          setMerchants(
            simpleData.map((m) => ({
              id: m.id,
              businessName: "Merchant " + m.id.substring(0, 5),
              status: "active",
              joinDate: new Date(m.created_at).toLocaleDateString(),
            })),
          );
        }
      } catch (innerErr) {
        showToast("Database table 'merchants' not found or empty.", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  const addDemoMerchant = async () => {
    try {
      const demoEmail = `demo_${Math.floor(Math.random() * 1000)}@example.com`;
      // Try an insert with both business_name and email to satisfy most common constraints
      const { error } = await supabase.from("merchants").insert([
        {
          business_name: "Demo Store " + Math.floor(Math.random() * 100),
          email: demoEmail,
        },
      ]);

      if (error) {
        // Fallback: try just email if business_name is the problem
        const { error: retryError } = await supabase
          .from("merchants")
          .insert([{ email: demoEmail }]);
        if (retryError) throw retryError;
      }

      showToast("✅ Demo Merchant Added!", "success");
      fetchMerchants(); // Refresh list
    } catch (error) {
      console.error("Full Error Info:", error);
      showToast(
        `Error: ${error.message || "Please run the SQL Repair script I sent."}`,
        "error",
      );
    }
  };

  const handleViewDashboard = (merchant) => {
    // Store viewing merchant ID for the dashboard to pick up
    localStorage.setItem("admin_viewing_merchant_id", merchant.id);

    const serviceMap = {
      kyc: "/merchant-kyc",
      kyb: "/merchant-kyb",
      combined: "/merchant-combined",
    };

    navigate(serviceMap[merchant.serviceType] || "/merchant-combined");
  };

  const totalPages = Math.ceil(merchants.length / itemsPerPage);
  const paginatedMerchants = merchants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleSelectAll = () => {
    const allMerchantIds = paginatedMerchants.map((m) => m.id);
    if (
      selectedRows.length === allMerchantIds.length &&
      selectedRows.every((id) => allMerchantIds.includes(id))
    ) {
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

  if (loading && merchants.length === 0) {
    return <div className="loading_state">Loading merchants...</div>;
  }

  return (
    <div className="merchant_table_container">
      {merchants.length === 0 && !loading && (
        <div
          className="empty_state"
          style={{
            padding: "2rem",
            textAlign: "center",
            background: "var(--bg-weak-50)",
            borderRadius: "12px",
            marginBottom: "1.5rem",
          }}
        >
          <p style={{ color: "var(--text-soft-400)", marginBottom: "1rem" }}>
            No merchants found in your database.
          </p>
          <button className="primary_button" onClick={addDemoMerchant}>
            <span className="material-symbols-outlined">add</span>
            Add Demo Merchant
          </button>
        </div>
      )}

      <div className="merchant_table">
        <div className="table_header">
          <div className="cell checkbox_cell">
            <ImageCheckbox
              checked={
                selectedRows.length === paginatedMerchants.length &&
                paginatedMerchants.every((merchant) =>
                  selectedRows.includes(merchant.id),
                )
              }
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
                <p title={merchant.id}>{merchant.id.substring(0, 8)}...</p>
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
                <button
                  className="action_button"
                  onClick={() => handleViewDashboard(merchant)}
                  title="View Merchant Dashboard"
                >
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
    </div>
  );
};

export default AdminMerchantsTable;
