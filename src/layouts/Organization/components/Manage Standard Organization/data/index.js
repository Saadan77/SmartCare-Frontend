/* eslint-disable prettier/prettier */
import MDTypography from "components/MDTypography";
import React, { useContext } from "react";

export default function data() {
  //   const { patients } = useContext(PatientContext);

  const columns = [
    { Header: "Standard Organization", accessor: "StandardOrganization", width: "15%", align: "left" },
    {Header: "Description", accessor: "Description", width: "15%", align: "center"},
    {Header: "Created Date", accessor: "CreatedDate", width: "15%", align: "center"},
    {Header: "Edit", accessor: "Edit", width: "15%", align: "center"},
  ];

  const rows = [
    {
      StandardOrganization: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Description: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      CreatedDate: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Edit: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}
