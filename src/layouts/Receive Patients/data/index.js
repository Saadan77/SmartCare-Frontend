// @mui material components
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Patient Name", accessor: "patientName", width: "10%", align: "left" },
    { Header: "Mr No.", accessor: "mrNo", width: "10%", align: "left" },
    { Header: "Age", accessor: "age", width: "10%", align: "left" },
    { Header: "Gender", accessor: "gender", width: "10%", align: "left" },
    {
      Header: "Recommended By(Consultant)",
      accessor: "recommendedBy",
      width: "10%",
      align: "left",
    },
    { Header: "Date Time", accessor: "dateTime", width: "10%", align: "left" },
    {
      Header: "Bed",
      accessor: "bed",
      width: "10%",
      align: "left",
    },
    { Header: "Patient Condition", accessor: "patientCondition", width: "20%", align: "left" },
    {
      Header: "Confirm and Print Wristband",
      accessor: "confirmAndPrintWristband",
      width: "10%",
      align: "left",
    },
  ];

  const rows = [
    {
      patientName: (
        <MDTypography variant="caption" fontWeight="medium">
          John Smiht
        </MDTypography>
      ),
      mrNo: (
        <MDTypography variant="caption" fontWeight="medium">
          00001-01-10-2024
        </MDTypography>
      ),
      age: (
        <MDTypography variant="caption" fontWeight="medium">
          8 years 12 months
        </MDTypography>
      ),
      gender: (
        <MDTypography variant="caption" fontWeight="medium">
          Male
        </MDTypography>
      ),
      recommendedBy: (
        <MDTypography variant="caption" fontWeight="medium">
          Dr. John
        </MDTypography>
      ),
      dateTime: (
        <MDTypography variant="caption" fontWeight="medium">
          10th Oct 2024
        </MDTypography>
      ),
      bed: (
        <MDTypography variant="caption" fontWeight="medium">
          Bed 01
        </MDTypography>
      ),
      patientCondition: (
        <MDTypography variant="caption" fontWeight="medium">
          Normal
        </MDTypography>
      ),
      confirmAndPrintWristband: (
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
            Confirm and Print Wristband
          </button>
        </MDButton>
      ),
    },
  ];

  return { columns, rows };
}
