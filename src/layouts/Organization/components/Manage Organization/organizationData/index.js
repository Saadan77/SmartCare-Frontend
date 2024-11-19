import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

import React from "react";

export default function organizationData() {
  const OColumns = [
    { Header: "Organization Unit", accessor: "organizationUnit", width: "50%", align: "left" },
    { Header: "Expand", accessor: "expand", width: "50%", align: "center" },
  ];

  const ORows = [
    {
      organizationUnit: (
        <MDTypography variant="caption" fontWeight="medium">
          IAC
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
    },
  ];

  return { OColumns, ORows };
}
