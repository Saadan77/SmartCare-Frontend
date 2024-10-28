// @mui material components
import MDTypography from "components/MDTypography";

export default function BabyDetailsData() {
  const columns = [
    { Header: "MR No.", accessor: "MRNo", width: "20%", align: "left" },
    { Header: "Date/Time of Birth", accessor: "DateTimeOfBirth", width: "20%", align: "left" },
    { Header: "Name", accessor: "Name", width: "20%", align: "left" },
    { Header: "Admission No.", accessor: "AdmissionNo", width: "10%", align: "left" },
    { Header: "Admission Status", accessor: "AdmissionStatus", width: "20%", align: "left" },
    { Header: "Print", accessor: "Print", width: "10%", align: "left" },
  ];

  const rows = [
    {
      MRNo: (
        <MDTypography variant="caption" fontWeight="medium">
          00001-25-10-2024
        </MDTypography>
      ),
      DateTimeOfBirth: (
        <MDTypography variant="caption" fontWeight="medium">
          25/10/2024 12:40 AM
        </MDTypography>
      ),
      Name: (
        <MDTypography variant="caption" fontWeight="medium">
          John Smith
        </MDTypography>
      ),
      AdmissionNo: (
        <MDTypography variant="caption" fontWeight="medium">
          25-10-2025-00001
        </MDTypography>
      ),
      AdmissionStatus: (
        <MDTypography variant="caption" fontWeight="medium">
          Processed
        </MDTypography>
      ),
      Print: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}
