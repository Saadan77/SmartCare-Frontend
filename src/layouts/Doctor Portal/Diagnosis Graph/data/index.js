// @mui material components
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Sr. No", accessor: "srNo", width: "15%", align: "left" },
    { Header: "Diagnosis", accessor: "diagnosis", width: "60%", align: "left" },
    { Header: "Frequency", accessor: "frequency", width: "25%", align: "center" },
  ];

  const rows = [
    {
      srNo: (
        <MDTypography variant="caption" fontWeight="medium">
          1
        </MDTypography>
      ),
      diagnosis: (
        <MDTypography variant="caption" fontWeight="medium">
          Covid-19
        </MDTypography>
      ),
      frequency: (
        <MDTypography variant="caption" fontWeight="medium">
          25
        </MDTypography>
      ),
    },
    {
      srNo: (
        <MDTypography variant="caption" fontWeight="medium">
          2
        </MDTypography>
      ),
      diagnosis: (
        <MDTypography variant="caption" fontWeight="medium">
          Diabetes Mellitus
        </MDTypography>
      ),
      frequency: (
        <MDTypography variant="caption" fontWeight="medium">
          30
        </MDTypography>
      ),
    },
    {
      srNo: (
        <MDTypography variant="caption" fontWeight="medium">
          3
        </MDTypography>
      ),
      diagnosis: (
        <MDTypography variant="caption" fontWeight="medium">
          Hypertension
        </MDTypography>
      ),
      frequency: (
        <MDTypography variant="caption" fontWeight="medium">
          45
        </MDTypography>
      ),
    },
    {
      srNo: (
        <MDTypography variant="caption" fontWeight="medium">
          4
        </MDTypography>
      ),
      diagnosis: (
        <MDTypography variant="caption" fontWeight="medium">
          Asthma
        </MDTypography>
      ),
      frequency: (
        <MDTypography variant="caption" fontWeight="medium">
          18
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
