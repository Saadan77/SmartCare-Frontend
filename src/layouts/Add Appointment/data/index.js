import MDTypography from "components/MDTypography";
import React, { useContext } from "react";

export default function data() {
  const columns = [
    { Header: "Name", accessor: "Name", width: "15%", align: "left" },
    { Header: "Appoinment Date", accessor: "AppoinmentDate", width: "15%", align: "center" },
    { Header: "Doctor", accessor: "Doctor", width: "15%", align: "center" },
    { Header: "Appointment Time", accessor: "AppointmentTime", width: "15%", align: "center" },
    { Header: "Reason", accessor: "Reason", width: "15%", align: "center" },
    { Header: "Status", accessor: "Status", width: "15%", align: "center" },
    { Header: "Created On", accessor: "CreatedOn", width: "10%", align: "center" },
  ];

  const rows = [
    {
      Name: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      AppoinmentDate: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Doctor: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      AppointmentTime: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Reason: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Status: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      CreatedOn: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}
