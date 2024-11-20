import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

import { StandardOrganizationsContext } from "context/Organizations/Manage Standard Organization/manageStandardOrganizationContext";

import React, { useContext } from "react";

export default function organizationData() {
  const { StandardOrganizations } = useContext(StandardOrganizationsContext);

  const OColumns = [
    { Header: "Organization Unit", accessor: "organizationUnit", width: "50%", align: "left" },
    { Header: "Expand", accessor: "expand", width: "50%", align: "center" },
  ];

  const ORows = StandardOrganizations.map((StandardOrganization) => ({
    organizationUnit: (
      <MDTypography variant="caption" fontWeight="medium">
        {StandardOrganization["Name"]}
      </MDTypography>
    ),
    expand: (
      <MDButton
        variant="gradient"
        fontWeight="medium"
        style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}
      >
        Expand
      </MDButton>
    ),
  }));

  return { OColumns, ORows };
}
