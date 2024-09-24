// @mui material components
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "MR No", accessor: "mrNo", width: "15%", align: "left" },
    { Header: "Patient Name", accessor: "fullName", width: "25%", align: "left" },
    { Header: "Visit Date", accessor: "visitDate", width: "20%", align: "center" },
    { Header: "Visit Type", accessor: "visitType", width: "15%", align: "center" },
    { Header: "Add Vitals", accessor: "addVitals", width: "10%", align: "center" },
    { Header: "Cancel Visit", accessor: "cancelVisit", width: "15%", align: "center" },
  ];

  const rows = [
    {
      mrNo: (
        <MDTypography variant="caption" fontWeight="medium">
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
      visitType: (
        <MDTypography variant="caption" fontWeight="medium">
          Follow-up
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
          <button type="submit" className="text-xs">
            ADD VITALS
          </button>
        </MDButton>
      ),
      cancelVisit: (
        <MDButton variant="outlined" color="error" size="small">
          Cancel Visit
        </MDButton>
      ),
    },
    {
      mrNo: (
        <MDTypography variant="caption" fontWeight="medium">
          00002
        </MDTypography>
      ),
      fullName: (
        <MDTypography variant="caption" fontWeight="medium">
          Jane Smith
        </MDTypography>
      ),
      visitDate: (
        <MDTypography variant="caption" fontWeight="medium">
          2024-09-26
        </MDTypography>
      ),
      visitType: (
        <MDTypography variant="caption" fontWeight="medium">
          Emergency
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
          <button type="submit" className="text-xs">
            ADD VITALS
          </button>
        </MDButton>
      ),
      cancelVisit: (
        <MDButton variant="outlined" color="error" size="small">
          Cancel Visit
        </MDButton>
      ),
    },
    {
      mrNo: (
        <MDTypography variant="caption" fontWeight="medium">
          00003
        </MDTypography>
      ),
      fullName: (
        <MDTypography variant="caption" fontWeight="medium">
          Bob Johnson
        </MDTypography>
      ),
      visitDate: (
        <MDTypography variant="caption" fontWeight="medium">
          2024-09-27
        </MDTypography>
      ),
      visitType: (
        <MDTypography variant="caption" fontWeight="medium">
          Check-up
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
          <button type="submit" className="text-xs">
            ADD VITALS
          </button>
        </MDButton>
      ),
      cancelVisit: (
        <MDButton variant="outlined" color="error" size="small">
          Cancel Visit
        </MDButton>
      ),
    },
  ];

  return { columns, rows };
}
