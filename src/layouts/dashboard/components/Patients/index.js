// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import data from "layouts/dashboard/components/Patients/data";
import MDButton from "components/MDButton";

import { useNavigate } from "react-router-dom";

function Patients() {
  const { columns, rows } = data();

  const navigate = useNavigate();

  const handleAddPatientBtn = () => {
    navigate("/register");
  };

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Patients
          </MDTypography>
        </MDBox>
        <MDButton
          variant="gradient"
          style={{
            borderRadius: 0,
            minHeight: 0,
            backgroundColor: "#1694c4",
            color: "White",
            padding: "0.5rem",
          }}
          onClick={handleAddPatientBtn}
        >
          <button type="submit" className="text-xs flex items-center">
            <Icon fontSize="small">add</Icon> Add Patient
          </button>
        </MDButton>
      </MDBox>
      <MDBox>
        <DataTable
          table={{ columns, rows }}
          showTotalEntries={true}
          isSorted={true}
          noEndBorder
          entriesPerPage={false}
        />
      </MDBox>
    </Card>
  );
}

export default Patients;
