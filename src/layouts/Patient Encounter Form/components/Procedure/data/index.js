// @mui material components
import { Icon } from "@mui/material";
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Procedure", accessor: "procedure", width: "20%", align: "left" },
    { Header: "Priority", accessor: "priority", width: "20%", align: "left" },
    { Header: "Start Date", accessor: "startDate", width: "20%", align: "left" },
    {
      Header: "Special Instructions",
      accessor: "specialInstructions",
      width: "25%",
      align: "center",
    },
    { Header: "Organization Unit", accessor: "organizationUnit", width: "20%", align: "left" },
    { Header: "Delete", accessor: "delete", width: "20%", align: "center" },
  ];

  const rows = [
    {
      procedure: (
        <MDTypography variant="caption" fontWeight="medium">
          ABC 01
        </MDTypography>
      ),
      priority: (
        <MDTypography variant="caption" fontWeight="medium">
          Normal
        </MDTypography>
      ),
      priority: (
        <MDTypography variant="caption" fontWeight="medium">
          28-Sep-2024
        </MDTypography>
      ),
      specialInstructions: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      organizationUnit: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      delete: <Icon style={{ background: "#1694c4", color: "white" }}>close</Icon>,
    },
  ];

  return { columns, rows };
}
