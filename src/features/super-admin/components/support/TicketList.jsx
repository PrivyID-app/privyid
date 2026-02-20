import React, { useState, useEffect } from "react";
import "../../super-admin.css";
import ImageCheckbox from "../../../../shared/components/ImageCheckbox";
import CustomSelect from "../../../../shared/components/CustomSelect";
import { supabase } from "../../../../shared/services/supabase";

const TicketList = ({ onSelectTicket }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const filterOptions = [
    { value: "all", label: "All Tickets" },
    { value: "open", label: "Open" },
    { value: "in_progress", label: "In Progress" },
    { value: "resolved", label: "Resolved" },
    { value: "closed", label: "Closed" },
  ];

  useEffect(() => {
    fetchTickets();
  }, [selectedFilter]);

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log("Current User ID:", user?.id);

      if (user) {
        const { data: adminData } = await supabase
          .from("users")
          .select("is_admin")
          .eq("id", user.id)
          .single();
        console.log("Admin Status from public.users:", adminData?.is_admin);
      }

      let query = supabase
        .from("tickets")
        .select(
          `
          *,
          merchants (
            business_name
          )
        `,
        )
        .order("created_at", { ascending: false });

      if (selectedFilter !== "all") {
        query = query.eq("status", selectedFilter);
      }

      const { data, error } = await query;

      if (error) throw error;
      console.log("Tickets fetched:", data?.length);
      setTickets(data || []);
    } catch (error) {
      console.error("Error fetching tickets:", error);
      // Log more detailed error if possible
      if (error.details) console.error("Error details:", error.details);
      if (error.hint) console.error("Error hint:", error.hint);
    } finally {
      setLoading(false);
    }
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set());
      setSelectAll(false);
    } else {
      const allTicketIds = new Set(filteredTickets.map((ticket) => ticket.id));
      setSelectedRows(allTicketIds);
      setSelectAll(true);
    }
  };

  const toggleRow = (ticketId) => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      if (next.has(ticketId)) {
        next.delete(ticketId);
      } else {
        next.add(ticketId);
      }
      setSelectAll(next.size === filteredTickets.length);
      return next;
    });
  };

  const filteredTickets = tickets;

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
        <CustomSelect
          options={filterOptions}
          value={selectedFilter}
          onSelect={setSelectedFilter}
          className="filter_select"
        />
      </div>

      <div className="merchant_table tickets_table">
        <div className="table_header">
          <div className="cell checkbox_cell">
            <ImageCheckbox checked={selectAll} onChange={toggleSelectAll} />
          </div>
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
          {loading ? (
            <div className="table_empty">Loading tickets...</div>
          ) : filteredTickets.length === 0 ? (
            <div className="table_empty">No tickets found.</div>
          ) : (
            filteredTickets.map((ticket) => (
              <div key={ticket.id} className="table_row">
                <div className="cell checkbox_cell">
                  <ImageCheckbox
                    checked={selectedRows.has(ticket.id)}
                    onChange={() => toggleRow(ticket.id)}
                  />
                </div>
                <div className="cell">
                  <p>#{ticket.id.split("-")[0].toUpperCase()}</p>
                </div>
                <div className="cell">
                  <p>{ticket.merchants?.business_name || "N/A"}</p>
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
                  <p>{ticket.assigned_to || "Unassigned"}</p>
                </div>
                <div className="cell">
                  <p>{new Date(ticket.created_at).toLocaleDateString()}</p>
                </div>
                <div className="cell action_cell">
                  <button
                    className="action_button"
                    onClick={() => onSelectTicket(ticket)}
                  >
                    <span className="material-symbols-outlined">
                      visibility
                    </span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketList;
