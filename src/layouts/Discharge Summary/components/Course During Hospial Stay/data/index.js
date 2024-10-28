// @mui material components
import { Checkbox } from "@mui/material";
import MDTypography from "components/MDTypography";

export default function CourseDuringHospialStayData() {
  const columns = [
    { Header: "Date/Time", accessor: "DateTime", width: "25%", align: "left" },
    { Header: "Doctor", accessor: "Doctor", width: "25%", align: "left" },
    { Header: "Progress", accessor: "Progress", width: "25%", align: "left" },
    { Header: "Select", accessor: "Select", width: "25%", align: "left" },
  ];

  const rows = [
    {
      DateTime: (
        <MDTypography variant="caption" fontWeight="medium">
          24/10/2024 10:49 PM
        </MDTypography>
      ),
      Doctor: (
        <MDTypography variant="caption" fontWeight="medium">
          Dr John Smith
        </MDTypography>
      ),
      Progress: (
        <MDTypography variant="caption" fontWeight="medium">
          Processed
        </MDTypography>
      ),
      Select: <Checkbox />,
    },
  ];

  return { columns, rows };
}
