import React, { useContext } from "react";

import { StandardOrganizationsContext } from "context/Organizations/Manage Standard Organization/manageStandardOrganizationContext";

import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

export default function data() {
  const { StandardOrganizations } = useContext(StandardOrganizationsContext);

  const columns = [
    {
      Header: "Standard Organization",
      accessor: "StandardOrganization",
      width: "15%",
      align: "left",
    },
    { Header: "Description", accessor: "Description", width: "15%", align: "center" },
    { Header: "Created Date", accessor: "CreatedDate", width: "15%", align: "center" },
    { Header: "Edit", accessor: "Edit", width: "15%", align: "center" },
  ];

  const rows = StandardOrganizations.map((StandardOrganization) => ({
    StandardOrganization: (
      <MDTypography variant="caption" fontWeight="medium">
        {StandardOrganization["Name"]}
      </MDTypography>
    ),
    Description: (
      <MDTypography variant="caption" fontWeight="medium">
        {StandardOrganization["Description"]}
      </MDTypography>
    ),
    CreatedDate: (
      <MDTypography variant="caption" fontWeight="medium">
        {StandardOrganization["CreatedDate"]}
      </MDTypography>
    ),
    Edit: (
      <MDButton
        variant="gradient"
        fontWeight="medium"
        style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}
      >
        Edit
      </MDButton>
    ),
  }));

  return { columns, rows };
}
