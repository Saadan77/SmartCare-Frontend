// @mui material components
import { TextField, Checkbox, Icon } from "@mui/material";
import MDTypography from "components/MDTypography";

export default function medicalDoctorsData() {
  const columns = [
    { Header: "Orgagnization Unit", accessor: "orgagnizationUnit", width: "20%", align: "left" },
    { Header: "doctor", accessor: "doctor", width: "10%", align: "left" },
    { Header: "Patient Attended", accessor: "patientAttended", width: "20%", align: "left" },
    { Header: "Patient Awaiting", accessor: "patientAwaiting", width: "20%", align: "left" },
    {
      Header: "Visit Type",
      accessor: "visitType",
      width: "10%",
      align: "left",
    },
    { Header: "Speciality", accessor: "speciality", width: "10%", align: "left" },
    { Header: "Add", accessor: "add", width: "10%", align: "left" },
  ];

  const rows = [
    {
      orgagnizationUnit: <Checkbox />,
      doctor: <Checkbox />,
      patientAttended: (
        <MDTypography variant="caption" fontWeight="medium">
          8
        </MDTypography>
      ),
      patientAwaiting: (
        <MDTypography variant="caption" fontWeight="medium">
          4
        </MDTypography>
      ),
      visitType: (
        <MDTypography variant="caption" fontWeight="medium">
          {/* Select Menu */}
          <select
            id="visitType"
            name="visitType"
            //   value={patient.visitType}
            //   onChange={handleInputChange}
            required
            //   className={`block w-full h-8 border ${
            //     errors.visitType ? "border-red-500" : "border-gray-300"
            //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          >
            <option value="Normal">Normal</option>
          </select>
        </MDTypography>
      ),
      speciality: (
        <MDTypography variant="caption" fontWeight="medium">
          {/* Select Menu */}
          <select
            id="speciality"
            name="speciality"
            //   value={patient.speciality}
            //   onChange={handleInputChange}
            required
            //   className={`block w-full h-8 border ${
            //     errors.speciality ? "border-red-500" : "border-gray-300"
            //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          >
            <option value="Medical">Medical</option>
          </select>
        </MDTypography>
      ),
      add: (
        <Icon fontSize="small" className="mr-2">
          add_circle
        </Icon>
      ),
    },
  ];

  return { columns, rows };
}
