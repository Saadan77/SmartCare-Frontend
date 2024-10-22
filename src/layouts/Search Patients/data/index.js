import MDTypography from "components/MDTypography";
import { Icon } from "@mui/material";
import MDButton from "components/MDButton";
import { PatientContext } from "context/Patient Context";
import React, { useContext } from "react";

export default function data() {
  const { patients } = useContext(PatientContext);

  const columns = [
    { Header: "Patient ID", accessor: "patientId", width: "10%", align: "left" },
    { Header: "Name", accessor: "patientName", width: "20%", align: "left" },
    { Header: "Gender", accessor: "gender", width: "10%", align: "center" },
    { Header: "Phone Number", accessor: "phoneNo", width: "20%", align: "center" },
    { Header: "CNIC No", accessor: "cnic", width: "10%", align: "center" },
    { Header: "Appointment", accessor: "appointment", width: "20%", align: "center" },
    { Header: "Visit", accessor: "visit", width: "10%", align: "center" },
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
    gender: (
      <MDTypography variant="caption" fontWeight="medium">
        {patient["Gender"]}
      </MDTypography>
    ),
    phoneNo: (
      <MDTypography variant="caption" fontWeight="medium">
        {patient["Mobile"]}
      </MDTypography>
    ),
    cnic: (
      <MDTypography variant="caption" fontWeight="medium">
        {`${patient["CNIC No"]}`}
      </MDTypography>
    ),
    appointment: (
      <MDTypography variant="caption" fontWeight="medium">
        <MDButton
          variant="gradient"
          style={{
            borderRadius: 0,
            minHeight: 0,
            backgroundColor: "#1694c4",
            color: "White",
          }}
        >
          <button type="submit" className="text-xs flex items-center">
            <Icon fontSize="small" className="mr-2">
              check_circle
            </Icon>{" "}
            Appointment
          </button>
        </MDButton>
      </MDTypography>
    ),
    visit: (
      <MDTypography variant="caption" fontWeight="medium">
        <MDButton
          variant="gradient"
          style={{
            borderRadius: 0,
            minHeight: 0,
            backgroundColor: "#1694c4",
            color: "White",
          }}
        >
          <button type="submit" className="text-xs flex items-center">
            <Icon fontSize="small" className="mr-2">
              add_circle
            </Icon>{" "}
            Visit
          </button>
        </MDButton>
      </MDTypography>
    ),
  }));

  return { columns, rows };
}
