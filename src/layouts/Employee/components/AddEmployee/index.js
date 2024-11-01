/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  Paper,
} from "@mui/material";
import MDButton from "components/MDButton";

const AddEmployee = () => {
  const [sameAsCurrentAddress, setSameAsCurrentAddress] = useState(false);

  const handleCheckboxChange = (event) => {
    setSameAsCurrentAddress(event.target.checked);
  };

  return (
    <div>
      {/* Header */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Add Employee
      </Typography>

      {/* Employee Personal Information Section */}
      <Box sx={{ backgroundColor: "#1769aa", padding: 1, color: "white", mb: 2 }}>
        <Typography variant="subtitle1" className="text-white">
         Employee Personal Information
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{marginBottom: "40px"}}>
        <Grid item xs={3}>
          <p className="text-xs">Title:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="title"
            select
            sx={{
              '& .MuiInputBase-root': {
                height: '34px',
                paddingRight: '0px',
              },
            }}
          >
            <MenuItem value="Doctor">Doctor</MenuItem>
            {/* Add other options as needed */}
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Employee No.:</p>
          <TextField variant="outlined" fullWidth name="employeeNo" />
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Gender:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="gender"
            select
            sx={{
              '& .MuiInputBase-root': {
                height: '34px',
                paddingRight: '0px',
              },
            }}
          >
            <MenuItem value="Male">Male</MenuItem>
            {/* Add other options as needed */}
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">First Name:</p>
          <TextField variant="outlined" fullWidth name="firstName" />
        </Grid>

        {/* Additional fields in a similar layout */}
        <Grid item xs={3}>
          <p className="text-xs">Middle Name:</p>
          <TextField variant="outlined" fullWidth name="middleName" />
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Last Name:</p>
          <TextField variant="outlined" fullWidth name="lastName" />
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Relationship:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="gender"
            select
            sx={{
              '& .MuiInputBase-root': {
                height: '34px',
                paddingRight: '0px',
              },
            }}
          >
            <MenuItem value="Male">Son of</MenuItem>
            {/* Add other options as needed */}
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">First Name:</p>
          <TextField variant="outlined" fullWidth name="firstName" />
        </Grid>

        {/* Additional fields in a similar layout */}
        <Grid item xs={3}>
          <p className="text-xs">Middle Name:</p>
          <TextField variant="outlined" fullWidth name="middleName" />
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Last Name:</p>
          <TextField variant="outlined" fullWidth name="lastName" />
        </Grid>
        <Grid item xs={3}>
            <p className="text-xs">Age:</p>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="age.years"
                  placeholder="Y(s)"
                  size="small"
                  sx={{
                    '& .MuiInputBase-root': {
                      height: '34px',
                    }
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="age.months"
                  placeholder="M(s)"
                  size="small"
                  sx={{
                    '& .MuiInputBase-root': {
                      height: '34px',
                    }
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="age.days"
                  placeholder="D(s)"
                  size="small"
                  sx={{
                    '& .MuiInputBase-root': {
                      height: '34px',
                    }
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Date of Birth:</p>
          <TextField variant="outlined" fullWidth name="dob" type="date" InputLabelProps={{ shrink: true }} />
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Marital Status:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="maritalStatus"
            select
            sx={{
              '& .MuiInputBase-root': {
                height: '34px',
                paddingRight: '0px',
              },
            }}
          >
            <MenuItem value="Married">Married</MenuItem>
            {/* Add other options as needed */}
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Blood Group:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="maritalStatus"
            select
            sx={{
              '& .MuiInputBase-root': {
                height: '34px',
                paddingRight: '0px',
              },
            }}
          >
            <MenuItem value="Married">Married</MenuItem>
            {/* Add other options as needed */}
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">CNIC:</p>
          <TextField variant="outlined" fullWidth name="lastName" />
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Nationality:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="maritalStatus"
            select
            sx={{
              '& .MuiInputBase-root': {
                height: '34px',
                paddingRight: '0px',
              },
            }}
          >
            <MenuItem value="Married">Pakistani</MenuItem>
            {/* Add other options as needed */}
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Phone (Off):</p>
          <TextField variant="outlined" fullWidth name="lastName" />
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Phone (Res):</p>
          <TextField variant="outlined" fullWidth name="lastName" />
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Email:</p>
          <TextField variant="outlined" fullWidth name="lastName" />
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Mobile:</p>
          <TextField variant="outlined" fullWidth name="lastName" />
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Fax:</p>
          <TextField variant="outlined" fullWidth name="lastName" />
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Unique Key Type:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="maritalStatus"
            select
            sx={{
              '& .MuiInputBase-root': {
                height: '34px',
                paddingRight: '0px',
              },
            }}
          >
            <MenuItem value="Married">CNIC</MenuItem>
            {/* Add other options as needed */}
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Unique Key:</p>
          <TextField variant="outlined" fullWidth name="lastName" />
        </Grid>
       
      </Grid>

      <Grid container spacing={2} alignItems="flex-start">
  {/* Current Address Section */}
  <Grid item xs={6}>
    <Box sx={{ backgroundColor: "#1769aa", padding: 1, color: "white", mb: 2 }}>
      <Typography variant="subtitle1" className="text-white">
        Current Address
      </Typography>
    </Box>
    <Grid container spacing={2} sx={{marginTop: "57px"}}>
      <Grid item xs={6}>
        <p className="text-xs">Country:</p>
        <TextField
          variant="outlined"
          fullWidth
          name="country"
          select
          sx={{
            '& .MuiInputBase-root': {
              height: '34px',
              paddingRight: '0px',
            },
          }}
        >
          <MenuItem value="Pakistan">Pakistan</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={6}>
        <p className="text-xs">Province:</p>
        <TextField variant="outlined" fullWidth name="province" />
      </Grid>
      <Grid item xs={6}>
        <p className="text-xs">District:</p>
        <TextField variant="outlined" fullWidth name="district" />
      </Grid>
      <Grid item xs={6}>
        <p className="text-xs">City:</p>
        <TextField variant="outlined" fullWidth name="city" />
      </Grid>
      <Grid item xs={12}>
        <p className="text-xs">Address:</p>
        <TextField variant="outlined" fullWidth name="address" multiline rows={2} />
      </Grid>
    </Grid>
  </Grid>

  {/* Permanent Address Section */}
  <Grid item xs={6}>
    <Box sx={{ backgroundColor: "#1769aa", padding: 1, color: "white", mb: 2 }}>
      <Typography variant="subtitle1" className="text-white">
        Permanent Address
      </Typography>
    </Box>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox checked={sameAsCurrentAddress} onChange={handleCheckboxChange} />}
          label="Same as Current Address"
        />
      </Grid>
      <Grid item xs={6}>
        <p className="text-xs">Country:</p>
        <TextField
          variant="outlined"
          fullWidth
          name="permCountry"
          select
          disabled={sameAsCurrentAddress}
          sx={{
            '& .MuiInputBase-root': {
              height: '34px',
              paddingRight: '0px',
            },
          }}
        >
          <MenuItem value="Pakistan">Pakistan</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={6}>
        <p className="text-xs">Province:</p>
        <TextField variant="outlined" fullWidth name="permProvince" disabled={sameAsCurrentAddress} />
      </Grid>
      <Grid item xs={6}>
        <p className="text-xs">District:</p>
        <TextField variant="outlined" fullWidth name="permDistrict" disabled={sameAsCurrentAddress} />
      </Grid>
      <Grid item xs={6}>
        <p className="text-xs">City:</p>
        <TextField variant="outlined" fullWidth name="permCity" disabled={sameAsCurrentAddress} />
      </Grid>
      <Grid item xs={12}>
        <p className="text-xs">Address:</p>
        <TextField variant="outlined" fullWidth name="permAddress" multiline rows={2} disabled={sameAsCurrentAddress} />
      </Grid>
    </Grid>
  </Grid>
</Grid>


      {/* Buttons */}
      <Grid container  sx={{ marginTop: 3, backgroundColor: "#11171d" }} className="place-content-center justify-center p-2 gap-2">
      <Grid item>
          <MDButton variant="gradient" style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}>
            <button type="submit" className="text-xs">Save</button>
          </MDButton>
        </Grid>
        <Grid item sx={{ paddingLeft: "1px !important" }}>
          <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
            <button className="text-xs">Cancel</button>
          </MDButton>
        </Grid>
        <Grid item>
          <MDButton variant="gradient" style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}>
            <button type="submit" className="text-xs">Save & Assign Appointment</button>
          </MDButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddEmployee;
