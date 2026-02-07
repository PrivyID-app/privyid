import React, { useState } from "react";
import "../../super-admin.css";

const TicketList = ({ onSelectTicket }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const tickets = [
    {
      id: "TKT-001",
      merchant: "Ironclad Systems",
      subject: "API Integration Issue",
      priority: "high",
      status: "open",
      assignedTo: "John Doe",
      created: "2024-09-15 10:30",
      lastUpdate: "2024-09-15 14:20",
    },
    {
      id: "TKT-002",
      merchant: "TechFlow Solutions",
      subject: "Verification Delay",
      priority: "medium",
      status: "in_progress",
      assignedTo: "Sarah Johnson",
      created: "2024-09-14 15:45",
      lastUpdate: "2024-09-15 09:15",
    },
    {
      id: "TKT-003",
      merchant: "Quantum Dynamics",
      subject: "Billing Discrepancy",
      priority: "high",
      status: "open",
      assignedTo: "Unassigned",
      created: "2024-09-14 11:20",
      lastUpdate: "2024-09-14 11:20",
    },
    {
      id: "TKT-004",
      merchant: "CloudNine Inc",
      subject: "Account Access Problem",
      priority: "critical",
      status: "open",
      assignedTo: "Emma Wright",
      created: "2024-09-14 09:30",
      lastUpdate: "2024-09-14 16:45",
    },
    {
      id: "TKT-005",
      merchant: "BlueWave Corp",
      subject: "Feature Request",
      priority: "low",
      status: "resolved",
      assignedTo: "Michael Chen",
      created: "2024-09-13 14:15",
      lastUpdate: "2024-09-14 10:30",
    },
    {
      id: "TKT-006",
      merchant: "GreenLeaf Ventures",
      subject: "Documentation Clarification",
      priority: "low",
      status: "closed",
      assignedTo: "Sarah Johnson",
      created: "2024-09-12 16:00",
      lastUpdate: "2024-09-13 11:20",
    },
    {
      id: "TKT-007",
      merchant: "NexGen Technologies",
      subject: "Webhook Not Firing",
      priority: "medium",
      status: "in_progress",
      assignedTo: "John Doe",
      created: "2024-09-12 10:45",
      lastUpdate: "2024-09-15 08:30",
    },
    {
      id: "TKT-008",
      merchant: "Innovate Labs",
      subject: "Rate Limit Increase Request",
      priority: "medium",
      status: "resolved",
      assignedTo: "Emma Wright",
      created: "2024-09-11 13:20",
      lastUpdate: "2024-09-12 15:40",
    },
    {
      id: "TKT-009",
      merchant: "Stellar Enterprises",
      subject: "Payment Gateway Error",
      priority: "high",
      status: "in_progress",
      assignedTo: "Michael Chen",
      created: "2024-09-11 09:15",
      lastUpdate: "2024-09-15 12:10",
    },
    {
      id: "TKT-010",
      merchant: "Apex Holdings",
      subject: "API Key Not Working",
      priority: "critical",
      status: "resolved",
      assignedTo: "John Doe",
      created: "2024-09-10 11:30",
      lastUpdate: "2024-09-11 14:25",
    },
  ];

  const filteredTickets =
    selectedFilter === "all"
      ? tickets
      : tickets.filter((t) => t.status === selectedFilter);

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "critical":
        return "priority_critical";
      case "high":
        return "priority_high";
      case "medium":
        return "priority_medium";
      case "low":
        return "priority_low";
      default:
        return "";
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "open":
        return "pending";
      case "in_progress":
        return "in_progress";
      case "resolved":
        return "approved";
      case "closed":
        return "closed";
      default:
        return "";
    }
  };

  return (
    <div className="ticket_list_container">
      <div className="ticket_filters">
        <button
          className={`filter_btn ${selectedFilter === "all" ? "active" : ""}`}
          onClick={() => setSelectedFilter("all")}
        >
          All Tickets
        </button>
        <button
          className={`filter_btn ${selectedFilter === "open" ? "active" : ""}`}
          onClick={() => setSelectedFilter("open")}
        >
          Open
        </button>
        <button
          className={`filter_btn ${
            selectedFilter === "in_progress" ? "active" : ""
          }`}
          onClick={() => setSelectedFilter("in_progress")}
        >
          In Progress
        </button>
        <button
          className={`filter_btn ${
            selectedFilter === "resolved" ? "active" : ""
          }`}
          onClick={() => setSelectedFilter("resolved")}
        >
          Resolved
        </button>
        <button
          className={`filter_btn ${selectedFilter === "closed" ? "active" : ""}`}
          onClick={() => setSelectedFilter("closed")}
        >
          Closed
        </button>
      </div>

      <div className="merchant_table tickets_table">
        <div className="table_header">
          <div className="cell">Ticket ID</div>
          <div className="cell">Merchant</div>
          <div className="cell">Subject</div>
          <div className="cell">Priority</div>
          <div className="cell">Status</div>
          <div className="cell">Assigned To</div>
          <div className="cell">Last Update</div>
          <div className="cell action_cell">Action</div>
        </div>

        <div className="table_body">
          {filteredTickets.map((ticket) => (
            <div key={ticket.id} className="table_row">
              <div className="cell">
                <p>{ticket.id}</p>
              </div>
              <div className="cell">
                <p>{ticket.merchant}</p>
              </div>
              <div className="cell">
                <p>{ticket.subject}</p>
              </div>
              <div className="cell">
                <span
                  className={`priority_badge ${getPriorityClass(ticket.priority)}`}
                >
                  {ticket.priority.charAt(0).toUpperCase() +
                    ticket.priority.slice(1)}
                </span>
              </div>
              <div className="cell">
                <p className={`status ${getStatusClass(ticket.status)}`}>
                  {ticket.status.replace("_", " ").charAt(0).toUpperCase() +
                    ticket.status.replace("_", " ").slice(1)}
                </p>
              </div>
              <div className="cell">
                <p>{ticket.assignedTo}</p>
              </div>
              <div className="cell">
                <p>{ticket.lastUpdate}</p>
              </div>
              <div className="cell action_cell">
                <button
                  className="action_button"
                  onClick={() => onSelectTicket(ticket)}
                >
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketList;
