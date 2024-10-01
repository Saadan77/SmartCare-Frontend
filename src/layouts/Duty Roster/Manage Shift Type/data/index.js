// @mui material components
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [{ Header: "Shift Type", accessor: "shiftType", width: "100%", align: "left" }];

  const rows = [
    {
      shiftType: (
        <MDTypography variant="caption" fontWeight="medium">
          Evening
        </MDTypography>
      ),
    },
    {
      shiftType: (
        <MDTypography variant="caption" fontWeight="medium">
          Morning
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
