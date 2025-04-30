import MDTypography from "components/MDTypography";
import { AppointmentsContext } from "context/Appointment/appointmentContext";
import React, { useContext } from "react";

export default function data() {
  const { appointments } = useContext(AppointmentsContext);

  const columns = [
    { Header: "Name", accessor: "Name", width: "15%", align: "left" },
    { Header: "Appoinment Date", accessor: "AppoinmentDate", width: "15%", align: "center" },
    { Header: "Doctor", accessor: "Doctor", width: "15%", align: "center" },
    { Header: "Appointment Time", accessor: "AppointmentTime", width: "15%", align: "center" },
    { Header: "Reason", accessor: "Reason", width: "15%", align: "center" },
    { Header: "Status", accessor: "Status", width: "15%", align: "center" },
    { Header: "Updated On", accessor: "UpdatedOn", width: "10%", align: "center" },
  ];

  const rows = appointments.map((appointment) => ({
    Name: (
      <MDTypography variant="caption" fontWeight="medium">
        {appointment["family_member_id"]}
      </MDTypography>
    ),
    AppoinmentDate: (
      <MDTypography variant="caption" fontWeight="medium">
        {appointment["appointment_date"]}
      </MDTypography>
    ),
    Doctor: (
      <MDTypography variant="caption" fontWeight="medium">
        {appointment["doctor_id"]}
      </MDTypography>
    ),
    AppointmentTime: (
      <MDTypography variant="caption" fontWeight="medium">
        {appointment["appointment_time"]}
      </MDTypography>
    ),
    Reason: (
      <MDTypography variant="caption" fontWeight="medium">
        {appointment["reason"]}
      </MDTypography>
    ),
    Status: (
      <MDTypography variant="caption" fontWeight="medium">
        {appointment["status"]}
      </MDTypography>
    ),
    UpdatedOn: (
      <MDTypography variant="caption" fontWeight="medium">
        {appointment["updated_at"]}
      </MDTypography>
    ),
  }));

  return { columns, rows };
}
