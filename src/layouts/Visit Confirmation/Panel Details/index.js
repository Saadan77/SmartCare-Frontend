import MDTypography from "components/MDTypography";

export default function panelDetailsData() {
  const columns = [
    { Header: "Panel", accessor: "panel", width: "10%", align: "left" },
    { Header: "Plan / Expiry Date", accessor: "planExpiryDate", width: "10%", align: "left" },
    {
      Header: "OPD (Individual / Family) Balance",
      accessor: "OPDBalance",
      width: "20%",
      align: "center",
    },
    {
      Header: "IPD (Individual / Family) Balance",
      accessor: "IPDBalance",
      width: "20%",
      align: "center",
    },
    {
      Header: "ER (Individual / Family) Balance",
      accessor: "ERBalance",
      width: "20%",
      align: "center",
    },
    {
      Header: "Verification Expiry Date",
      accessor: "verificationExpiryDate",
      width: "10%",
      align: "center",
    },
    {
      Header: "Verification Status",
      accessor: "verificationStatus",
      width: "10%",
      align: "center",
    },
  ];

  const rows = [
    {
      panel: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      planExpiryDate: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      OPDBalance: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      IPDBalance: (
        <MDTypography variant="caption" fontWeight="medium">
          No records found.
        </MDTypography>
      ),
      ERBalance: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      verificationExpiryDate: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      verificationStatus: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}
