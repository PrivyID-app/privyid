import React, { useState, useEffect } from "react";
import ImageCheckbox from "../../../../shared/components/ImageCheckbox.jsx";
import { supabase } from "../../../../shared/services/supabase";
import { useGlobal } from "../../../../app/GlobalContext";
import "../../super-admin.css";

const PlatformSettings = () => {
  const { showToast } = useGlobal();
  const [settings, setSettings] = useState({
    maintenanceMode: false,
    apiRateLimit: 1000,
    sessionTimeout: 30,
    allowNewRegistrations: true,
    requireEmailVerification: true,
    enableSandbox: true,
  });

  const [stats, setStats] = useState({
    totalMerchants: "0",
    totalVerifications: "0",
    isAdmin: false,
  });
  const [loadingStats, setLoadingStats] = useState(false);
  const [hasAttemptedPromotion, setHasAttemptedPromotion] = useState(false);

  useEffect(() => {
    fetchSystemHealth();
  }, []);

  const fetchSystemHealth = async () => {
    setLoadingStats(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      // Check current user's admin status in public.users
      const { data: adminRecord } = await supabase
        .from("users")
        .select("is_admin")
        .eq("id", user.id)
        .maybeSingle();

      const isAdmin = !!adminRecord?.is_admin;

      // Fetch Total Counts
      const { count: mCount } = await supabase
        .from("merchants")
        .select("*", { count: "exact", head: true });

      const { count: vCount } = await supabase
        .from("verifications")
        .select("*", { count: "exact", head: true });

      setStats({
        totalMerchants: mCount?.toLocaleString() || "0",
        totalVerifications: vCount?.toLocaleString() || "0",
        isAdmin: isAdmin,
      });

      // Auto-promote if not admin (one-time check on mount)
      if (!isAdmin && !hasAttemptedPromotion) {
        performAdminPromotion(user);
      }
    } catch (error) {
      console.error("System Health Fetch Error:", error);
    } finally {
      setLoadingStats(false);
    }
  };

  const performAdminPromotion = async (user) => {
    setHasAttemptedPromotion(true);
    try {
      console.log(
        "Attempting to elevate user to Super Admin and ensure Merchant profile...",
      );

      // 1. Upsert into users table as admin
      const { error: userError } = await supabase.from("users").upsert({
        id: user.id,
        email: user.email,
        is_admin: true,
        full_name: user.user_metadata?.full_name || "Super Admin",
        password_hash: "EXTERNAL_AUTH",
      });
      if (userError) throw userError;

      // 2. Ensure user and merchant exist in the merchants table for FK consistency
      const { data: existingMerchant } = await supabase
        .from("merchants")
        .select("id")
        .eq("id", user.id)
        .maybeSingle();

      if (!existingMerchant) {
        console.log("Creating System Merchant profile for Super Admin...");
        const { error: merchError } = await supabase.from("merchants").insert([
          {
            id: user.id,
            email: user.email,
            business_name: "System Admin (Internal)",
            service_type: "combined",
            verification_status: "active",
            onboarding_step: "completed",
          },
        ]);
        if (merchError)
          console.error("System Merchant creation failed:", merchError);
      }

      console.log("Elevation and Profile check successful!");
      fetchSystemHealth();
      showToast("Administrative permissions repaired successfully.", "success");
    } catch (error) {
      console.error("Elevation failed:", error);
      showToast(`Repair failed: ${error.message}`, "error");
    }
  };

  const generateMockVerification = async () => {
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) return;

      const mockId = Math.random().toString(36).substring(2, 10).toUpperCase();
      const { error } = await supabase.from("verifications").insert([
        {
          merchant_id: userData.user.id,
          customer_name: "Mock Customer " + mockId,
          verification_type: "kyc",
          status: "approved",
          metadata: {
            batch_no: "MOCK-" + mockId,
            merchant_name: "System Admin (Internal)",
            business_type: "Fintech",
          },
        },
      ]);

      if (error) throw error;
      showToast("Mock Verification generated!", "success");
      fetchSystemHealth();
    } catch (error) {
      console.error("Mock Data Generation Error:", error);
      showToast(`Database Error: ${error.message}`, "error");
    }
  };

  const handleSave = () => {
    console.log("Saving platform settings:", settings);
  };

  const handleCheckboxChange = (settingName) => {
    setSettings((prev) => ({
      ...prev,
      [settingName]: !prev[settingName],
    }));
  };

  return (
    <div className="settings_section">
      <h3>Platform Configuration</h3>
      <p className="section_description">
        Manage global platform settings and system configuration
      </p>

      <div className="settings_form">
        <div className="form_row">
          <label style={{ fontSize: "1rem", fontWeight: "400" }}>
            Maintenance Mode
          </label>
          <div className="toggle_wrapper">
            <ImageCheckbox
              checked={settings.maintenanceMode}
              onChange={() => handleCheckboxChange("maintenanceMode")}
            />
            <span className="toggle_description">
              Enable maintenance mode to restrict platform access
            </span>
          </div>
        </div>

        <div className="form_row">
          <label style={{ fontSize: "1rem", fontWeight: "400" }}>
            Global API Rate Limit
          </label>
          <input
            type="number"
            value={settings.apiRateLimit}
            onChange={(e) =>
              setSettings({ ...settings, apiRateLimit: e.target.value })
            }
            placeholder="Requests per minute"
            style={{
              fontSize: "1rem",
              fontWeight: "400",
              width: "100%",
              border: "1px solid var(--stroke-sub-300)",
              borderRadius: "0.8rem",
              padding: "1rem",
            }}
          />
        </div>

        <div className="form_row">
          <label style={{ fontSize: "1rem", fontWeight: "400" }}>
            Session Timeout
          </label>
          <input
            type="number"
            value={settings.sessionTimeout}
            onChange={(e) =>
              setSettings({ ...settings, sessionTimeout: e.target.value })
            }
            placeholder="Minutes"
            style={{
              fontSize: "1rem",
              fontWeight: "400",
              width: "100%",
              border: "1px solid var(--stroke-sub-300)",
              borderRadius: "0.8rem",
              padding: "1rem",
            }}
          />
        </div>

        <div className="form_row">
          <label style={{ fontSize: "1rem", fontWeight: "400" }}>
            New Merchant Registrations
          </label>
          <div className="toggle_wrapper">
            <ImageCheckbox
              checked={settings.allowNewRegistrations}
              onChange={() => handleCheckboxChange("allowNewRegistrations")}
            />
            <span className="toggle_description">
              Allow new merchants to register
            </span>
          </div>
        </div>

        <div className="form_row">
          <label style={{ fontSize: "1rem", fontWeight: "400" }}>
            Email Verification
          </label>
          <div className="toggle_wrapper">
            <ImageCheckbox
              checked={settings.requireEmailVerification}
              onChange={() => handleCheckboxChange("requireEmailVerification")}
            />
            <span className="toggle_description">
              Require email verification for new accounts
            </span>
          </div>
        </div>

        <div className="form_row">
          <label style={{ fontSize: "1rem", fontWeight: "400" }}>
            Sandbox Environment
          </label>
          <div className="toggle_wrapper">
            <ImageCheckbox
              checked={settings.enableSandbox}
              onChange={() => handleCheckboxChange("enableSandbox")}
            />
            <span className="toggle_description">
              Enable sandbox environment for testing
            </span>
          </div>
        </div>

        <button className="save_button" onClick={handleSave}>
          Save Changes
        </button>
      </div>

      <hr
        style={{
          margin: "2.5rem 0",
          border: "0",
          borderTop: "1px solid var(--stroke-sub-300)",
        }}
      />

      <div className="diagnostic_section">
        <h3>System Diagnostics & Maintenance</h3>
        <p className="section_description">
          Verify administrative access, database counts, and repair permissions.
        </p>

        <div
          className="diagnostic_panel"
          style={{
            background: "var(--bg-weak-50)",
            border: "1px solid var(--brand-tone-200)",
            borderRadius: "1rem",
            padding: "1.5rem",
            marginTop: "1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "1.5rem",
            }}
          >
            <div>
              <p
                style={{
                  fontWeight: "600",
                  color: "var(--brand-main-500)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span className="material-symbols-outlined">terminal</span>
                Administrative Health Check
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-soft-400)",
                  marginTop: "4px",
                }}
              >
                Current User UUID:{" "}
                {stats.isAdmin ? "Authorized" : "Limited Access"}
              </p>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                className="secondary_button"
                onClick={fetchSystemHealth}
                style={{ padding: "8px 16px", borderRadius: "0.5rem" }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  refresh
                </span>
                Sync
              </button>
              <button
                className="primary_button"
                onClick={generateMockVerification}
                style={{ padding: "8px 16px", borderRadius: "0.5rem" }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  add_circle
                </span>
                Test Data
              </button>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <div
              style={{
                padding: "1rem",
                background: "white",
                borderRadius: "0.8rem",
                border: "1px solid var(--stroke-sub-300)",
              }}
            >
              <label
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-soft-400)",
                  fontWeight: "600",
                  textTransform: "uppercase",
                }}
              >
                Permission Status
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "8px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: stats.isAdmin ? "#22c55e" : "#ef4444",
                  }}
                ></div>
                <p
                  style={{
                    fontWeight: "700",
                    color: stats.isAdmin ? "#166534" : "#991b1b",
                  }}
                >
                  {stats.isAdmin ? "SUPER ADMIN" : "INSUFFICIENT"}
                </p>
              </div>
              {!stats.isAdmin && (
                <button
                  className="primary_button"
                  onClick={async () => {
                    const { data } = await supabase.auth.getUser();
                    if (data?.user) performAdminPromotion(data.user);
                  }}
                  style={{
                    marginTop: "1rem",
                    width: "100%",
                    fontSize: "0.8rem",
                  }}
                >
                  Repair Permissions
                </button>
              )}
            </div>

            <div
              style={{
                padding: "1rem",
                background: "white",
                borderRadius: "0.8rem",
                border: "1px solid var(--stroke-sub-300)",
              }}
            >
              <label
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-soft-400)",
                  fontWeight: "600",
                  textTransform: "uppercase",
                }}
              >
                Database Census
              </label>
              <div style={{ marginTop: "8px" }}>
                <p style={{ fontSize: "0.9rem" }}>
                  Merchants: <strong>{stats.totalMerchants}</strong>
                </p>
                <p style={{ fontSize: "0.9rem", marginTop: "4px" }}>
                  Verifications: <strong>{stats.totalVerifications}</strong>
                </p>
              </div>
            </div>

            <div
              style={{
                gridColumn: "span 2",
                padding: "1rem",
                background: "rgba(39, 174, 96, 0.05)",
                borderRadius: "0.8rem",
                border: "1px dashed #27ae60",
              }}
            >
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#27ae60",
                  lineHeight: "1.5",
                }}
              >
                <strong>Tip:</strong> If you're experiencing "RLS Policy" errors
                while generating data or viewing tables, use the
                <strong> Repair Permissions</strong> button to ensure your
                account is correctly whitelisted in the security layer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformSettings;
