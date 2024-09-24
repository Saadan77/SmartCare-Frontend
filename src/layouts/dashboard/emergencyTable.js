// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Dashboard components
import EmergencyCases from "layouts/dashboard/components/Emergency Case";

function EmergencyCasesTable() {
  return (
    <MDBox>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <EmergencyCases />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default EmergencyCasesTable;
