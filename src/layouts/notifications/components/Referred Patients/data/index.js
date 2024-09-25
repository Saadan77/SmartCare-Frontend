// @mui material components
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "MR No", accessor: "mrNo", width: "15%", align: "left" },
    { Header: "Patient Name", accessor: "fullName", width: "25%", align: "left" },
    { Header: "Referral Date", accessor: "referralDate", width: "20%", align: "center" },
    { Header: "Referral Reason", accessor: "referralReason", width: "20%", align: "center" },
    { Header: "Add Vitals", accessor: "addVitals", width: "10%", align: "center" },
    { Header: "Actions", accessor: "actions", width: "10%", align: "center" },
  ];

  const rows = [
    {
      mrNo: (
        <MDTypography
          variant="caption"
          fontWeight="medium"
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
      referralDate: (
        <MDTypography variant="caption" fontWeight="medium">
          2024-09-25
        </MDTypography>
      ),
      referralReason: (
        <MDTypography variant="caption" fontWeight="medium">
          Chest Pain
        </MDTypography>
      ),
      addVitals: (
        <MDButton
          variant="gradient"
          style={{
            borderRadius: 0,
            minHeight: 0,
            backgroundColor: "#1694c4",
            color: "White",
          }}
        >
          <span className="text-xs">ADD VITALS</span>
        </MDButton>
      ),
      actions: (
        <MDButton variant="outlined" color="error" size="small">
          Cancel Referral
        </MDButton>
      ),
    },
    {
      mrNo: (
        <MDTypography
          variant="caption"
          fontWeight="medium"
          onClick={() => handleAttendPatient("00002")}
          sx={{ cursor: "pointer", color: "#1694c4" }}
        >
          00002
        </MDTypography>
      ),
      fullName: (
        <MDTypography variant="caption" fontWeight="medium">
          Jane Smith
        </MDTypography>
      ),
      referralDate: (
        <MDTypography variant="caption" fontWeight="medium">
          2024-09-26
        </MDTypography>
      ),
      referralReason: (
        <MDTypography variant="caption" fontWeight="medium">
          High Fever
        </MDTypography>
      ),
      addVitals: (
        <MDButton
          variant="gradient"
          style={{
            borderRadius: 0,
            minHeight: 0,
            backgroundColor: "#1694c4",
            color: "White",
          }}
        >
          <span className="text-xs">ADD VITALS</span>
        </MDButton>
      ),
      actions: (
        <MDButton variant="outlined" color="error" size="small">
          Cancel Referral
        </MDButton>
      ),
    },
  ];

  return { columns, rows };
}
