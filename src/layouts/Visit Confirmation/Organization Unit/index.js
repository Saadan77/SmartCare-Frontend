import MDTypography from "components/MDTypography";

export default function organizationUnitData() {
  const columns = [
    { Header: "Organization Unit", accessor: "organizationUnit", width: "100%", align: "left" },
  ];

  const rows = [
    {
      organizationUnit: (
        <MDTypography variant="caption" fontWeight="medium">
          Anesthesis
        </MDTypography>
      ),
    },
    {
      organizationUnit: (
        <MDTypography variant="caption" fontWeight="medium">
          Cardiac Clinic
        </MDTypography>
      ),
    },
    {
      organizationUnit: (
        <MDTypography variant="caption" fontWeight="medium">
          Eye Clinic
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
