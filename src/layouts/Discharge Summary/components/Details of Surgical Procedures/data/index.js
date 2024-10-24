// @mui material components
import MDTypography from "components/MDTypography";

export default function DetailsOfSurgicalProceduresData() {
  const columns = [
    { Header: "Procedure", accessor: "Procedure", width: "20%", align: "left" },
    { Header: "Date", accessor: "Date", width: "20%", align: "left" },
    { Header: "Inclusion", accessor: "Inclusion", width: "20%", align: "left" },
    { Header: "Finding", accessor: "Finding", width: "20%", align: "left" },
    { Header: "Nurgeon", accessor: "Nurgeon", width: "10%", align: "left" },
    { Header: "Anesthesiest", accessor: "Anesthesiest", width: "10%", align: "left" },
  ];

  const rows = [
    {
      Procedure: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Date: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Inclusion: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Finding: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Nurgeon: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Anesthesiest: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}
