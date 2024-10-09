import MDTypography from "components/MDTypography";

export default function scheduledAppointmentsData() {
  const columns = [
    { Header: "MR No.", accessor: "mrNo", width: "20%", align: "left" },
    { Header: "Patient Name", accessor: "patientName", width: "20%", align: "left" },
    { Header: "Appointment No.", accessor: "appointmentNo", width: "20%", align: "center" },
    {
      Header: "Appointment In Organization Unit",
      accessor: "AppointmentInOrganizationUnit",
      width: "20%",
      align: "center",
    },
    { Header: "Appointment Date", accessor: "AppointmentDate", width: "20%", align: "center" },
    { Header: "Appointment Type", accessor: "AppointmentType", width: "20%", align: "center" },
    { Header: "Appointment Time", accessor: "AppointmentTime", width: "20%", align: "center" },
    { Header: "Assigned By", accessor: "assignedBy", width: "20%", align: "center" },
    { Header: "Assigned On", accessor: "assignedOn", width: "20%", align: "center" },
  ];

  const rows = [
    {
      mrNo: (
        <MDTypography variant="caption" fontWeight="medium">
          00001-09-10-2024
        </MDTypography>
      ),
      patientName: (
        <MDTypography variant="caption" fontWeight="medium">
          Patient
        </MDTypography>
      ),
      appointmentNo: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      AppointmentInOrganizationUnit: (
        <MDTypography variant="caption" fontWeight="medium">
          Medical
        </MDTypography>
      ),
      AppointmentDate: (
        <MDTypography variant="caption" fontWeight="medium">
          11 Oct 2024
        </MDTypography>
      ),
      AppointmentType: (
        <MDTypography variant="caption" fontWeight="medium">
          First Visit
        </MDTypography>
      ),
      AppointmentTime: (
        <MDTypography variant="caption" fontWeight="medium">
          11:39 PM
        </MDTypography>
      ),
      assignedBy: (
        <MDTypography variant="caption" fontWeight="medium">
          Dr. John Smith
        </MDTypography>
      ),
      assignedOn: (
        <MDTypography variant="caption" fontWeight="medium">
          10 Oct 2024
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
