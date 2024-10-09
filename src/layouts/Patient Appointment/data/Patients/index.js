import MDTypography from "components/MDTypography";
import { usePatientContext } from "services/Patient";

export default function patientsData() {
  const { patients, setPatients } = usePatientContext();

  const columns = [
    { Header: "MR No.", accessor: "mrNo", width: "20%", align: "left" },
    { Header: "Patient Name", accessor: "patientName", width: "20%", align: "left" },
    { Header: "dependantOn", accessor: "dependantOn", width: "20%", align: "center" },
    { Header: "Gender", accessor: "gender", width: "20%", align: "center" },
    { Header: "age", accessor: "age", width: "20%", align: "center" },
  ];

  const rows = patients.map((patient) => ({
    mrNo: (
      <MDTypography variant="caption" fontWeight="medium">
        {patient.patientId}
      </MDTypography>
    ),
    patientName: (
      <MDTypography variant="caption" fontWeight="medium">
        {patient.fullName}
      </MDTypography>
    ),
    dependantOn: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    gender: (
      <MDTypography variant="caption" fontWeight="medium">
        {patient.gender}
      </MDTypography>
    ),
    age: (
      <MDTypography variant="caption" fontWeight="medium">
        {patient.age}
      </MDTypography>
    ),
  }));

  return { columns, rows };
}
