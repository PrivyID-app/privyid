import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import AdminVerificationsTable from "../components/AdminVerificationsTable";
import "../super-admin.css";

const VerificationsPage = () => {
  const overviewCards = [
    {
      icon: "building-line.svg",
      value: "1,250",
      title: "Total Merchants",
      rate: "+12.5%",
      trend: "up",
    },
    {
      icon: "qr-scan-line.svg",
      value: "12,250",
      title: "Total Verifications",
      rate: "+12.5%",
      trend: "up",
    },
    {
      icon: "tabler_currency-naira.svg",
      value: "₦12,550,450",
      title: "Total Revenue MDT",
      rate: "+12.5%",
      trend: "up",
    },
    {
      icon: "time-line-2.svg",
      value: "1.8s",
      title: "Average Response Time",
      rate: "+2.5%",
      trend: "up",
    },
  ];

  return (
    <>
      <PageHeader
        title="Verifications"
        description="Review and manage global verification requests"
      />

      <div className="content_area">
        <div className="overview_wrapper">
          {overviewCards.map((card, index) => (
            <div key={index} className="overview_card">
              <div className="card_top_area">
                <div className="overview_card_icon">
                  <img
                    src={`/src/assets/images/${card.icon}`}
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
            <p className="section_title">Recent Verifications</p>

            <a href="#" className="view_all_link">
              <p>View All</p>
              <span className="material-symbols-outlined arrow_icon">
                chevron_right
              </span>
            </a>
          </div>

          <AdminVerificationsTable />

          <div className="pagination">
            <p className="pagination_title">Page 1 of 5</p>

            <div className="pagination_buttons">
              <button className="pagination_button">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>

              <div className="page">
                <button className="page_button active_page">1</button>
                <button className="page_button">2</button>
                <button className="page_button">3</button>
                <button className="page_button">4</button>
                <button className="page_button">5</button>
              </div>

              <button className="pagination_button">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>

            <select
              name="page_dropdown"
              id="page_dropdown"
              className="page_dropdown"
            >
              <option value="1">1/Page 5</option>
              <option value="2">2/Page 5</option>
              <option value="3">3/Page 5</option>
              <option value="4">4/Page 5</option>
              <option value="5">5/Page 5</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationsPage;
