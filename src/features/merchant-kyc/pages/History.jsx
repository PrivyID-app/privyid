import React, { useState, useEffect } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import VerificationTable from "../../../shared/components/VerificationTable";
import FilterDropdown from "../../../shared/components/FilterDropdown";
import { supabase } from "../../../shared/services/supabase";
import { formatVerificationData } from "../../../shared/utils/dashboardUtils";

const History = () => {
  const [verifications, setVerifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchHistory();
  }, [filter]);

  const fetchHistory = async () => {
    setLoading(true);
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) return;

      let query = supabase
        .from("verifications")
        .select("*")
        .eq("merchant_id", userData.user.id)
        .order("created_at", { ascending: false });

      if (filter !== "all") {
        query = query.eq("status", filter);
      }

      const { data, error } = await query;
      if (error) throw error;

      setVerifications(formatVerificationData(data || []));
    } catch (error) {
      console.error("Error fetching history:", error);
    } finally {
      setLoading(false);
    }
  };

  const downloadData = (format) => {
    if (verifications.length === 0) return;

    let content = "";
    const fileName = `verifications_history_${new Date().toISOString().split("T")[0]}`;

    if (format === "csv") {
      const headers = Object.keys(verifications[0]).join(",");
      const rows = verifications.map((v) => Object.values(v).join(","));
      content = [headers, ...rows].join("\n");
    } else {
      content = JSON.stringify(verifications, null, 2);
    }

    const blob = new Blob([content], {
      type: format === "csv" ? "text/csv" : "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${fileName}.${format}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const filteredData = verifications.filter(
    (v) =>
      v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <PageHeader
        title="Verification History"
        description="View and manage past verification requests"
        notificationIconRoute="/merchant-kyc/notifications"
      />

      <div className="content_area">
        <div className="recent_verifications">
          <div className="top_area">
            <p className="section_title">Recent Verifications</p>

            <div className="search_box">
              <span className="material-symbols-outlined search_icon">
                search
              </span>
              <input
                type="text"
                placeholder="Search by name, email, or ID"
                className="search_input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="filter_wrapper">
              <FilterDropdown
                options={[
                  { label: "All Status", value: "all" },
                  { label: "Approved", value: "approved" },
                  { label: "Pending", value: "pending" },
                  { label: "Rejected", value: "rejected" },
                ]}
                onFilterChange={(val) => setFilter(val)}
              />

              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  className="secondary_button"
                  onClick={() => downloadData("csv")}
                >
                  <span className="material-symbols-outlined">download</span>
                  <p>CSV</p>
                </button>
                <button
                  className="secondary_button"
                  onClick={() => downloadData("json")}
                >
                  <span className="material-symbols-outlined">download</span>
                  <p>JSON</p>
                </button>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="no_data_message">Loading history...</div>
          ) : filteredData.length > 0 ? (
            <VerificationTable data={filteredData} />
          ) : (
            <div className="no_data_message">
              No verification records found.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default History;
