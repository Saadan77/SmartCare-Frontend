// @mui material components
import MDTypography from "components/MDTypography";
import { Icon } from "@mui/material";

export default function procedureData() {
  const columns = [
    { Header: "Procedure", accessor: "procedure", width: "25%", align: "left" },
    { Header: "Procedure Status", accessor: "procedureStatus", width: "25%", align: "left" },
    { Header: "Order By", accessor: "orderBy", width: "25%", align: "left" },
    { Header: "Delete", accessor: "reschedule", width: "25%", align: "left" },
  ];

  const rows = [
    {
      procedure: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      procedureStatus: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      orderBy: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      delete: <Icon style={{ background: "#1694c4", color: "white" }}>close</Icon>,
    },
  ];

  return { columns, rows };
}
