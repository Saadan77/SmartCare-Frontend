/* eslint-disable prettier/prettier */
// @mui material components
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Employee Name", accessor: "employeeName", width: "25%", align: "left" },
    { Header: "CNIC", accessor: "cnic", width: "15%", align: "left" },
    { Header: "Gender", accessor: "gender", width: "10%", align: "left" },
    { Header: "Date of Birth", accessor: "dob", width: "10%", align: "left" },
    { Header: "Login", accessor: "login", width: "25%", align: "left" },
    { Header: "Appointment", accessor: "appointment", width: "15%", align: "left" },
    { Header: "Create/Edit User", accessor: "createEditUser", width: "10%", align: "left" },
    { Header: "Roles/Rights", accessor: "rolesRights", width: "10%", align: "left" },
    { Header: "Update", accessor: "update", width: "10%", align: "left" },
  ];

  const rows = [
    {
      employeeName: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      cnic: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      gender: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      dob: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      login: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      appointment: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      createEditUser: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      rolesRights: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      update: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}