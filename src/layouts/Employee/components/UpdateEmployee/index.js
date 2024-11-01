/* eslint-disable prettier/prettier */
/* prettier-ignore-end-of-line */
import React from 'react';
import {
  Typography,
  Box,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
} from "@mui/material";
import MDButton from "components/MDButton";

function UpdateEmployee() {
  return (
    <div>
      {/* Header */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        User Updation
      </Typography>

      {/* Employee Information Section */}
      <Box sx={{ backgroundColor: "#1769aa", padding: 1, mb: 2 }}>
        <Typography variant="subtitle1" className='text-white'>
          Employee Information
        </Typography>
      </Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={10}>
          <Typography variant="body1">Employee Name: Mr. IKRAM MUHYUDDIN CHISHTI</Typography>
          <Typography variant="body1">Employee No.: 5</Typography>
        </Grid>
        <Grid item xs={2}>
          {/* Placeholder for user profile picture */}
          <Box
            sx={{
              width: 80,
              height: 80,
              backgroundColor: "#d3d3d3",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" color="white">
              {/* Icon or Image can be placed here */}
              👤
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Update User Section */}
      <Box sx={{ backgroundColor: "#1769aa", padding: 1, mt: 3, mb: 2 }}>
        <Typography variant="subtitle1" className='text-white'>
          Update User
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <p className="text-xs">User Name:</p>
          <TextField variant="outlined" fullWidth name="username" value="ikram" />
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Password:</p>
          <TextField variant="outlined" fullWidth name="password" type="password" />
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Confirm Password:</p>
          <TextField variant="outlined" fullWidth name="confirmPassword" type="password" />
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Login Status:</p>
          <RadioGroup row name="loginStatus" defaultValue="active">
            <FormControlLabel value="active" control={<Radio />} label="Active" />
            <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
          </RadioGroup>
        </Grid>
      </Grid>

      {/* Buttons Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
      <MDButton
                variant="gradient"
                style={{
                  borderRadius: 0,
                  minHeight: 0,
                  backgroundColor: "#1694c4",
                  color: "White",
                }}
              >
                <button type="submit" className="text-xs">
                  Update User
                </button>
              </MDButton>
              <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
                <span className="text-xs">Back</span>
              </MDButton>
      </Box>
    </div>
  );
}

export default UpdateEmployee;
