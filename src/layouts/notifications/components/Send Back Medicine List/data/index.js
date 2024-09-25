// @mui material components
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Treatment No", accessor: "treatmentNo", width: "15%", align: "left" },
    { Header: "Patient Name", accessor: "fullName", width: "25%", align: "left" },
    { Header: "Medicine", accessor: "medicine", width: "20%", align: "center" },
    { Header: "Reason for Return", accessor: "returnReason", width: "20%", align: "center" },
    { Header: "Sent By", accessor: "sentBy", width: "10%", align: "center" },
    { Header: "Date Returned", accessor: "dateReturned", width: "10%", align: "center" },
  ];

  const rows = [
    {
      treatmentNo: (
        <MDTypography
          variant="caption"
          fontWeight="medium"
          sx={{ cursor: "pointer", color: "#1694c4" }}
        >
          TR0001
        </MDTypography>
      ),
      fullName: (
        <MDTypography variant="caption" fontWeight="medium">
          John Doe
        </MDTypography>
      ),
      medicine: (
        <MDTypography variant="caption" fontWeight="medium">
          Paracetamol 500mg
        </MDTypography>
      ),
      returnReason: (
        <MDTypography variant="caption" fontWeight="medium">
          Wrong Dosage
        </MDTypography>
      ),
      sentBy: (
        <MDTypography variant="caption" fontWeight="medium">
          Nurse
        </MDTypography>
      ),
      dateReturned: (
        <MDTypography variant="caption" fontWeight="medium">
          2024-09-20
        </MDTypography>
      ),
    },
    {
      treatmentNo: (
        <MDTypography
          variant="caption"
          fontWeight="medium"
          sx={{ cursor: "pointer", color: "#1694c4" }}
        >
          TR0002
        </MDTypography>
      ),
      fullName: (
        <MDTypography variant="caption" fontWeight="medium">
          Jane Smith
        </MDTypography>
      ),
      medicine: (
        <MDTypography variant="caption" fontWeight="medium">
          Ibuprofen 200mg
        </MDTypography>
      ),
      returnReason: (
        <MDTypography variant="caption" fontWeight="medium">
          Expired
        </MDTypography>
      ),
      sentBy: (
        <MDTypography variant="caption" fontWeight="medium">
          Pharmacist
        </MDTypography>
      ),
      dateReturned: (
        <MDTypography variant="caption" fontWeight="medium">
          2024-09-21
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
