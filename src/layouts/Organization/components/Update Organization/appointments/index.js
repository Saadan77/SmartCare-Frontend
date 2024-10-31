/* eslint-disable prettier/prettier */
import MDTypography from "components/MDTypography"; // Assuming MDTypography is a custom typography component
import React from "react";

export default function organizationData() {
  const AColumns = [
    { Header: "Appointment", accessor: "appointment", width: "70%", align: "left" },
    { Header: "Expand", accessor: "expand", width: "30%", align: "center" },
  ];

  const ARows = [
    {
      appointment: <MDTypography variant="caption" fontWeight="medium">Admin</MDTypography>,
      expand: (
        <button className="bg-blue-500 text-white rounded px-2 py-1">Expand</button>
      ),
    },
    {
      appointment: <MDTypography variant="caption" fontWeight="medium">Administrator</MDTypography>,
      expand: (
        <button className="bg-blue-500 text-white rounded px-2 py-1">Expand</button>
      ),
    },
  ];

  return { AColumns, ARows };
}