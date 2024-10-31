/* eslint-disable prettier/prettier */
/* prettier-ignore-end-of-line */
import React from 'react'

import { Typography, Box, Grid, TextField, MenuItem } from "@mui/material";
import data from "./data";
import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";


const AddHospital = () => {
  const { columns, rows } = data();

  return (
    <div>
      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Add Hospital</p>
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: 1, alignItems: "center" }}>
        <Grid item xs={3}>
          <p className="flex flex-row text-xs items-center">
            Client ID:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          <TextField variant="outlined" fullWidth name="clientID" disabled />
        </Grid>

        <Grid item xs={3}>
          <p className="flex flex-row text-xs items-center">
            Hospital Name:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          <TextField variant="outlined" fullWidth name="hospitalName" />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs">Region:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="region"
            select
            sx={{ 
              '& .MuiInputBase-root': {
                height: '34px', // Same height as standard outlined TextField
                paddingRight: '0px', // Adjust padding for consistency with text fields
              }
            }}
          >
            <MenuItem value="North">North</MenuItem>
            <MenuItem value="South">South</MenuItem>
            <MenuItem value="East">East</MenuItem>
            <MenuItem value="West">West</MenuItem>
            <MenuItem value="Central">Central</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs">Phone1:</p>
          <TextField variant="outlined" fullWidth name="phone1" />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs">Phone2:</p>
          <TextField variant="outlined" fullWidth name="phone2" />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs">Fax:</p>
          <TextField variant="outlined" fullWidth name="fax" />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs">Email:</p>
          <TextField variant="outlined" fullWidth name="email" />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs">Country:</p>
          <TextField variant="outlined" fullWidth name="country" select  sx={{ 
              '& .MuiInputBase-root': {
                height: '34px', // Same height as standard outlined TextField
                paddingRight: '0px', // Adjust padding for consistency with text fields
              }
            }}>
            {/* Populate with options */}
            <MenuItem value="Country1">Country1</MenuItem>
            <MenuItem value="Country2">Country2</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs">Province:</p>
          <TextField variant="outlined" fullWidth name="province" select  sx={{ 
              '& .MuiInputBase-root': {
                height: '34px', // Same height as standard outlined TextField
                paddingRight: '0px', // Adjust padding for consistency with text fields
              }
            }}>
            {/* Populate with options */}
            <MenuItem value="Province1">Province1</MenuItem>
            <MenuItem value="Province2">Province2</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs">District:</p>
          <TextField variant="outlined" fullWidth name="district" select  sx={{ 
              '& .MuiInputBase-root': {
                height: '34px', // Same height as standard outlined TextField
                paddingRight: '0px', // Adjust padding for consistency with text fields
              }
            }}>
            {/* Populate with options */}
            <MenuItem value="District1">District1</MenuItem>
            <MenuItem value="District2">District2</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs">City:</p>
          <TextField variant="outlined" fullWidth name="city" />
        </Grid>

        <Grid item xs={12}>
          <p className="text-xs">Address:</p>
          <TextField variant="outlined" fullWidth name="address" multiline rows={3} />
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex justify-end">
        <Grid item>
          <MDButton variant="gradient" style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}>
            <button type="submit" className="text-xs">SAVE</button>
          </MDButton>
        </Grid>
        <Grid item sx={{ paddingLeft: "1px !important" }}>
          <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
            <span className="text-xs">Cancel</span>
          </MDButton>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 2 }}>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Searched Hospital Entries</p>
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

export default AddHospital;