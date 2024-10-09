// @mui material components
import { TextField, Checkbox } from "@mui/material";
import MDTypography from "components/MDTypography";

export default function patientsData() {
  const columns = [
    { Header: "Select", accessor: "select", width: "10%", align: "left" },
    { Header: "Urgent", accessor: "urgent", width: "10%", align: "left" },
    { Header: "Mr No.", accessor: "mrNo", width: "10%", align: "left" },
    { Header: "Patient Name", accessor: "patientName", width: "10%", align: "left" },
    { Header: "Relation", accessor: "relation", width: "10%", align: "left" },
    { Header: "Gender", accessor: "gender", width: "10%", align: "left" },
    { Header: "Date of Birth", accessor: "dob", width: "10%", align: "left" },
    {
      Header: "Brought By",
      accessor: "broughtBy",
      width: "10%",
      align: "left",
    },
    { Header: "Patient Condition", accessor: "patientCondition", width: "10%", align: "left" },
  ];

  const rows = [
    {
      select: <Checkbox />,
      urgent: <Checkbox />,
      mrNo: (
        <MDTypography variant="caption" fontWeight="medium">
          00001-01-10-2024
        </MDTypography>
      ),
      patientName: (
        <MDTypography variant="caption" fontWeight="medium">
          John Smith
        </MDTypography>
      ),
      relation: (
        <MDTypography variant="caption" fontWeight="medium">
          Self
        </MDTypography>
      ),
      gender: (
        <MDTypography variant="caption" fontWeight="medium">
          Male
        </MDTypography>
      ),
      dob: (
        <MDTypography variant="caption" fontWeight="medium">
          10th Oct 2024
        </MDTypography>
      ),
      broughtBy: <TextField variant="outlined" />,
      patientCondition: (
        <MDTypography variant="caption" fontWeight="medium">
          {/* Select Menu */}
          <select
            id="patientCondition"
            name="patientCondition"
            //   value={patient.patientCondition}
            //   onChange={handleInputChange}
            required
            //   className={`block w-full h-8 border ${
            //     errors.patientCondition ? "border-red-500" : "border-gray-300"
            //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          >
            <option value="Dispensed">Dispensed</option>
          </select>
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
