// @mui material components
import { Icon } from "@mui/material";
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Date/Time", accessor: "dateTime", width: "50%", align: "left" },
    { Header: "Score", accessor: "score", width: "50%", align: "left" },
  ];

  const rows = [
    {
      dateTime: (
        <MDTypography variant="caption" fontWeight="medium">
          28-Sep-2024
        </MDTypography>
      ),
      score: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}
