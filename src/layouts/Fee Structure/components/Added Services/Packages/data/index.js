import MDTypography from "components/MDTypography";
import React, { useContext } from "react";
import { Icon } from "@mui/material";

export default function addedServicesPackagesData() {
  //   const { patients } = useContext(PatientContext);

  const columns = [
    { Header: "Service/Package", accessor: "ServicePackage", width: "15%", align: "left" },
    { Header: "Organization Unit", accessor: "OrganizationUnit", width: "10%", align: "center" },
    { Header: "Panel Organization", accessor: "PanelOrganization", width: "15%", align: "center" },
    { Header: "Doctor", accessor: "Doctor", width: "15%", align: "center" },
    { Header: "Rate", accessor: "Rate", width: "15%", align: "center" },
    { Header: "Urgent Rate", accessor: "UrgentRate", width: "10%", align: "center" },
    { Header: "Doctor Share", accessor: "DoctorShare", width: "10%", align: "center" },
    { Header: "Delete", accessor: "Delete", width: "10%", align: "center" },
  ];

  const rows = [
    {
      ServicePackage: (
        <MDTypography variant="caption" fontWeight="medium">
          CBC Fee
        </MDTypography>
      ),
      OrganizationUnit: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      PanelOrganization: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Doctor: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Rate: (
        <MDTypography variant="caption" fontWeight="medium">
          500
        </MDTypography>
      ),
      UrgentRate: (
        <MDTypography variant="caption" fontWeight="medium">
          500
        </MDTypography>
      ),
      DoctorShare: (
        <MDTypography variant="caption" fontWeight="medium">
          0.0
        </MDTypography>
      ),
      Delete: (
        <Icon fontSize="small" className="mr-2">
          clear
        </Icon>
      ),
    },
  ];

  return { columns, rows };
}
