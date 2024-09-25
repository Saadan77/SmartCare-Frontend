// @mui material components
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Date", accessor: "date", width: "25%", align: "left" },
    { Header: "Oranization Unit", accessor: "organizationUnit", width: "25%", align: "left" },
    { Header: "Shift Name", accessor: "shiftName", width: "25%", align: "center" },
    { Header: "Shift Time", accessor: "shiftTime", width: "25%", align: "center" },
  ];

  const rows = [
    {
      date: (
        <MDTypography variant="caption" fontWeight="medium">
          2024-09-25, Wed
        </MDTypography>
      ),
      organizationUnit: (
        <MDTypography variant="caption" fontWeight="medium">
          General OPD Sub Dept
        </MDTypography>
      ),
      shiftName: (
        <MDTypography variant="caption" fontWeight="medium">
          Evening
        </MDTypography>
      ),
      shiftTime: (
        <MDTypography variant="caption" fontWeight="medium">
          12:00 - 15:00
        </MDTypography>
      ),
    },
    {
      date: (
        <MDTypography variant="caption" fontWeight="medium">
          2024-09-30, Sun
        </MDTypography>
      ),
      organizationUnit: (
        <MDTypography variant="caption" fontWeight="medium">
          General OPD Sub Dept
        </MDTypography>
      ),
      shiftName: (
        <MDTypography variant="caption" fontWeight="medium">
          Morning
        </MDTypography>
      ),
      shiftTime: (
        <MDTypography variant="caption" fontWeight="medium">
          15:00 - 18:00
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
