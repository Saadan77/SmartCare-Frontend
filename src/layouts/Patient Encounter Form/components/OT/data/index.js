// @mui material components
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "SurgeryID", accessor: "surgeryID", width: "20%", align: "left" },
    { Header: "Recommended By", accessor: "recommendedBy", width: "20%", align: "left" },
    { Header: "Operation Date/Time", accessor: "opDateTime", width: "20%", align: "left" },
    { Header: "Surery Status", accessor: "surgeryStatus", width: "20%", align: "left" },
    { Header: "Status", accessor: "status", width: "20%", align: "left" },
    { Header: "Reschedule", accessor: "reschedule", width: "20%", align: "left" },
  ];

  const rows = [
    {
      surgeryID: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      recommendedBy: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      opDateTime: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      surgeryStatus: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      status: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      reschedule: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}
