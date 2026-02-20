import React, { useState, useEffect } from "react";
import { supabase } from "../../../shared/services/supabase";
import PageHeader from "../../../components/PageHeader/PageHeader";
import VerificationTable from "../../../shared/components/VerificationTable";
import FilterDropdown from "../../../shared/components/FilterDropdown";

const History = () => {
  const [verifications, setVerifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [merchantId, setMerchantId] = useState(null);
  const [viewingAsMerchant] = useState(
    localStorage.getItem("admin_viewing_merchant_id"),
  );

  useEffect(() => {
    const getMerchantId = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (userData?.user) {
        setMerchantId(viewingAsMerchant || userData.user.id);
      }
    };
    getMerchantId();
    fetchHistory();
  }, [filter, viewingAsMerchant]);

  const fetchHistory = async () => {
    setLoading(true);
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) return;

      const mId = viewingAsMerchant || userData.user.id;

      let query = supabase
        .from("verifications")
        .select("*")
        .eq("merchant_id", mId)
        .order("created_at", { ascending: false });

      if (filter !== "all") {
        query = query.eq("status", filter);
      }

      const { data, error } = await query;
      if (error) throw error;

      const { formatVerificationData } =
        await import("../../../shared/utils/dashboardUtils");
      setVerifications(formatVerificationData(data || []));
    } catch (error) {
      console.error("Error fetching history:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase
        .from("verifications")
        .delete()
        .eq("id", id);

      if (error) throw error;
      fetchHistory();
    } catch (error) {
      console.error("Error deleting verification:", error);
      alert("Failed to delete record. Please try again.");
    }
  };

  const filteredData = verifications.filter(
    (v) =>
      v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.displayId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <PageHeader
        title="Combined Verification History"
        description="View and manage all past verification requests"
        notificationIconRoute={
          merchantId ? `/m/${merchantId}/combined/notifications` : null
        }
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

              <button className="secondary_button">
                <span className="material-symbols-outlined">download</span>
                <p>Download as CSV</p>
              </button>
            </div>
          </div>

          {loading ? (
            <div className="no_data_message">Loading history...</div>
          ) : filteredData.length > 0 ? (
            <VerificationTable data={filteredData} onDelete={handleDelete} />
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
