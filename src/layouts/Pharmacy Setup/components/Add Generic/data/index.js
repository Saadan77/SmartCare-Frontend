// @mui material components
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [{ Header: "Generic", accessor: "generic", width: "100%", align: "left" }];

  const rows = [
    {
      generic: (
        <MDTypography variant="caption" fontWeight="medium">
          Generic 1
        </MDTypography>
      ),
    },
    {
      generic: (
        <MDTypography variant="caption" fontWeight="medium">
          Generic 2
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
