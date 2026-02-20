import React, { useState, useEffect } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import VerificationTable from "../../../shared/components/VerificationTable";
import FileDropzone from "../../../shared/components/FileDropzone";
import FilterDropdown from "../../../shared/components/FilterDropdown";
import { supabase } from "../../../shared/services/supabase";
import { useGlobal } from "../../../app/GlobalContext";

const BatchBusiness = () => {
  const { showToast } = useGlobal();
  const [verifications, setVerifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [viewingAsMerchant] = useState(
    localStorage.getItem("admin_viewing_merchant_id"),
  );
  useEffect(() => {
    fetchVerifications();
  }, [statusFilter]);

  const fetchVerifications = async () => {
    setLoading(true);
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) throw new Error("Not logged in");

      const merchantId = viewingAsMerchant || userData.user.id;

      let query = supabase
        .from("verifications")
        .select("*")
        .eq("merchant_id", merchantId)
        .eq("verification_type", "kyb")
        .order("created_at", { ascending: false });

      if (statusFilter !== "all") {
        query = query.eq("status", statusFilter);
      }

      const { data, error } = await query;
      if (error) throw error;

      setVerifications(
        (data || []).map((v) => ({
          id: v.id.split("-")[0].toUpperCase(),
          type: v.type,
          name: v.customer_name,
          status: v.status.charAt(0).toUpperCase() + v.status.slice(1),
          batch: v.batch_id
            ? `#BATCH-${v.batch_id.split("-")[0].toUpperCase()}`
            : "Single",
          date: new Date(v.created_at).toLocaleDateString(),
          time: new Date(v.created_at).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        })),
      );
    } catch (error) {
      showToast(error.message || "Failed to fetch verifications.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = async (file) => {
    if (!file) return;
    setUploading(true);
    showToast(`Uploading ${file.name}...`, "info");

    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) throw new Error("Not logged in");

      const merchantId = viewingAsMerchant || userData.user.id;

      const { data: batch, error: batchError } = await supabase
        .from("batches")
        .insert([
          {
            merchant_id: merchantId,
            name: file.name,
            status: "processing",
            total_records: 3,
          },
        ])
        .select()
        .single();

      if (batchError) throw batchError;

      await new Promise((resolve) => setTimeout(resolve, 3000));

      const simulatedRecords = [
        {
          merchant_id: merchantId,
          batch_id: batch.id,
          customer_name: "Tech Global Corp",
          customer_email: "hr@techglobal.com",
          status: "approved",
          verification_type: "kyb",
          type: "Business License",
          source: "batch",
        },
        {
          merchant_id: merchantId,
          batch_id: batch.id,
          customer_name: "Nexus Solutions",
          customer_email: "contact@nexus.com",
          status: "pending",
          verification_type: "kyb",
          type: "Tax ID",
          source: "batch",
        },
        {
          merchant_id: merchantId,
          batch_id: batch.id,
          customer_name: "Aurora Inc",
          customer_email: "admin@aurora.com",
          status: "approved",
          verification_type: "kyb",
          type: "Articles of Association",
          source: "batch",
        },
      ];

      const { error: recordsError } = await supabase
        .from("verifications")
        .insert(simulatedRecords);
      if (recordsError) throw recordsError;

      await supabase
        .from("batches")
        .update({ status: "completed" })
        .eq("id", batch.id);

      showToast("Batch processed successfully!", "success");
      fetchVerifications();
    } catch (error) {
      showToast(error.message || "Failed to process batch.", "error");
    } finally {
      setUploading(false);
    }
  };

  const filteredVerifications = verifications.filter(
    (v) =>
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.id.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <PageHeader
        title="Batch Business Verification"
        description="Upload and verify multiple businesses at once"
        notificationIconRoute="/merchant-combined/notifications"
      />
      <div className="content_area">
        <div className="quick_actions">
          <p className="section_title">Quick Actions</p>
          <div className="filter_wrapper">
            <button className="secondary_button">
              <span className="material-symbols-outlined">add</span>
              <p>Single Business</p>
            </button>
            <button className="primary_button">
              <span className="material-symbols-outlined">description</span>
              <p>New Batch Business</p>
            </button>
          </div>
        </div>

        <div className="supporting_documents_section">
          <FileDropzone onFileSelect={handleFileSelect} disabled={uploading} />
          {uploading && (
            <div className="upload_status">
              Processing batch... Please wait.
            </div>
          )}
        </div>

        <div className="recent_verifications">
          <div className="top_area">
            <p className="section_title">Recent Records</p>
            <div className="search_box">
              <span className="material-symbols-outlined search_icon">
                search
              </span>
              <input
                type="text"
                placeholder="Search businesses..."
                className="search_input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
                onFilterChange={setStatusFilter}
              />

              <button className="secondary_button">
                <span className="material-symbols-outlined">download</span>
                <p>Download as CSV</p>
              </button>
            </div>
          </div>
          {loading ? (
            <div className="loading_state">Loading records...</div>
          ) : (
            <VerificationTable data={filteredVerifications} />
          )}
        </div>
      </div>
    </>
  );
};

export default BatchBusiness;
