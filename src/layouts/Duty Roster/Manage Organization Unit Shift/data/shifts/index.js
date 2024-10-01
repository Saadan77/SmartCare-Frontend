// @mui material components
import MDTypography from "components/MDTypography";
import { Icon } from "@mui/material";

export default function data() {
  const columns = [
    { Header: "Shift Name", accessor: "shiftName", width: "15%", align: "left" },
    { Header: "Shift Type", accessor: "shiftType", width: "15%", align: "left" },
    { Header: "Start Time", accessor: "startTime", width: "15%", align: "left" },
    { Header: "End Time", accessor: "endTime", width: "15%", align: "left" },
    { Header: "Days", accessor: "days", width: "35%", align: "left" },
    { Header: "Edit", accessor: "edit", width: "5%", align: "left" },
  ];

  const rows = [
    {
      shiftName: (
        <MDTypography variant="caption" fontWeight="medium">
          Morning
        </MDTypography>
      ),
      shiftType: (
        <MDTypography variant="caption" fontWeight="medium">
          Staff Morning
        </MDTypography>
      ),
      startTime: (
        <MDTypography variant="caption" fontWeight="medium">
          08:30 AM
        </MDTypography>
      ),
      endTime: (
        <MDTypography variant="caption" fontWeight="medium">
          05:30 PM
        </MDTypography>
      ),
      days: (
        <MDTypography variant="caption" fontWeight="medium">
          Monday, Wednesday, Friday, Saturday, Sunday
        </MDTypography>
      ),
      edit: <Icon>edit</Icon>,
    },
    {
      shiftName: (
        <MDTypography variant="caption" fontWeight="medium">
          Morning
        </MDTypography>
      ),
      shiftType: (
        <MDTypography variant="caption" fontWeight="medium">
          On Call
        </MDTypography>
      ),
      startTime: (
        <MDTypography variant="caption" fontWeight="medium">
          05:30 PM
        </MDTypography>
      ),
      endTime: (
        <MDTypography variant="caption" fontWeight="medium">
          08:30 AM
        </MDTypography>
      ),
      days: (
        <MDTypography variant="caption" fontWeight="medium">
          Monday, Wednesday, Friday, Saturday, Sunday
        </MDTypography>
      ),
      edit: <Icon>edit</Icon>,
    },
  ];

  return { columns, rows };
}
