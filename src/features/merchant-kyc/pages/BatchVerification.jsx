import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../../../components/PageHeader/PageHeader";
import VerificationTable from "../../../shared/components/VerificationTable";
import FileDropzone from "../../../shared/components/FileDropzone";
import FilterDropdown from "../../../shared/components/FilterDropdown";
import { supabase } from "../../../shared/services/supabase";
import { useGlobal } from "../../../app/GlobalContext";

const BatchVerification = () => {
  const { merchantId: urlId } = useParams();
  const { showToast } = useGlobal();
  const [verifications, setVerifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [merchantId, setMerchantId] = useState(null);
  const navigate = useNavigate();
  const [viewingAsMerchant] = useState(
    localStorage.getItem("admin_viewing_merchant_id"),
  );

  useEffect(() => {
    fetchVerifications();
  }, [statusFilter, viewingAsMerchant, urlId]);

  const fetchVerifications = async () => {
    setLoading(true);
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const mId = urlId || viewingAsMerchant || sessionData?.session?.user?.id;
      if (!mId) throw new Error("Not logged in");

      setMerchantId(mId);

      let query = supabase
        .from("verifications")
        .select("*")
        .eq("merchant_id", mId)
        .order("created_at", { ascending: false });

      if (statusFilter !== "all") {
        query = query.eq("status", statusFilter);
      }

      const { data, error } = await query;
      if (error) throw error;

      setVerifications(
        data.map((v) => ({
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
      const { data: sessionData } = await supabase.auth.getSession();
      const mId = urlId || viewingAsMerchant || sessionData?.session?.user?.id;
      if (!mId) throw new Error("Not logged in");

      // 1. Create a batch record
      const { data: batch, error: batchError } = await supabase
        .from("batches")
        .insert([
          {
            merchant_id: merchantId,
            name: file.name,
            status: "processing",
            total_records: 5, // Simulated count
          },
        ])
        .select()
        .single();

      if (batchError) throw batchError;

      // 2. Simulate processing delay
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // 3. Create simulated verification records for this batch
      const simulatedRecords = [
        {
          merchant_id: merchantId,
          batch_id: batch.id,
          customer_name: "Alice Johnson",
          customer_email: "alice@example.com",
          status: "approved",
          verification_type: "kyc",
          type: "Passport",
          source: "batch",
        },
        {
          merchant_id: merchantId,
          batch_id: batch.id,
          customer_name: "Bob Smith",
          customer_email: "bob@example.com",
          status: "pending",
          verification_type: "kyc",
          type: "Driver License",
          source: "batch",
        },
        {
          merchant_id: merchantId,
          batch_id: batch.id,
          customer_name: "Charlie Brown",
          customer_email: "charlie@example.com",
          status: "approved",
          verification_type: "kyc",
          type: "National ID",
          source: "batch",
        },
      ];

      const { error: recordsError } = await supabase
        .from("verifications")
        .insert(simulatedRecords);

      if (recordsError) throw recordsError;

      // 4. Update batch status
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
        title="Batch Verification"
        description="Upload and verify multiple customers at once"
        notificationIconRoute={
          merchantId ? `/m/${merchantId}/kyc/notifications` : null
        }
      />
      <div className="content_area">
        <div className="quick_actions">
          <p className="section_title">Quick Actions</p>
          <div className="filter_wrapper">
            <button
              className="secondary_button"
              onClick={() =>
                navigate(`/m/${merchantId}/kyc/single-verification`)
              }
            >
              <span className="material-symbols-outlined">add</span>
              <p>Single Verification</p>
            </button>
            <button className="secondary_button">
              <span className="material-symbols-outlined">add</span>
              <p>API Integration</p>
            </button>
            <button className="primary_button disabled" disabled>
              <span className="material-symbols-outlined">description</span>
              <p>New Batch Verification</p>
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
            <p className="section_title">Recent Verifications</p>
            <div className="search_box">
              <span className="material-symbols-outlined search_icon">
                search
              </span>
              <input
                type="text"
                placeholder="Search by name, email, or ID"
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
            <div className="loading_state">Loading verifications...</div>
          ) : (
            <VerificationTable data={filteredVerifications} />
          )}
        </div>
      </div>
    </>
  );
};

export default BatchVerification;
