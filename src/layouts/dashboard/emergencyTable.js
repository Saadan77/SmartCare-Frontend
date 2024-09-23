// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// Dashboard components
import EmergencyCases from "layouts/dashboard/components/Emergency Case";

function EmergencyCasesTable() {
  return (
    <DashboardLayout>
      <MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} sm={12} lg={12}>
            <EmergencyCases />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default EmergencyCasesTable;
