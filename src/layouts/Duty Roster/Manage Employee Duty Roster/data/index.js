// @mui material components
import MDTypography from "components/MDTypography";

export default function employeeData() {
  const columns = [
    { Header: "Employee", accessor: "employee", width: "10%", align: "left" },
    { Header: "Service No.", accessor: "serviceNo", width: "10%", align: "left" },
    { Header: "Appointmemt", accessor: "appointment", width: "10%", align: "left" },
    {
      Header: "Duty Organization Unit",
      accessor: "dutyOrganizationUnit",
      width: "10%",
      align: "left",
    },
    { Header: "Duty Supervisor", accessor: "dutySupervisor", width: "10%", align: "left" },
    { Header: "Shift Type", accessor: "shiftType", width: "10%", align: "left" },
    { Header: "Shift Name", accessor: "shiftName", width: "10%", align: "left" },
    { Header: "Shift Duration (Minutes)", accessor: "shiftDuration", width: "10%", align: "left" },
    { Header: "Day", accessor: "day", width: "10%", align: "left" },
    { Header: "Date", accessor: "date", width: "10%", align: "left" },
  ];

  const rows = [
    {
      employee: (
        <MDTypography variant="caption" fontWeight="medium">
          Morning
        </MDTypography>
      ),
      serviceNo: (
        <MDTypography variant="caption" fontWeight="medium">
          On Call
        </MDTypography>
      ),
      appointment: (
        <MDTypography variant="caption" fontWeight="medium">
          05:30 PM
        </MDTypography>
      ),
      dutyOrganizationUnit: (
        <MDTypography variant="caption" fontWeight="medium">
          08:30 AM
        </MDTypography>
      ),
      dutySupervisor: (
        <MDTypography variant="caption" fontWeight="medium">
          Monday, Wednesday, Friday, Saturday, Sunday
        </MDTypography>
      ),
      shiftType: (
        <MDTypography variant="caption" fontWeight="medium">
          Staff Morning
        </MDTypography>
      ),
      shiftName: (
        <MDTypography variant="caption" fontWeight="medium">
          Morning
        </MDTypography>
      ),
      shiftDuration: (
        <MDTypography variant="caption" fontWeight="medium">
          420
        </MDTypography>
      ),
      day: (
        <MDTypography variant="caption" fontWeight="medium">
          Monday
        </MDTypography>
      ),
      date: (
        <MDTypography variant="caption" fontWeight="medium">
          01/10/2024
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
