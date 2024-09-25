// @mui material components
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Report Date", accessor: "reportDate", width: "25%", align: "left" },
    { Header: "Investigation", accessor: "investigation", width: "25%", align: "left" },
    { Header: "Patient", accessor: "patient", width: "25%", align: "center" },
    { Header: "MR. No", accessor: "mrNo", width: "25%", align: "center" },
  ];

  const rows = [
    {
      reportDate: (
        <MDTypography variant="caption" fontWeight="medium">
          2024-09-25, Wed
        </MDTypography>
      ),
      investigation: (
        <MDTypography variant="caption" fontWeight="medium">
          Covid
        </MDTypography>
      ),
      patient: (
        <MDTypography variant="caption" fontWeight="medium">
          Smith
        </MDTypography>
      ),
      mrNo: (
        <MDTypography variant="caption" fontWeight="medium">
          00001-26-09-2024
        </MDTypography>
      ),
    },
    {
      reportDate: (
        <MDTypography variant="caption" fontWeight="medium">
          2024-09-30, Sun
        </MDTypography>
      ),
      investigation: (
        <MDTypography variant="caption" fontWeight="medium">
          Fever
        </MDTypography>
      ),
      patient: (
        <MDTypography variant="caption" fontWeight="medium">
          John
        </MDTypography>
      ),
      mrNo: (
        <MDTypography variant="caption" fontWeight="medium">
          00002-26-09-2024
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
