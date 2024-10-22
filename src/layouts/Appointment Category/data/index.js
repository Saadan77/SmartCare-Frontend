import MDTypography from "components/MDTypography";
import React, { useContext } from "react";

export default function data() {
  const columns = [
    {
      Header: "Appointment Category",
      accessor: "AppointmentCategory",
      width: "33%",
      align: "left",
    },
    { Header: "Description", accessor: "Description", width: "34%", align: "center" },
    { Header: "Created On", accessor: "CreatedOn", width: "33%", align: "center" },
  ];

  const rows = [
    {
      AppointmentCategory: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Description: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      CreatedOn: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}
