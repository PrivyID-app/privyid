import React, { useState, useEffect } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import AdminMerchantsTable from "../components/AdminMerchantsTable";
import CustomSelect from "../../../shared/components/CustomSelect";
import AddMerchantModal from "../components/AddMerchantModal";
import { supabase } from "../../../shared/services/supabase";
import BuildingLineIcon from "../../../assets/images/building-line.svg";
import QrScanLineIcon from "../../../assets/images/qr-scan-line.svg";
import CurrencyNairaIcon from "../../../assets/images/tabler_currency-naira.svg";
import TimeLine2Icon from "../../../assets/images/time-line-2.svg";
import "../super-admin.css";

const MerchantsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [filterStatus, setFilterStatus] = useState("all");
  const [stats, setStats] = useState({
    totalMerchants: "...",
    totalVerifications: "0",
    totalRevenue: "₦0",
    activeRate: "0%",
  });

  useEffect(() => {
    fetchStats();
  }, [refreshKey]);

  const fetchStats = async () => {
    try {
      const { count: mCount } = await supabase
        .from("merchants")
        .select("*", { count: "exact", head: true });

      const { data: vData } = await supabase.from("verifications").select("id");

      const vCount = vData?.length || 0;
      const totalRevenue = vCount * 500;

      setStats((prev) => ({
        ...prev,
        totalMerchants: mCount?.toLocaleString() || "0",
        totalVerifications: vCount.toLocaleString(),
        totalRevenue: `₦${totalRevenue.toLocaleString()}`,
        activeRate: mCount ? "100%" : "0%",
      }));
    } catch (error) {
      console.error("Error fetching merchant stats:", error);
    }
  };

  const refreshData = () => {
    setRefreshKey((prev) => prev + 1);
    fetchStats();
  };

  const overviewCards = [
    {
      icon: BuildingLineIcon,
      value: stats.totalMerchants,
      title: "Total Merchants",
      rate: "Live",
      trend: "up",
    },
    {
      icon: QrScanLineIcon,
      value: stats.totalVerifications,
      title: "Total Verifications",
      rate: "0.0%",
      trend: "up",
    },
    {
      icon: CurrencyNairaIcon,
      value: stats.totalRevenue,
      title: "Total Revenue",
      rate: "0.0%",
      trend: "up",
    },
    {
      icon: TimeLine2Icon,
      value: stats.activeRate,
      title: "Active Merchants",
      rate: "0.0%",
      trend: "up",
    },
  ];

  return (
    <div className="content_wrapper">
      <AddMerchantModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRefresh={refreshData}
      />
      <PageHeader
        title="Merchants"
        description="Manage registered merchants and their accounts"
        notificationIconRoute="/super-admin/notifications"
      />

      <div className="content_area">
        <div className="overview_wrapper">
          {overviewCards.map((card, index) => (
            <div key={index} className="overview_card">
              <div className="card_top_area">
                <div className="overview_card_icon">
                  <img
                    src={card.icon}
                    alt={`${card.title} Icon`}
                  />
                </div>

                <div className="card_rate">
                  <span
                    className={`material-symbols-outlined ${card.trend}_icon`}
                  >
                    {card.trend === "up" ? "arrow_upward" : "arrow_downward"}
                  </span>
                  <p className="rate_value">{card.rate}</p>
                </div>
              </div>

              <div className="card_content">
                <p className="card_value">{card.value}</p>
                <p className="card_title">{card.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="recent_verifications">
          <div className="top_area">
            <p className="section_title">All Merchants</p>

            <div className="page_title_actions_wrapper">
              <CustomSelect
                options={[
                  { value: "all", label: "All Status" },
                  { value: "active", label: "Active" },
                  { value: "pending", label: "Pending" },
                ]}
                value={filterStatus}
                onSelect={setFilterStatus}
                placeholder="Filter Records"
                className="service_selector_custom"
                placement="bottom"
              />

              <button className="secondary_button">
                <span className="material-symbols-outlined">download</span>
                Export as CSV
              </button>

              <button
                className="primary_button"
                onClick={() => setIsModalOpen(true)}
              >
                <span className="material-symbols-outlined">add</span>
                <p>Add Merchant</p>
              </button>
            </div>
          </div>

          <AdminMerchantsTable key={refreshKey} filter={filterStatus} />
        </div>
      </div>
    </div>
  );
};

export default MerchantsPage;
