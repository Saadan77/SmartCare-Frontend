// @mui material components
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Unit", accessor: "unit", width: "34%", align: "left" },
    { Header: "Abbreviation", accessor: "abbreviation", width: "33%", align: "left" },
    { Header: "Description", accessor: "description", width: "33%", align: "left" },
  ];

  const rows = [
    {
      unit: (
        <MDTypography variant="caption" fontWeight="medium">
          kg
        </MDTypography>
      ),
      abbreviation: (
        <MDTypography variant="caption" fontWeight="medium">
          Kilograms
        </MDTypography>
      ),
      description: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}
