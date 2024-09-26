// @mui material components
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Sr. No", accessor: "srNo", width: "15%", align: "left" },
    { Header: "Medication", accessor: "medication", width: "60%", align: "left" },
    { Header: "Frequency", accessor: "frequency", width: "25%", align: "center" },
  ];

  const rows = [
    {
      srNo: (
        <MDTypography variant="caption" fontWeight="medium">
          1
        </MDTypography>
      ),
      medication: (
        <MDTypography variant="caption" fontWeight="medium">
          Panadol
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
      medication: (
        <MDTypography variant="caption" fontWeight="medium">
          Calamox
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
      medication: (
        <MDTypography variant="caption" fontWeight="medium">
          Brufen
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
      medication: (
        <MDTypography variant="caption" fontWeight="medium">
          Flagyl
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
