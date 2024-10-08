import MDTypography from "components/MDTypography";
import { Icon } from "@mui/material";
import { usePatientContext } from "services/Patient";
import MDButton from "components/MDButton";

export default function data() {
  const { patients, setPatients } = usePatientContext();

  const columns = [
    { Header: "MR No.", accessor: "mrNo", width: "10%", align: "left" },
    { Header: "Patient Name", accessor: "patientName", width: "20%", align: "left" },
    { Header: "Gender", accessor: "gender", width: "10%", align: "center" },
    { Header: "Phone Number", accessor: "phoneNo", width: "20%", align: "center" },
    { Header: "National ID Number/SSN", accessor: "cnic", width: "10%", align: "center" },
    { Header: "Appointment", accessor: "appointment", width: "20%", align: "center" },
    { Header: "Visit", accessor: "visit", width: "10%", align: "center" },
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
    gender: (
      <MDTypography variant="caption" fontWeight="medium">
        {patient.gender}
      </MDTypography>
    ),
    phoneNo: (
      <MDTypography variant="caption" fontWeight="medium">
        {patient.phoneNo}
      </MDTypography>
    ),
    cnic: (
      <MDTypography variant="caption" fontWeight="medium">
        {patient.nationalIdNo}
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
