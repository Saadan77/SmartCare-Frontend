// @mui material components
import { Checkbox } from "@mui/material";
import MDTypography from "components/MDTypography";

export default function dosageTypeData() {
  const columns = [
    { Header: "Dosage Type", accessor: "dosageType", width: "50%", align: "left" },
    { Header: "Select", accessor: "select", width: "50%", align: "left" },
  ];

  const rows = [
    {
      dosageType: (
        <MDTypography variant="caption" fontWeight="medium">
          Capsule
        </MDTypography>
      ),
      select: <Checkbox />,
    },
    {
      dosageType: (
        <MDTypography variant="caption" fontWeight="medium">
          Syrup
        </MDTypography>
      ),
      select: <Checkbox />,
    },
  ];

  return { columns, rows };
}
