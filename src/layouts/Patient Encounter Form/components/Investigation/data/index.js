// @mui material components
import { Icon } from "@mui/material";
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Investigation", accessor: "investigation", width: "25%", align: "left" },
    { Header: "Priority", accessor: "priority", width: "25%", align: "left" },
    {
      Header: "Special Instructions",
      accessor: "specialInstructions",
      width: "25%",
      align: "center",
    },
    { Header: "Delete", accessor: "delete", width: "25%", align: "center" },
  ];

  const rows = [
    {
      investigation: (
        <MDTypography variant="caption" fontWeight="medium">
          ABC 01
        </MDTypography>
      ),
      priority: (
        <MDTypography variant="caption" fontWeight="medium">
          Normal
        </MDTypography>
      ),
      specialInstructions: (
        <MDTypography variant="caption" fontWeight="medium">
          Few cells seen in blood
        </MDTypography>
      ),
      delete: <Icon style={{ background: "#1694c4", color: "white" }}>close</Icon>,
    },
  ];

  return { columns, rows };
}
