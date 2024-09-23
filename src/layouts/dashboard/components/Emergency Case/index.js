// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import data from "layouts/dashboard/components/Emergency Case/data";
import MDButton from "components/MDButton";

import { useNavigate } from "react-router-dom";

function EmergencyCases() {
  const { columns, rows } = data();

  const navigate = useNavigate();

  const handleAddEmergencyBtn = () => {
    navigate("/emergency");
  };

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Emergency Cases
          </MDTypography>
        </MDBox>
        <MDButton
          variant="gradient"
          style={{
            borderRadius: 0,
            minHeight: 0,
            backgroundColor: "#1694c4",
            color: "White",
          }}
          onClick={handleAddEmergencyBtn}
        >
          <button type="submit" className="text-xs">
            Add Emergency Case
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

export default EmergencyCases;
