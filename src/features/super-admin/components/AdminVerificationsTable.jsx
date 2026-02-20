import React, { useState, useEffect } from "react";
import "../super-admin.css";
import ImageCheckbox from "../../../shared/components/ImageCheckbox";
import Pagination from "../../../shared/components/Pagination";
import VerificationModal from "../../../shared/components/VerificationModal";
import { supabase } from "../../../shared/services/supabase";

const AdminVerificationsTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [verifications, setVerifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchVerifications();
  }, []);

  const fetchVerifications = async () => {
    setLoading(true);
    try {
      const { data: initialData, error: initialError } = await supabase
        .from("verifications")
        .select(
          `
          id,
          verification_type,
          status,
          created_at,
          merchants (
            business_name,
            company_type
          )
        `,
        )
        .order("created_at", { ascending: false });

      let finalData = initialData;

      if (initialError) {
        console.error("Primary Fetch Error (Verifications):", initialError);
        // Fallback to simple select if join fails
        const { data: simpleData, error: simpleError } = await supabase
          .from("verifications")
          .select("*")
          .order("created_at", { ascending: false });

        if (simpleError) throw simpleError;
        finalData = simpleData;
      }

      console.log("Verifications raw data:", finalData);

      const mapped = (finalData || []).map((v) => ({
        id: v.id?.substring(0, 8).toUpperCase() || "N/A",
        type:
          v.verification_type?.toUpperCase() || v.type?.toUpperCase() || "N/A",
        name:
          v.merchants?.business_name ||
          v.metadata?.merchant_name ||
          v.customer_name ||
          "Unknown",
        status:
          (v.status || "pending").charAt(0).toUpperCase() +
          (v.status || "pending").slice(1),
        batch: v.metadata?.batch_no || "SINGLE",
        date: new Date(v.created_at).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        time: new Date(v.created_at).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        businessType:
          v.merchants?.company_type || v.metadata?.business_type || "N/A",
        businessName: v.merchants?.business_name || v.customer_name || "N/A",
        count: "1",
      }));

      console.log("Mapped Verifications:", mapped.length);
      setVerifications(mapped);
    } catch (error) {
      console.error("Error in fetchVerifications:", error);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(verifications.length / itemsPerPage);
  const paginatedVerifications = verifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleSelectAll = () => {
    const allVerificationIds = paginatedVerifications.map((v) => v.id);
    if (
      selectedRows.length === allVerificationIds.length &&
      selectedRows.every((id) => allVerificationIds.includes(id))
    ) {
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

  const handleViewDetails = (item) => {
    setSelectedData(item);
    setIsModalOpen(true);
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
            checked={
              selectedRows.length === paginatedVerifications.length &&
              paginatedVerifications.every((verification) =>
                selectedRows.includes(verification.id),
              )
            }
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
        {loading ? (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            Loading verifications...
          </div>
        ) : paginatedVerifications.length === 0 ? (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            No verifications found.
          </div>
        ) : (
          paginatedVerifications.map((verification) => (
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
                <button
                  className="action_button"
                  onClick={() => handleViewDetails(verification)}
                >
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </div>
          ))
        )}
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

export default AdminVerificationsTable;
