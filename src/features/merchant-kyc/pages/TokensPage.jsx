import React, { useState, useEffect } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import VerificationTable from "../../../shared/components/VerificationTable";
import { supabase } from "../../../shared/services/supabase";

// Icons
import FileTextIcon from "../../../assets/images/file-text-line.svg";
import FileCheckIcon from "../../../assets/images/file-check-fill.svg";
import TimeLineIcon from "../../../assets/images/time-line.svg";
import ErrorWarningIcon from "../../../assets/images/error-warning-line.svg";

const TokensPage = () => {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    pending: 0,
    revoked: 0,
  });

  const [viewingAsMerchant] = useState(
    localStorage.getItem("admin_viewing_merchant_id"),
  );

  useEffect(() => {
    fetchTokens();
  }, []);

  const fetchTokens = async () => {
    setLoading(true);
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) return;

      const merchantId = viewingAsMerchant || userData.user.id;

      const { data, error } = await supabase
        .from("api_tokens")
        .select("*")
        .eq("merchant_id", merchantId)
        .order("created_at", { ascending: false });

      if (error) throw error;

      const mappedTokens = data.map((t) => ({
        id: t.token.substring(0, 12) + "...",
        type: "API Key",
        name: t.name,
        status: t.is_active ? "Approved" : "Rejected",
        batch: "#SYSTEM",
        date: new Date(t.created_at).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        time: new Date(t.created_at).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      }));

      setTokens(mappedTokens);
      setStats({
        total: mappedTokens.length,
        active: mappedTokens.filter((t) => t.status === "Approved").length,
        pending: 0,
        revoked: mappedTokens.filter((t) => t.status === "Rejected").length,
      });
    } catch (error) {
      console.error("Error fetching tokens:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content_wrapper">
      <PageHeader
        title="Token Management"
        description="Manage your usage tokens and billing"
        notificationIconRoute="/merchant-kyc/notifications"
      />

      <div className="content_area">
        <div className="recent_verifications">
          <div className="top_area">
            <p className="section_title">API Tokens</p>

            <div className="search_box">
              <span className="material-symbols-outlined search_icon">
                search
              </span>
              <input
                type="text"
                placeholder="Search by name"
                className="search_input"
              />
            </div>

            <div className="filter_wrapper">
              <button className="secondary_button" onClick={fetchTokens}>
                <span className="material-symbols-outlined">refresh</span>
                <p>Refresh</p>
              </button>
            </div>
          </div>

          <div className="overview_wrapper">
            {/* Card 1: Total Tokens Issued */}
            <div className="overview_card">
              <div className="card_top_area">
                <div className="overview_card_icon">
                  <img src={FileTextIcon} alt="Total Tokens Issued" />
                </div>
              </div>
              <div className="card_content">
                <p className="card_value">{stats.total}</p>
                <p className="card_title">Total Tokens Issued</p>
              </div>
            </div>

            {/* Card 2: Active Tokens */}
            <div className="overview_card">
              <div className="card_top_area">
                <div className="overview_card_icon">
                  <img src={FileCheckIcon} alt="Active Tokens" />
                </div>
              </div>
              <div className="card_content">
                <p className="card_value">{stats.active}</p>
                <p className="card_title">Active Tokens</p>
              </div>
            </div>

            {/* Card 3: Pending Tokens */}
            <div className="overview_card">
              <div className="card_top_area">
                <div className="overview_card_icon">
                  <img src={TimeLineIcon} alt="Pending Tokens" />
                </div>
              </div>
              <div className="card_content">
                <p className="card_value">{stats.pending}</p>
                <p className="card_title">Pending Tokens</p>
              </div>
            </div>

            {/* Card 4: Revoked Tokens */}
            <div className="overview_card">
              <div className="card_top_area">
                <div className="overview_card_icon">
                  <img src={ErrorWarningIcon} alt="Revoked Tokens" />
                </div>
              </div>
              <div className="card_content">
                <p className="card_value">{stats.revoked}</p>
                <p className="card_title">Revoked Tokens</p>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="no_data_message">Loading tokens...</div>
          ) : tokens.length > 0 ? (
            <VerificationTable data={tokens} idLabel="Token No." />
          ) : (
            <div className="no_data_message">No API tokens found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TokensPage;
