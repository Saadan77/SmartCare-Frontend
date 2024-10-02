import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Mr No.", accessor: "mrNo", width: "10%", align: "left" },
    { Header: "Patient Name", accessor: "patientName", width: "10%", align: "left" },
    { Header: "Gender", accessor: "gender", width: "10%", align: "left" },
    { Header: "DOB", accessor: "dob", width: "10%", align: "left" },
    { Header: "Admission No.", accessor: "admissionNo", width: "10%", align: "left" },
    { Header: "Mobile No.", accessor: "mobileNo", width: "10%", align: "left" },
    { Header: "Package", accessor: "package", width: "10%", align: "left" },
    { Header: "Admission Date", accessor: "admissionDate", width: "10%", align: "left" },
    { Header: "Discharge Date", accessor: "dischargeDate", width: "10%", align: "left" },
    { Header: "Discharge Type", accessor: "dischargeType", width: "10%", align: "left" },
  ];

  const rows = [
    {
      mrNo: (
        <MDTypography variant="caption" fontWeight="medium">
          00001-02-10-2024
        </MDTypography>
      ),
      patientName: (
        <MDTypography variant="caption" fontWeight="medium">
          John Smith
        </MDTypography>
      ),
      gender: (
        <MDTypography variant="caption" fontWeight="medium">
          Male
        </MDTypography>
      ),
      dob: (
        <MDTypography variant="caption" fontWeight="medium">
          09/12/2001
        </MDTypography>
      ),
      admissionNo: (
        <MDTypography variant="caption" fontWeight="medium">
          00001-02-10-2024
        </MDTypography>
      ),
      mobileNo: (
        <MDTypography variant="caption" fontWeight="medium">
          0321-3101228
        </MDTypography>
      ),
      package: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      admissionDate: (
        <MDTypography variant="caption" fontWeight="medium">
          02/10/2024
        </MDTypography>
      ),
      dischargeDate: (
        <MDTypography variant="caption" fontWeight="medium">
          03/10/2024
        </MDTypography>
      ),
      dischargeType: (
        <MDTypography variant="caption" fontWeight="medium">
          Discharged
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
