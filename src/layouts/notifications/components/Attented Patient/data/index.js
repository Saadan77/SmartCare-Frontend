// @mui material components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "MR No", accessor: "mrNo", width: "15%", align: "left" },
    { Header: "Patient Name", accessor: "fullName", width: "25%", align: "left" },
    { Header: "Visit Date", accessor: "visitDate", width: "20%", align: "center" },
    { Header: "Patient Chart", accessor: "patientChart", width: "15%", align: "center" },
    { Header: "Reference Letters", accessor: "referenceLetters", width: "15%", align: "center" },
    { Header: "Actions", accessor: "actions", width: "10%", align: "center" },
  ];

  const rows = [
    {
      mrNo: (
        <MDTypography
          variant="caption"
          fontWeight="medium"
          onClick={() => handleViewPatientChart("00001")}
          sx={{ cursor: "pointer", color: "#1694c4" }}
        >
          00001
        </MDTypography>
      ),
      fullName: (
        <MDTypography variant="caption" fontWeight="medium">
          John Doe
        </MDTypography>
      ),
      visitDate: (
        <MDTypography variant="caption" fontWeight="medium">
          2024-09-25
        </MDTypography>
      ),
      patientChart: (
        <MDButton
          variant="gradient"
          style={{
            borderRadius: 0,
            minHeight: 0,
            backgroundColor: "#1694c4",
            color: "White",
          }}
        >
          <span className="text-xs">View Chart</span>
        </MDButton>
      ),
      referenceLetters: (
        <MDButton
          variant="gradient"
          style={{
            borderRadius: 0,
            minHeight: 0,
            backgroundColor: "#1694c4",
            color: "White",
          }}
        >
          <span className="text-xs">Print Letters</span>
        </MDButton>
      ),
      actions: (
        <MDBox display="flex" justifyContent="space-between" alignItems="center">
          <MDButton variant="outlined" color="info" size="small">
            External Report
          </MDButton>
          <MDButton variant="outlined" color="info" size="small">
            Medication Report
          </MDButton>
          <MDButton variant="outlined" color="info" size="small">
            Injury Report
          </MDButton>
          <MDButton variant="outlined" color="info" size="small">
            Physiotherapy Report
          </MDButton>
        </MDBox>
      ),
    },
  ];

  return { columns, rows };
}
