// @mui material components
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

export default function confirmedPatientsData() {
  const columns = [
    { Header: "Mr No.", accessor: "mrNo", width: "10%", align: "left" },
    { Header: "Patient Name", accessor: "patientName", width: "10%", align: "left" },
    { Header: "Relation", accessor: "relation", width: "10%", align: "left" },
    { Header: "Organization Unit", accessor: "organizationUnit", width: "10%", align: "left" },
    {
      Header: "Doctor",
      accessor: "doctor",
      width: "10%",
      align: "left",
    },
    { Header: "Visit Type", accessor: "visitType", width: "10%", align: "left" },
    {
      Header: "Bed",
      accessor: "bed",
      width: "10%",
      align: "left",
    },
    { Header: "Speciality", accessor: "speciality", width: "20%", align: "left" },
    {
      Header: "Confirm Visit",
      accessor: "confirmVisit",
      width: "10%",
      align: "left",
    },
  ];

  const rows = [
    {
      mrNo: (
        <MDTypography variant="caption" fontWeight="medium">
          00001-01-10-2024
        </MDTypography>
      ),
      patientName: (
        <MDTypography variant="caption" fontWeight="medium">
          John Smith
        </MDTypography>
      ),

      relation: (
        <MDTypography variant="caption" fontWeight="medium">
          Daughter
        </MDTypography>
      ),
      organizationUnit: (
        <MDTypography variant="caption" fontWeight="medium">
          Male
        </MDTypography>
      ),
      doctor: (
        <MDTypography variant="caption" fontWeight="medium">
          Dr. John
        </MDTypography>
      ),
      visitType: (
        <MDTypography variant="caption" fontWeight="medium">
          Patient Admission
        </MDTypography>
      ),
      bed: (
        <MDTypography variant="caption" fontWeight="medium">
          Bed 01
        </MDTypography>
      ),
      speciality: (
        <MDTypography variant="caption" fontWeight="medium">
          Medical
        </MDTypography>
      ),
      confirmVisit: (
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
            Delete
          </button>
        </MDButton>
      ),
    },
  ];

  return { columns, rows };
}
