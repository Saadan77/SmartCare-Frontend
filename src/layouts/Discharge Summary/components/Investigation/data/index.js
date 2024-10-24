// @mui material components
import { Checkbox } from "@mui/material";
import MDTypography from "components/MDTypography";

export default function InvestigationsData() {
  const columns = [
    { Header: "Group", accessor: "Group", width: "25%", align: "left" },
    { Header: "Investigation", accessor: "Investigation", width: "25%", align: "left" },
    { Header: "Acknowleged Date", accessor: "AcknowlegedDate", width: "25%", align: "left" },
    { Header: "Select", accessor: "Select", width: "25%", align: "left" },
  ];

  const rows = [
    {
      Group: (
        <MDTypography variant="caption" fontWeight="medium">
          Laboratory
        </MDTypography>
      ),
      Investigation: (
        <MDTypography variant="caption" fontWeight="medium">
          Dr John Smith
        </MDTypography>
      ),
      AcknowlegedDate: (
        <MDTypography variant="caption" fontWeight="medium">
          25/10/2024
        </MDTypography>
      ),
      Select: <Checkbox />,
    },
  ];

  return { columns, rows };
}
