// @mui material components
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

export default function data() {
  const columns = [
    { Header: "MR No", accessor: "mrNo", width: "15%", align: "left" },
    { Header: "Patient Name", accessor: "fullName", width: "25%", align: "left" },
    { Header: "Visit Date", accessor: "visitDate", width: "20%", align: "center" },
    { Header: "Visit Type", accessor: "visitType", width: "15%", align: "center" },
    { Header: "Specialty", accessor: "specialty", width: "15%", align: "center" },
    { Header: "Actions", accessor: "actions", width: "10%", align: "center" },
  ];

  const rows = [
    {
      mrNo: (
        <MDTypography variant="caption" fontWeight="medium">
          00001
        </MDTypography>
      ),
      fullName: (
        <MDTypography variant="caption" fontWeight="medium">
          John Doe
        </MDTypography>
      ),
      visitDate: (
        <MDTypography variant="caption" fontWeight="medium">
          2024-09-25
        </MDTypography>
      ),
      visitType: (
        <div className="flex flew-row items-center">
          {/* Label */}
          <p className="text-xs mr-2">Visit Type:</p>

          {/* Select Menu */}
          <select className="block w-full h-7 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value="Follow-Up">Follow-Up</option>
            <option value="Emergency">Emergency</option>
            <option value="Routine Check-up">Routine Check-up</option>
          </select>
        </div>
      ),
      specialty: (
        <div className="flex flew-row items-center">
          {/* Label */}
          <p className="text-xs mr-2">Specialty:</p>

          {/* Select Menu */}
          <select className="block w-full h-7 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value="Cardiology">Cardiology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Neurology">Neurology</option>
          </select>
        </div>
      ),
      actions: (
        <MDBox display="flex" justifyContent="space-between" alignItems="center">
          <MDButton
            variant="gradient"
            color="success"
            style={{
              borderRadius: 0,
              minHeight: 0,
              backgroundColor: "#28a745",
              color: "white",
            }}
          >
            Confirm
          </MDButton>
          <MDButton variant="outlind" color="error" size="small">
            Cancel
          </MDButton>
        </MDBox>
      ),
    },
  ];

  return { columns, rows };
}
