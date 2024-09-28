// @mui material components
import { Icon } from "@mui/material";
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "From Date/Time", accessor: "fromDateTime", width: "20%", align: "left" },
    { Header: "To Date/Time", accessor: "toDateTime", width: "10%", align: "left" },
    { Header: "Duration", accessor: "duration", width: "10%", align: "left" },
    { Header: "Leave Category", accessor: "leaveCategory", width: "10%", align: "left" },
    { Header: "Admission Type", accessor: "admissionType", width: "10%", align: "left" },
    { Header: "Admission Date", accessor: "admissionDate", width: "10%", align: "left" },
    { Header: "Discharge Type", accessor: "dischargeDate", width: "10%", align: "left" },
    { Header: "Doctor", accessor: "doctor", width: "10%", align: "left" },
    { Header: "Delete", accessor: "delete", width: "10%", align: "center" },
  ];

  const rows = [
    {
      fromDateTime: (
        <MDTypography variant="caption" fontWeight="medium">
          28-Sep-2024
        </MDTypography>
      ),
      toDateTime: (
        <MDTypography variant="caption" fontWeight="medium">
          29-Sep-2024
        </MDTypography>
      ),
      duration: (
        <MDTypography variant="caption" fontWeight="medium">
          1 day
        </MDTypography>
      ),
      leaveCategory: (
        <MDTypography variant="caption" fontWeight="medium">
          Sick Leave
        </MDTypography>
      ),
      admissionType: (
        <MDTypography variant="caption" fontWeight="medium">
          Internal
        </MDTypography>
      ),
      admissionDate: (
        <MDTypography variant="caption" fontWeight="medium">
          28-Sep-2024
        </MDTypography>
      ),
      dischargeDate: (
        <MDTypography variant="caption" fontWeight="medium">
          29-Sep-2024
        </MDTypography>
      ),
      doctor: (
        <MDTypography variant="caption" fontWeight="medium">
          Dr. John Smith
        </MDTypography>
      ),

      delete: <Icon style={{ background: "#1694c4", color: "white" }}>close</Icon>,
    },
  ];

  return { columns, rows };
}
