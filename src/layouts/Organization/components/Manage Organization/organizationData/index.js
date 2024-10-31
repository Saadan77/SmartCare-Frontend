/* eslint-disable prettier/prettier */
import MDTypography from "components/MDTypography"; // Assuming MDTypography is a custom typography component
import React from "react";

export default function organizationData() {
  const OColumns = [
    { Header: "Organization Unit", accessor: "organizationUnit", width: "50%", align: "left" },
    { Header: "Expand", accessor: "expand", width: "50%", align: "center" },
  ];

  const ORows = [
    {
      organizationUnit: <MDTypography variant="caption" fontWeight="medium">Lahore Hospital</MDTypography>,
      expand: (
        <button className="bg-blue-500 text-white rounded px-2 py-1">Expand</button>
      ),
    },
    {
      organizationUnit: <MDTypography variant="caption" fontWeight="medium">IAC</MDTypography>,
      expand: (
        <button className="bg-blue-500 text-white rounded px-2 py-1">Expand</button>
      ),
    },
  ];

  return { OColumns, ORows };
}
