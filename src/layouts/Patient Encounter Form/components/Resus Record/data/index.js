// @mui material components
import { Icon } from "@mui/material";
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Date/Time", accessor: "dateTime", width: "34%", align: "left" },
    { Header: "Doctor", accessor: "doctor", width: "33%", align: "left" },
    { Header: "View", accessor: "View", width: "33%", align: "left" },
  ];

  const rows = [
    {
      dateTime: (
        <MDTypography variant="caption" fontWeight="medium">
          28-Sep-2024
        </MDTypography>
      ),
      doctor: (
        <MDTypography variant="caption" fontWeight="medium">
          Dr. John Smith
        </MDTypography>
      ),
      View: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}
