// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Dashboard components
import Patients from "layouts/dashboard/components/Patients";

function PatientTable() {
  return (
    <MDBox>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <Patients />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default PatientTable;
