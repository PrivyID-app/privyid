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
