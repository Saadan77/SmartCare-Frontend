// @mui material components
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Sr. No", accessor: "srNo", width: "15%", align: "left" },
    { Header: "Nnvestigation", accessor: "investigation", width: "60%", align: "left" },
    { Header: "Frequency", accessor: "frequency", width: "25%", align: "center" },
  ];

  const rows = [
    {
      srNo: (
        <MDTypography variant="caption" fontWeight="medium">
          1
        </MDTypography>
      ),
      investigation: (
        <MDTypography variant="caption" fontWeight="medium">
          X-Ray
        </MDTypography>
      ),
      frequency: (
        <MDTypography variant="caption" fontWeight="medium">
          18
        </MDTypography>
      ),
    },
    {
      srNo: (
        <MDTypography variant="caption" fontWeight="medium">
          2
        </MDTypography>
      ),
      investigation: (
        <MDTypography variant="caption" fontWeight="medium">
          Blood Sugar Fasting
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
          3
        </MDTypography>
      ),
      investigation: (
        <MDTypography variant="caption" fontWeight="medium">
          Blood Sugar Random
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
          4
        </MDTypography>
      ),
      investigation: (
        <MDTypography variant="caption" fontWeight="medium">
          X-Ray
        </MDTypography>
      ),
      frequency: (
        <MDTypography variant="caption" fontWeight="medium">
          20
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
