// @mui material components
import { Icon } from "@mui/material";
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Created Date/Time", accessor: "createdDateTime", width: "20%", align: "left" },
    { Header: "Doctor", accessor: "doctor", width: "20%", align: "left" },
    { Header: "Physicians Order", accessor: "physiciansOrder", width: "20%", align: "left" },
    { Header: "Compiled By", accessor: "compiledBy", width: "20%", align: "left" },
    { Header: "Delete", accessor: "delete", width: "20%", align: "center" },
  ];

  const rows = [
    {
      createdDateTime: (
        <MDTypography variant="caption" fontWeight="medium">
          28-Sep-2024
        </MDTypography>
      ),
      doctor: (
        <MDTypography variant="caption" fontWeight="medium">
          Dr. John Smith
        </MDTypography>
      ),
      physiciansOrder: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      compiledBy: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      delete: <Icon style={{ background: "#1694c4", color: "white" }}>close</Icon>,
    },
  ];

  return { columns, rows };
}
