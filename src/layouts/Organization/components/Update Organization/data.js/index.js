/* eslint-disable prettier/prettier */
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import React from "react";

export default function data() {
  const columns = [
    { Header: "Organization Unit", accessor: "organizationUnit", width: "20%", align: "left" },
    { Header: "Organization Type", accessor: "organizationType", width: "15%", align: "center" },
    { Header: "Organization Nature", accessor: "organizationNature", width: "15%", align: "center" },
  ];

  const rows = [
    {
      organizationUnit: (
        <MDTypography variant="caption" fontWeight="medium"></MDTypography>
      ),
      organizationType: (
        <MDTypography variant="caption" fontWeight="medium"></MDTypography>
      ),
      organizationNature: (
        <MDTypography variant="caption" fontWeight="medium"></MDTypography>
      ),
    },
    // Additional rows can be added as necessary
  ];

  return { columns, rows };
}
