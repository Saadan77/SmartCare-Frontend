/* eslint-disable prettier/prettier */
/* prettier-ignore-end-of-line */
import { Typography, Box, Grid, TextField, MenuItem } from "@mui/material";
import data from "./data";
import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";

const AddSubDepartment = () => {
  const { columns, rows } = data();

  return (
    <div>
      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Add SubDepartment</p>
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: 1 }} className="items-center">
        <Grid item xs={3}>
          <p className="text-xs mb-1">Department:</p>
          <TextField variant="outlined" fullWidth select disabled  sx={{ 
              '& .MuiInputBase-root': {
                height: '34px', // Same height as standard outlined TextField
                paddingRight: '0px', // Adjust padding for consistency with text fields
              }
            }}>
            <MenuItem value="department_id">Department Name</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs mb-1">Sub Department Name:</p>
          <TextField variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs mb-1">Specialty:</p>
          <TextField variant="outlined" fullWidth select  sx={{ 
              '& .MuiInputBase-root': {
                height: '34px', // Same height as standard outlined TextField
                paddingRight: '0px', // Adjust padding for consistency with text fields
              }
            }}>
            <MenuItem value="Pediatrics">Pediatrics</MenuItem>
            <MenuItem value="Gynae">Gynae</MenuItem>
            {/* Add more options as needed */}
          </TextField>
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex justify-end">
        <Grid item>
          <MDButton variant="gradient" style={{ backgroundColor: "#1694c4", color: "White" }}>
            <button type="submit" className="text-xs">SAVE</button>
          </MDButton>
        </Grid>

        <Grid item>
          <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
            <span className="text-xs">Cancel</span>
          </MDButton>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 2 }}>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Searched Items Category</p>
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DataTable
            table={{ columns, rows }}
            showTotalEntries={true}
            isSorted={true}
            noEndBorder
            entriesPerPage={false}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AddSubDepartment;
