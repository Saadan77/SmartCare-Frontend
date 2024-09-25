export default function data() {
  const columns = [
    { Header: "Consultation", subColumns: ["Count", "Charges"], width: "20%", align: "center" },
    { Header: "Investigation", subColumns: ["Count", "Charges"], width: "20%", align: "center" },
    { Header: "Pharmacy", subColumns: ["Count", "Charges"], width: "20%", align: "center" },
    { Header: "Total", subColumns: ["Count", "Charges"], width: "20%", align: "center" },
  ];

  const rows = [
    {
      todayCount: {
        consultation: { count: 0, charges: 0.0 },
        investigation: { count: 0, charges: 0.0 },
        pharmacy: { count: 0, charges: 0.0 },
        total: { count: 0, charges: 0.0 },
      },
      currentMonthCount: {
        consultation: { count: 2, charges: 0.0 },
        investigation: { count: 0, charges: 0.0 },
        pharmacy: { count: 0, charges: 0.0 },
        total: { count: 2, charges: 0.0 },
      },
    },
  ];

  return { columns, rows };
}
