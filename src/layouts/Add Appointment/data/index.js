import MDTypography from "components/MDTypography";
import { AppointmentsContext } from "context/Appointment/appointmentContext";
import React, { useContext } from "react";

export default function data() {
  const { appointments } = useContext(AppointmentsContext);

  const columns = [
    { Header: "Name", accessor: "Name", width: "15%", align: "left" },
    { Header: "Appoinment Date", accessor: "AppoinmentDate", width: "15%", align: "center" },
    { Header: "Doctor", accessor: "Doctor", width: "15%", align: "left" },
    { Header: "Appointment Time", accessor: "AppointmentTime", width: "15%", align: "center" },
    { Header: "Reason", accessor: "Reason", width: "25%", align: "left" },
    { Header: "Status", accessor: "Status", width: "15%", align: "center" },
  ];

  const rows = appointments.map((appointment) => ({
    Name: (
      <MDTypography variant="caption" fontWeight="medium">
        {appointment["family_member_name"] || "Unknown"}
      </MDTypography>
    ),
    AppoinmentDate: (
      <MDTypography variant="caption" fontWeight="medium">
        {new Date(appointment["appointment_date"]).toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </MDTypography>
    ),
    Doctor: (
      <MDTypography variant="caption" fontWeight="medium">
        {appointment["doctor_name"] || "Unknown"}
      </MDTypography>
    ),
    AppointmentTime: (
      <MDTypography variant="caption" fontWeight="medium">
        {appointment["appointment_time"] || "N/A"}
      </MDTypography>
    ),
    Reason: (
      <MDTypography variant="caption" fontWeight="medium">
        {appointment["reason"] || "N/A"}
      </MDTypography>
    ),
    Status: (
      <MDTypography variant="caption" fontWeight="medium">
        {appointment["status"] || "N/A"}
      </MDTypography>
    ),
  }));

  return { columns, rows };
}
