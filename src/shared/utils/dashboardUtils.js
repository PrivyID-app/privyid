export const aggregateMonthlyData = (verifications) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentMonthIndex = new Date().getMonth();

  // Initialize last 6 months
  const last6Months = [];
  for (let i = 5; i >= 0; i--) {
    const monthIndex = (currentMonthIndex - i + 12) % 12;
    last6Months.push({ name: months[monthIndex], value: 0 });
  }

  verifications.forEach((v) => {
    const date = new Date(v.created_at);
    const monthName = months[date.getMonth()];
    const chartItem = last6Months.find((item) => item.name === monthName);
    if (chartItem) {
      chartItem.value += 1;
    }
  });

  return last6Months;
};

export const calculateStats = (vStats) => {
  return {
    total: vStats.length,
    approved: vStats.filter(
      (v) => v.status === "completed" || v.status === "approved",
    ).length,
    pending: vStats.filter(
      (v) => v.status === "pending" || v.status === "initiated",
    ).length,
    rejected: vStats.filter(
      (v) => v.status === "failed" || v.status === "rejected",
    ).length,
  };
};

export const formatVerificationData = (verifications) => {
  return verifications.map((v) => ({
    id: v.id, // Keep full UUID for logic
    displayId: v.id.substring(0, 8).toUpperCase(),
    type: v.metadata?.id_type || v.type?.toUpperCase() || "N/A",
    name:
      v.customer_name ||
      v.metadata?.full_name ||
      v.user_identifier ||
      "Unknown",
    status: v.status.charAt(0).toUpperCase() + v.status.slice(1),
    batch:
      v.metadata?.batch_no ||
      (v.source === "single"
        ? "#SINGLE"
        : v.source === "batch"
          ? "#BATCH"
          : "API"),
    date: new Date(v.created_at).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    time: new Date(v.created_at).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
  }));
};

export const formatRevenue = (value) => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(0)}m`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}k`;
  }
  return value;
};
