import React, { useState, useEffect } from "react";
import "../super-admin.css";
import ImageCheckbox from "../../../shared/components/ImageCheckbox";
import Pagination from "../../../shared/components/Pagination";
import { supabase } from "../../../shared/services/supabase";

const AdminAuditTable = ({
  filterAction = "all",
  filterStatus = "all",
  searchTerm = "",
}) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [auditLogs, setAuditLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchAuditLogs();
  }, [filterAction, filterStatus, searchTerm]);

  const fetchAuditLogs = async () => {
    setLoading(true);
    try {
      let query = supabase.from("audit_logs").select("*");

      if (filterAction !== "all") {
        query = query.eq("action_type", filterAction);
      }

      if (filterStatus !== "all") {
        query = query.eq("status", filterStatus);
      }

      if (searchTerm) {
        query = query.or(
          `user_email.ilike.%${searchTerm}%,action_type.ilike.%${searchTerm}%,resource_id.ilike.%${searchTerm}%,ip_address.ilike.%${searchTerm}%`,
        );
      }

      const { data, error } = await query.order("created_at", {
        ascending: false,
      });

      if (error) {
        // If audit_logs table doesn't exist yet, show a helpful message
        if (error.code === "PGRST116" || error.message.includes("not found")) {
          setAuditLogs([]);
        } else {
          throw error;
        }
      } else {
        const mapped = (data || []).map((log) => ({
          id: log.id.substring(0, 8).toUpperCase(),
          timestamp: new Date(log.created_at).toLocaleString(),
          user: log.user_email || "System",
          action: log.action_type || "N/A",
          resource: log.resource_id || "N/A",
          ipAddress: log.ip_address || "hidden",
          status: log.status || "success",
          details: log.details || "-",
        }));
        setAuditLogs(mapped);
      }
    } catch (error) {
      console.error("Error fetching audit logs:", error);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(auditLogs.length / itemsPerPage);
  const paginatedAuditLogs = auditLogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleSelectAll = () => {
    const allLogIds = paginatedAuditLogs.map((log) => log.id);
    if (
      selectedRows.length === allLogIds.length &&
      selectedRows.every((id) => allLogIds.includes(id))
    ) {
      setSelectedRows([]);
    } else {
      setSelectedRows(allLogIds);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  const getStatusClass = (status) => {
    return status === "success" ? "approved" : "rejected";
  };

  const getStatusLabel = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const handleViewDetails = (log) => {
    console.log("Viewing details for:", log);
    // Implement modal or navigation to full details page here
  };

  return (
    <div className="merchant_table audit_table">
      <div className="table_header">
        <div className="cell checkbox_cell">
          <ImageCheckbox
            checked={
              selectedRows.length === paginatedAuditLogs.length &&
              paginatedAuditLogs.every((log) => selectedRows.includes(log.id))
            }
            onChange={handleSelectAll}
          />
        </div>
        <div className="cell">
          <p>Timestamp</p>
        </div>
        <div className="cell">
          <p>User/Admin</p>
        </div>
        <div className="cell">
          <p>Action Type</p>
        </div>
        <div className="cell">
          <p>Resource</p>
        </div>
        <div className="cell">
          <p>IP Address</p>
        </div>
        <div className="cell">
          <p>Status</p>
        </div>
        <div className="cell">
          <p>Details</p>
        </div>
        <div className="cell action_cell">
          <p>Actions</p>
        </div>
      </div>

      <div className="table_body">
        {loading ? (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            Loading logs...
          </div>
        ) : paginatedAuditLogs.length === 0 ? (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            No activity logs found.
          </div>
        ) : (
          paginatedAuditLogs.map((log) => (
            <div key={log.id} className="table_row">
              <div className="cell checkbox_cell">
                <ImageCheckbox
                  checked={selectedRows.includes(log.id)}
                  onChange={() => handleSelectRow(log.id)}
                />
              </div>
              <div className="cell">
                <p>{log.timestamp}</p>
              </div>
              <div className="cell">
                <p>{log.user}</p>
              </div>
              <div className="cell">
                <p>{log.action}</p>
              </div>
              <div className="cell">
                <p>{log.resource}</p>
              </div>
              <div className="cell">
                <p>{log.ipAddress}</p>
              </div>
              <div className="cell">
                <p className={`status ${getStatusClass(log.status)}`}>
                  {getStatusLabel(log.status)}
                </p>
              </div>
              <div className="cell">
                <p className="audit_details truncate_text">{log.details}</p>
              </div>
              <div className="cell action_cell">
                <button
                  className="action_button"
                  onClick={() => handleViewDetails(log)}
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
    </div>
  );
};

export default AdminAuditTable;
