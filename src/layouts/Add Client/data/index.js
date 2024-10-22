import MDTypography from "components/MDTypography";
import React, { useContext } from "react";

export default function data() {
  //   const { patients } = useContext(PatientContext);

  const columns = [
    { Header: "Name", accessor: "Name", width: "15%", align: "left" },
    { Header: "Theme", accessor: "Theme", width: "10%", align: "center" },
    { Header: "Admin User", accessor: "AdminUser", width: "15%", align: "center" },
    { Header: "Admin Password", accessor: "AdminPassword", width: "15%", align: "center" },
    { Header: "DBUser", accessor: "DBUser", width: "15%", align: "center" },
    { Header: "DBPassword", accessor: "DBPassword", width: "10%", align: "center" },
    { Header: "Edit/Update", accessor: "EditUpdate", width: "10%", align: "center" },
    { Header: "View", accessor: "View", width: "10%", align: "center" },
  ];

  const rows = [
    {
      Name: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Theme: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      AdminUser: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      AdminPassword: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      DBUser: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      DBPassword: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      EditUpdate: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      View: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}
