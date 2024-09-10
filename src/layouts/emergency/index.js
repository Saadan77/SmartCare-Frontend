/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { FormControlLabel, RadioGroup, Radio } from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import MDButton from "components/MDButton";

function EmergencyCase() {
  const [dob, setDob] = React.useState(null);
  const [age, setAge] = React.useState("");

  const handleDateChange = (newDate) => {
    setDob(newDate);
    if (newDate) {
      const calculatedAge = dayjs().diff(newDate, "year");
      setAge(calculatedAge);
    }
  };

  const [showPatientInfo, setShowPatientInfo] = useState("fastTrack");

  const handleVisitChange = (event) => {
    setShowPatientInfo(event.target.value);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Typography variant="h4" gutterBottom>
          Emergency Case Form
        </Typography>

        {/* Visit Category */}
        <Box
          sx={{
            backgroundColor: "#49a3f1",
            padding: 1,
            marginTop: 2,
          }}
        >
          <Typography variant="h5" style={{ color: "white" }} gutterBottom>
            Visit Category
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ marginTop: 1 }}>
          <Grid item xs={12} sm={12}>
            <RadioGroup
              row
              name="visitCategory"
              value={showPatientInfo}
              onChange={handleVisitChange}
            >
              <FormControlLabel value="fastTrack" control={<Radio />} label="Fast Track" />
              <FormControlLabel value="resus" control={<Radio />} label="Resus" />
            </RadioGroup>
          </Grid>
        </Grid>

        <Box
          sx={{
            backgroundColor: "#49a3f1",
            padding: 1,
            marginTop: 2,
          }}
        >
          <Typography variant="h5" style={{ color: "white" }} gutterBottom>
            Personal Information
          </Typography>
        </Box>

        <form>
          {showPatientInfo === "resus" ? (
            <Grid container sx={{ marginTop: 1 }} spacing={2}>
              <Grid item xs={6} sm={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p className="text-base font-semibold text-end mr-2" style={{ width: "200px" }}>
                    Patient ID:<span className="text-red-600 text-lg mx-2">*</span>
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    value="000001-08-09-2024" // Set the value here
                    InputProps={{
                      readOnly: true, // Make the field read-only
                    }}
                    sx={{
                      backgroundColor: "#e0e0e0",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 1,
                      },
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          ) : (
            <Grid container sx={{ marginTop: 1 }} spacing={2}>
              <Grid item xs={6} sm={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p className="text-base font-semibold text-end mr-2" style={{ width: "250px" }}>
                    Patient ID:<span className="text-red-600 text-lg mx-2">*</span>
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    value="000001-08-09-2024" // Set the value here
                    InputProps={{
                      readOnly: true, // Make the field read-only
                    }}
                    sx={{
                      backgroundColor: "#e0e0e0",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 1,
                      },
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p className="text-base font-semibold text-end mr-2" style={{ width: "200px" }}>
                    Full Name:<span className="text-red-600 text-lg mx-2">*</span>
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: "#e0e0e0",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 1,
                      },
                    }}
                  />
                </Box>
              </Grid>

              {/* Gender */}
              <Grid item xs={6} sm={4}>
                <div className="flex items-center space-x-4">
                  {/* Label */}
                  <p
                    htmlFor="gender"
                    className="text-base font-semibold text-end"
                    style={{ width: "250px" }}
                  >
                    Gender:<span className="text-red-600 text-lg mx-2">*</span>
                  </p>

                  {/* Select Menu */}
                  <select
                    id="gender"
                    name="gender"
                    className="block w-full h-10 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    {/* Fetch options from the lab system */}
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </Grid>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* Date of Birth */}
                <Grid item xs={6} sm={4}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <p className="text-base font-semibold text-end mr-2" style={{ width: "150px" }}>
                      Date of Birth:<span className="text-red-600 text-lg mx-2">*</span>
                    </p>
                    <DatePicker
                      value={dob}
                      onChange={(newDate) => handleDateChange(newDate)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          variant="outlined"
                          sx={{ backgroundColor: "#e0e0e0" }}
                        />
                      )}
                    />
                  </Box>
                </Grid>

                {/* Age */}
                <Grid item xs={6} sm={4}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <p className="text-base font-semibold text-end mr-2" style={{ width: "200px" }}>
                      Age:<span className="text-red-600 text-lg mx-2">*</span>
                    </p>
                    <TextField
                      variant="outlined"
                      readOnly
                      fullWidth
                      value={age}
                      sx={{
                        backgroundColor: "#e0e0e0",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1,
                        },
                      }}
                    />
                  </Box>
                </Grid>
              </LocalizationProvider>

              {/* Martial Status */}
              <Grid item xs={6} sm={4}>
                <div className="flex items-center space-x-4">
                  {/* Label */}
                  <p
                    htmlFor="maritial-status"
                    className="text-base font-semibold text-end"
                    style={{ width: "150px" }}
                  >
                    Maritial Status:<span className="text-red-600 text-lg mx-2">*</span>
                  </p>

                  {/* Select Menu */}
                  <select
                    id="maritial-status"
                    name="maritial-status"
                    className="block w-44 h-10 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    {/* Fetch options from the lab system */}
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p
                    className="flex flex-row items-center text-base font-semibold text-end"
                    style={{ width: "250px" }}
                  >
                    Phone number:<span className="text-red-600 text-lg mx-2">*</span>
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: "#e0e0e0",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 1,
                      },
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          )}

          {/* Add Vitals Section */}
          <Box
            sx={{
              backgroundColor: "#49a3f1",
              padding: 1,
              marginTop: 2,
            }}
          >
            <Typography variant="h5" style={{ color: "white" }} gutterBottom>
              Add Vitals
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            {/* Pulse */}
            <Grid item xs={6} sm={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p className="text-base font-semibold text-end mr-2" style={{ width: "150px" }}>
                  Pulse/Heart:
                </p>
                <TextField
                  variant="outlined"
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
                <p className="text-sm font-semibold ml-2">pm</p>
              </Box>
            </Grid>

            {/* Blood Pressure */}
            <Grid item xs={6} sm={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p className="text-base font-semibold text-end mr-2" style={{ width: "150px" }}>
                  Blood Pressure:
                </p>
                <TextField
                  variant="outlined"
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
                <p className="text-sm font-semibold ml-2">mmHg</p>
              </Box>
            </Grid>

            {/* Respiratory Rate */}
            <Grid item xs={6} sm={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p className="text-base font-semibold text-end mr-2" style={{ width: "150px" }}>
                  Respiratory Rate:
                </p>
                <TextField
                  variant="outlined"
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
                <p className="text-sm font-semibold ml-2">pm</p>
              </Box>
            </Grid>

            {/* Oxygen Saturation */}
            <Grid item xs={6} sm={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p className="text-base font-semibold text-end mr-2" style={{ width: "150px" }}>
                  Oxygen Saturation:
                </p>
                <TextField
                  variant="outlined"
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
              </Box>
            </Grid>

            {/* Temperature */}
            <Grid item xs={6} sm={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p className="text-base font-semibold text-end mr-2" style={{ width: "150px" }}>
                  Temperature:
                </p>
                <TextField
                  variant="outlined"
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
                <p className="text-sm font-semibold ml-2">C</p>
              </Box>
            </Grid>

            {/* Pain Level */}
            <Grid item xs={6} sm={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p className="text-base font-semibold text-end mr-2" style={{ width: "150px" }}>
                  Pain Level:
                </p>
                <TextField
                  variant="outlined"
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p className="text-base font-semibold text-end mr-2" style={{ width: "150px" }}>
                  Level of Consciousness:
                </p>
                <TextField
                  variant="outlined"
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p className="text-base font-semibold text-end mr-2" style={{ width: "150px" }}>
                  Capillary Refill Time:
                </p>
                <TextField
                  variant="outlined"
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
                <p className="text-sm font-semibold ml-2">sec</p>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p className="text-base font-semibold text-end mr-2" style={{ width: "150px" }}>
                  Blood Glucose Level:
                </p>
                <TextField
                  variant="outlined"
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
                <p className="text-sm font-semibold ml-2">mg/dl</p>
              </Box>
            </Grid>
          </Grid>

          {/* Vital Details Section */}
          <Box
            sx={{
              backgroundColor: "#49a3f1",
              padding: 1,
              marginTop: 2,
            }}
          >
            <Typography variant="h5" style={{ color: "white" }} gutterBottom>
              Vital Details
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            {/* Severity Level */}
            <Grid item xs={6} sm={4}>
              <div className="flex items-center space-x-4">
                {/* Label */}
                <p
                  htmlFor="severity-level"
                  className="text-base font-semibold text-end"
                  style={{ width: "150px" }}
                >
                  Severity Level:
                </p>

                {/* Select Menu */}
                <select
                  id="severity-level"
                  name="severity-level"
                  className="block w-44 h-10 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  {/* Fetch options from the lab system */}
                  <option value="Low">Low</option>
                  <option value="Moderate">Moderate</option>
                  <option value="High">High</option>
                </select>
              </div>
            </Grid>
            <Grid item xs={6} sm={4}>
              <div className="flex items-center space-x-4">
                {/* Label */}
                <p
                  htmlFor="medication"
                  className="text-base font-semibold text-end"
                  style={{ width: "150px" }}
                >
                  Medication:
                </p>

                {/* Select Menu */}
                <select
                  id="medication"
                  className="block w-44 h-10 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  {/* Fetch options from the lab system */}
                  <option value="Test1">Medication 1</option>
                  <option value="Test2">Medication 2</option>
                </select>
              </div>
            </Grid>
            <Grid item xs={6} sm={4}>
              <div className="flex items-center">
                {/* Label */}
                <p
                  htmlFor="tests"
                  className="text-base font-semibold text-end mr-2"
                  style={{ width: "150px" }}
                >
                  Lab Tests Ordered:
                </p>

                {/* Select Menu */}
                <select
                  id="tests"
                  name="tests"
                  className="block w-44 h-10 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  {/* Fetch options from the lab system */}
                  <option value="Test1">Test 1</option>
                  <option value="Test2">Test 2</option>
                </select>
              </div>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p className="text-base font-semibold text-end mr-2" style={{ width: "150px" }}>
                  Treatment Given:
                </p>
                <TextField
                  variant="outlined"
                  multiline
                  rows={3}
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p className="text-base font-semibold text-end mr-2" style={{ width: "150px" }}>
                  Diagnosis:
                </p>
                <TextField
                  variant="outlined"
                  multiline
                  rows={3}
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p className="text-base font-semibold text-end mr-2" style={{ width: "150px" }}>
                  Follow Up Instructions:
                </p>
                <TextField
                  variant="outlined"
                  multiline
                  rows={3}
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              backgroundColor: "#49a3f1",
              padding: 1,
              marginTop: 2,
            }}
          >
            <Typography variant="h5" style={{ color: "white" }} gutterBottom>
              Interdepartmental Referrals
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={6} sm={6}>
              <div className="flex items-center space-x-4">
                {/* Label */}
                <p
                  htmlFor="referTo"
                  className="text-base font-semibold text-end"
                  style={{ width: "150px" }}
                >
                  Refer to:
                </p>

                {/* Select Menu */}
                <select
                  id="referTo"
                  name="referTo"
                  className="block w-1/2 h-10 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  {/* Fetch options from the lab system */}
                  <option value="OPD">OPD</option>
                  <option value="dayCare">Day Care</option>
                  <option value="ICU">Intensive Care Unit (ICU) </option>
                </select>
              </div>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p className="text-base font-semibold text-end mr-2" style={{ width: "200px" }}>
                  Reason for refferal:
                </p>
                <TextField
                  variant="outlined"
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                    width: "50%",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel control={<CheckBox />} label="Automatically Schedule Follow-up" />
            </Grid>
          </Grid>

          <Box
            sx={{
              backgroundColor: "#49a3f1",
              padding: 1,
              marginTop: 2,
            }}
          >
            <Typography variant="h5" style={{ color: "white" }} gutterBottom>
              Operation Theater and Post-Op Care
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={6} sm={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p className="text-base font-semibold text-end mr-2" style={{ width: "150px" }}>
                  Surgery Type
                </p>
                <TextField
                  variant="outlined"
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p className="text-base font-semibold text-end mr-2" style={{ width: "150px" }}>
                  Recovery Status:
                </p>
                <TextField
                  variant="outlined"
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p className="text-base font-semibold text-end mr-2" style={{ width: "150px" }}>
                  Room Assignment:
                </p>
                <TextField
                  variant="outlined"
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p className="text-base font-semibold text-end mr-2" style={{ width: "200px" }}>
                  Pre-op Notes:
                </p>
                <TextField
                  variant="outlined"
                  fullWidth
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p className="text-base font-semibold text-end mr-2" style={{ width: "150px" }}>
                  Post-op Notes:
                </p>
                <TextField
                  variant="outlined"
                  fullWidth
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container sx={{ marginTop: 1, justifyContent: "center" }} spacing={2}>
            <Grid item sx={{ marginRight: 1 }}>
              <MDButton variant="gradient" color="info">
                Save
              </MDButton>
            </Grid>
            <Grid item sx={{ marginRight: 1 }}>
              <MDButton variant="gradient" color="info">
                Save and Print Form
              </MDButton>
            </Grid>
            <Grid item>
              <MDButton variant="gradient" color="light">
                Clear
              </MDButton>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </DashboardLayout>
  );
}

export default EmergencyCase;
