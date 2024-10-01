// @mui material components
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Organization Unit", accessor: "organizationUnit", width: "34%", align: "left" },
    { Header: "Organization Type", accessor: "organizationType", width: "33%", align: "left" },
    { Header: "organization Nature", accessor: "organizationNature", width: "33%", align: "left" },
  ];

  const rows = [
    {
      organizationUnit: (
        <MDTypography variant="caption" fontWeight="medium">
          <p className="text-sky-600">Billing</p>
        </MDTypography>
      ),
      organizationType: (
        <MDTypography variant="caption" fontWeight="medium">
          Department
        </MDTypography>
      ),
      organizationNature: (
        <MDTypography variant="caption" fontWeight="medium">
          Medical
        </MDTypography>
      ),
    },
    {
      organizationUnit: (
        <MDTypography variant="caption" fontWeight="medium">
          <p className="text-sky-600">Cardiology</p>
        </MDTypography>
      ),
      organizationType: (
        <MDTypography variant="caption" fontWeight="medium">
          Department
        </MDTypography>
      ),
      organizationNature: (
        <MDTypography variant="caption" fontWeight="medium">
          Cardiology
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
