import React, { useContext } from "react";

import MDTypography from "components/MDTypography";
import { PatientContext } from "context/Patient Context";

export default function patientsData() {
  const { patients } = useContext(PatientContext);

  const columns = [
    { Header: "Patient ID", accessor: "patientId", width: "10%", align: "left" },
    { Header: "Patient Name", accessor: "patientName", width: "20%", align: "left" },
    { Header: "dependantOn", accessor: "dependantOn", width: "20%", align: "center" },
    { Header: "Gender", accessor: "gender", width: "20%", align: "center" },
    { Header: "age", accessor: "age", width: "20%", align: "center" },
  ];

  const rows = patients.map((patient) => ({
    patientId: (
      <MDTypography variant="caption" fontWeight="medium">
        {patient["Patient Id"]}
      </MDTypography>
    ),
    patientName: (
      <MDTypography variant="caption" fontWeight="medium">
        {`${patient["First Name"]} ${patient["Middle Name"]} ${patient["Last Name"]}`}
      </MDTypography>
    ),
    dependantOn: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    gender: (
      <MDTypography variant="caption" fontWeight="medium">
        {patient["Gender"]}
      </MDTypography>
    ),
    age: (
      <MDTypography variant="caption" fontWeight="medium">
        {patient["Age"]}
      </MDTypography>
    ),
  }));

  return { columns, rows };
}
