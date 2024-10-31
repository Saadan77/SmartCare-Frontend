/* eslint-disable prettier/prettier */
/* prettier-ignore-end-of-line */
import { Typography, Box, Grid, TextField, MenuItem } from "@mui/material";
import data from "./data";
import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";

const AddWard = () => {
  const { columns, rows } = data();

  return (
    <div>
      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Add Ward</p>
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: 1, alignItems: "center" }}>
        <Grid item xs={4}>
          <p className="text-xs mb-2">Department:<span className="text-red-600 text-base mx-2">*</span></p>
          <TextField select variant="outlined" fullWidth name="department"  sx={{ 
              '& .MuiInputBase-root': {
                height: '34px', // Same height as standard outlined TextField
                paddingRight: '0px', // Adjust padding for consistency with text fields
              }
            }}>
            {/* Options for departments */}
            <MenuItem value="1">Department 1</MenuItem>
            <MenuItem value="2">Department 2</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={4}>
          <p className="text-xs mb-2">Sub Department:</p>
          <TextField select variant="outlined" fullWidth name="subDepartment"  sx={{ 
              '& .MuiInputBase-root': {
                height: '34px', // Same height as standard outlined TextField
                paddingRight: '0px', // Adjust padding for consistency with text fields
              }
            }}>
            {/* Options for sub-departments */}
            <MenuItem value="1">Sub Department 1</MenuItem>
            <MenuItem value="2">Sub Department 2</MenuItem>
          </TextField>
        </Grid>
        
        <Grid item xs={4}>
          <p className="text-xs mb-2">Ward Name:<span className="text-red-600 text-base mx-2">*</span></p>
          <TextField variant="outlined" fullWidth name="wardName" />
        </Grid>


      </Grid>

      <Grid container spacing={2} sx={{ marginTop: 1 }} className="flex justify-end">
        <Grid item>
          <MDButton variant="gradient" style={{ backgroundColor: "#1694c4", color: "White" }}>
            <button type="submit" className="text-xs">SAVE</button>
          </MDButton>
        </Grid>
        <Grid item sx={{ paddingLeft: "1px !important" }}>
          <MDButton variant="gradient" color="light">
            <span className="text-xs">Cancel</span>
          </MDButton>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 2 }}>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Searched Wards</p>
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DataTable table={{ columns, rows }} showTotalEntries={true} isSorted={true} noEndBorder />
        </Grid>
      </Grid>
    </div>
  );
};

export default AddWard;