import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Icons
import FileTextIcon from "../../../assets/images/file-text-line.svg";
import FileCheckIcon from "../../../assets/images/file-check-fill.svg";
import TimeLineIcon from "../../../assets/images/time-line.svg";
import ErrorWarningIcon from "../../../assets/images/error-warning-line.svg";
import CheckboxIcon from "../../../assets/images/Checkbox [1.0].svg";
import CheckboxActiveIcon from "../../../assets/images/Checkbox-active [1.0].svg";

const DashboardOverview = () => {
  const lineChartData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 500 },
    { name: "Jun", value: 900 },
    { name: "Jul", value: 1000 },
  ];

  const barChartData = [
    { name: "Approved", value: 4000 },
    { name: "Pending", value: 2400 },
    { name: "Rejected", value: 400 },
  ];

  const verifications = [
    {
      id: "#KYC20240915001",
      type: "Passport",
      name: "John Doe",
      status: "Approved",
      batch: "#BATCH1001",
      date: "15 Sep 2024",
      time: "10:30 AM",
    },
    {
      id: "#KYC20240915002",
      type: "Driver License",
      name: "Jane Smith",
      status: "Pending",
      batch: "#BATCH1002",
      date: "16 Sep 2024",
      time: "11:45 AM",
    },
    {
      id: "#KYC20240915003",
      type: "National ID",
      name: "Mike Johnson",
      status: "Rejected",
      batch: "#BATCH1003",
      date: "17 Sep 2024",
      time: "09:15 AM",
    },
    {
      id: "#KYC20240915004",
      type: "National ID",
      name: "Sarah Williams",
      status: "Approved",
      batch: "#BATCH1004",
      date: "17 Sep 2024",
      time: "09:15 AM",
    },
    {
      id: "#KYC20240915005",
      type: "Passport",
      name: "Chris Brown",
      status: "Approved",
      batch: "#BATCH1005",
      date: "17 Sep 2024",
      time: "09:15 AM",
    },
  ];

  const [selectedRows, setSelectedRows] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set());
      setSelectAll(false);
      return;
    }

    const all = new Set(verifications.map((_, i) => i));
    setSelectedRows(all);
    setSelectAll(true);
  };

  const toggleRow = (index) => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      setSelectAll(next.size === verifications.length);
      return next;
    });
  };

  return (
    <>
      <PageHeader
        title="Dashboard Overview"
        description="Monitor your verification activity and performance"
      />

      <div className="content_area">
        {/* Quick Actions */}
        <div className="quick_actions">
          <p className="section_title">Quick Actions</p>

          <div className="button_wrapper">
            <button className="secondary_button">
              <span className="material-symbols-outlined">add</span>
              <p>Single Verification</p>
            </button>

            <button className="secondary_button">
              <span className="material-symbols-outlined">add</span>
              <p>API Integration</p>
            </button>

            <button className="primary_button">
              <span className="material-symbols-outlined">docs</span>
              <p>Batch Verification</p>
            </button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="overview_wrapper">
          <div className="overview_card">
            <div className="card_top_area">
              <div className="overview_card_icon">
                <img src={FileTextIcon} alt="Icon" />
              </div>
              <div className="card_rate">
                <span className="material-symbols-outlined up_icon">
                  arrow_upward
                </span>
                <p className="rate_value">+12.5%</p>
              </div>
            </div>
            <div className="card_content">
              <p className="card_value">1,250</p>
              <p className="card_title">Total Verifications</p>
            </div>
          </div>

          <div className="overview_card">
            <div className="card_top_area">
              <div className="overview_card_icon">
                <img src={FileCheckIcon} alt="Icon" />
              </div>
              <div className="card_rate">
                <span className="material-symbols-outlined up_icon">
                  arrow_upward
                </span>
                <p className="rate_value">+12.5%</p>
              </div>
            </div>
            <div className="card_content">
              <p className="card_value">12,250</p>
              <p className="card_title">Verified</p>
            </div>
          </div>

          <div className="overview_card">
            <div className="card_top_area">
              <div className="overview_card_icon">
                <img src={TimeLineIcon} alt="Icon" />
              </div>
              <div className="card_rate">
                <span className="material-symbols-outlined up_icon">
                  arrow_upward
                </span>
                <p className="rate_value">+12.5%</p>
              </div>
            </div>
            <div className="card_content">
              <p className="card_value">250</p>
              <p className="card_title">Total Pending</p>
            </div>
          </div>

          <div className="overview_card">
            <div className="card_top_area">
              <div className="overview_card_icon">
                <img src={ErrorWarningIcon} alt="Icon" />
              </div>
              <div className="card_rate">
                <span className="material-symbols-outlined up_icon">
                  arrow_upward
                </span>
                <p className="rate_value">+2.5%</p>
              </div>
            </div>
            <div className="card_content">
              <p className="card_value">50</p>
              <p className="card_title">Total Rejected</p>
            </div>
          </div>
        </div>

        {/* Charts Wrapper */}
        <div className="chart_wrapper">
          <div className="verification_activity">
            <div className="top_area">
              <p className="section_title">Verification Activity</p>
              <select
                name="timeframe_dropdown"
                id="timeframe_dropdown"
                className="timeframe_dropdown styled_select"
              >
                <option value="this_month">This Month</option>
                <option value="last_month">Last Month</option>
                <option value="last_3_months">Last 3 Months</option>
                <option value="last_6_months">Last 6 Months</option>
                <option value="this_year">This Year</option>
              </select>
            </div>

            <div className="line_chart_area">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#5AC4AF"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="performance_summary">
            <div className="top_area">
              <p className="section_title">Performance Summary</p>
              <select
                name="performance_dropdown"
                id="performance_dropdown"
                className="filter_options styled_select"
              >
                <option value="quarter1">Quarter 1</option>
                <option value="quarter2">Quarter 2</option>
                <option value="quarter3">Quarter 3</option>
                <option value="quarter4">Quarter 4</option>
                <option value="this_year">This Year</option>
              </select>
            </div>

            <div className="bar_chart_area">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barChartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: "transparent" }} />
                  <Bar
                    dataKey="value"
                    fill="#1B263C"
                    radius={[5, 5, 0, 0]}
                    barSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Verifications Table */}
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
              />
            </div>
            <a href="#" className="view_all_link">
              <p>View All</p>
              <span className="material-symbols-outlined arrow_icon">
                chevron_right
              </span>
            </a>
          </div>

          <div className="merchant_table">
            <div className="table_header">
              <div className="cell checkbox_cell">
                <img
                  src={selectAll ? CheckboxActiveIcon : CheckboxIcon}
                  alt="Select all"
                  onClick={toggleSelectAll}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="cell">
                <p>Verification No.</p>
              </div>
              <div className="cell">
                <p>ID Type</p>
              </div>
              <div className="cell">
                <p>User Name</p>
              </div>
              <div className="cell">
                <p>Status</p>
              </div>
              <div className="cell">
                <p>Batch No.</p>
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
              {verifications.map((item, index) => (
                <div className="table_row" key={index}>
                  <div className="cell checkbox_cell">
                    <img
                      src={
                        selectedRows.has(index)
                          ? CheckboxActiveIcon
                          : CheckboxIcon
                      }
                      alt={selectedRows.has(index) ? "Selected" : "Select"}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleRow(index);
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div className="cell">
                    <p>{item.id}</p>
                  </div>
                  <div className="cell">
                    <p>{item.type}</p>
                  </div>
                  <div className="cell">
                    <p>{item.name}</p>
                  </div>
                  <div className="cell">
                    <p className={`status ${item.status.toLowerCase()}`}>
                      {item.status}
                    </p>
                  </div>
                  <div className="cell">
                    <p>{item.batch}</p>
                  </div>
                  <div className="cell">
                    <p>{item.date}</p>
                  </div>
                  <div className="cell">
                    <p>{item.time}</p>
                  </div>
                  <div className="cell action_cell">
                    <button className="action_button">
                      <span className="material-symbols-outlined">
                        more_horiz
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination">
              <p className="pagination_title">Page 1 of 5</p>
              <div className="pagination_buttons">
                <button className="pagination_button">
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>
                <div className="page">
                  <button className="page_button active_page">1</button>
                  <button className="page_button">2</button>
                  <button className="page_button">3</button>
                  <button className="page_button">4</button>
                  <button className="page_button">5</button>
                </div>
                <button className="pagination_button">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </div>
              <select
                name="page_dropdown"
                id="page_dropdown"
                className="page_dropdown styled_select"
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
      </div>
    </>
  );
};

export default DashboardOverview;
