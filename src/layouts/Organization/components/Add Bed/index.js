/* eslint-disable prettier/prettier */
/* prettier-ignore-end-of-line */
import { Typography, Box, Grid, TextField, MenuItem, Checkbox, FormControlLabel } from "@mui/material";
import data from "./data";
import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";
import { useState } from "react";

const AddBed = () => {
  const { columns, rows } = data();

  const [isOccupied, setIsOccupied] = useState(false); // Default value false (0)

  const handleCheckboxChange = (event) => {
    setIsOccupied(event.target.checked);
  };

  return (
    <div>
      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Add Bed</p>
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: 1, alignItems: "center" }}>
        <Grid item xs={4}>
          <p className="text-xs mb-1">Ward Name:<span className="text-red-600 text-base mx-1">*</span></p>
          <TextField
            select
            variant="outlined"
            fullWidth
            name="ward"
            size="small"
            sx={{
              height: '40px', // Set a fixed height for dropdown
              '& .MuiInputBase-root': {
                height: '100%', // Fill height of the TextField
                paddingRight: '0px', // Adjust padding for consistency with text fields
              }
            }}
          >
            {/* Options for wards */}
            <MenuItem value="1">Ward 1</MenuItem>
            <MenuItem value="2">Ward 2</MenuItem>
          </TextField>
        </Grid>
        
        <Grid item xs={4}>
          <p className="text-xs mb-1">Room Number:<span className="text-red-600 text-base mx-1">*</span></p>
          <TextField
            select
            variant="outlined"
            fullWidth
            name="roomNumber"
            size="small"
            sx={{
              height: '40px', // Set a fixed height for dropdown
              '& .MuiInputBase-root': {
                height: '100%',
                paddingRight: '0px',
              }
            }}
          >
            {/* Options for room number */}
            <MenuItem value="1">Room 1</MenuItem>
            <MenuItem value="2">Room 2</MenuItem>
          </TextField>
        </Grid>
        
        <Grid item xs={4}>
          <p className="text-xs mb-1">Bed Number:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="bedNumber"
            size="small"
            sx={{
              height: '40px', // Set a fixed height for input
            }}
          />
        </Grid>
        
        <Grid item xs={4}>
          <p className="text-xs mb-1">Bed Type:<span className="text-red-600 text-base mx-1">*</span></p>
          <TextField
            select
            variant="outlined"
            fullWidth
            name="bedType"
            size="small"
            sx={{
              height: '40px', // Set a fixed height for dropdown
              '& .MuiInputBase-root': {
                height: '100%',
                paddingRight: '0px',
              }
            }}
          >
            {/* Options for bed type */}
            <MenuItem value="1">Semi-Electric Bed</MenuItem>
            <MenuItem value="2">Pediatric Bed</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isOccupied}
                onChange={handleCheckboxChange}
                color="primary"
                size="small"
              />
            }
            label={<span className="text-xs">Is Occupied</span>}
          />
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: 2 }} spacing={2} justifyContent="flex-end">
        <Grid item>
          <MDButton
            variant="gradient"
            style={{
              borderRadius: 0,
              minHeight: 0,
              backgroundColor: "#1694c4",
              color: "White",
            }}
          >
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
          <p className="text-base text-[#42424a] font-semibold mr-2">Bed List</p>
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

export default AddBed;
