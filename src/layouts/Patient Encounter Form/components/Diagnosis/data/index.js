// @mui material components
import { Icon } from "@mui/material";
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "SCD Code", accessor: "code", width: "25%", align: "left" },
    { Header: "Diagnosis (Description)", accessor: "diagnosis", width: "25%", align: "left" },
    { Header: "Remarks", accessor: "remarks", width: "25%", align: "center" },
    { Header: "Delete", accessor: "delete", width: "25%", align: "center" },
  ];

  const rows = [
    {
      code: (
        <MDTypography variant="caption" fontWeight="medium">
          ABC 01
        </MDTypography>
      ),
      diagnosis: (
        <MDTypography variant="caption" fontWeight="medium">
          Fever with pain
        </MDTypography>
      ),
      remarks: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      delete: <Icon style={{ background: "#1694c4", color: "white" }}>close</Icon>,
    },
  ];

  return { columns, rows };
}
