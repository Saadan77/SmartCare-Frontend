// @mui material components
import { Icon } from "@mui/material";
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Advice Type", accessor: "adviceType", width: "34%", align: "left" },
    { Header: "Advice", accessor: "advice", width: "33%", align: "left" },
    { Header: "Delete", accessor: "delete", width: "33%", align: "right" },
  ];

  const rows = [
    {
      adviceType: (
        <MDTypography variant="caption" fontWeight="medium">
          General Advice
        </MDTypography>
      ),
      advice: (
        <MDTypography variant="caption" fontWeight="medium">
          Take medicine regularly
        </MDTypography>
      ),
      delete: <Icon style={{ background: "#1694c4", color: "white" }}>close</Icon>,
    },
  ];

  return { columns, rows };
}
