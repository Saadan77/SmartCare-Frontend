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
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }} className="h-full">
        {/* Visit Category */}
        <Box
          sx={{
            paddingLeft: 1,
          }}
        >
          <Typography style={{ fontWeight: "bold" }} gutterBottom>
            <p className="text-base text-[#1694c4] font-semibold mb-1">Visit Category</p>
          </Typography>
        </Box>

        <Grid container spacing={2}>
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

        <form>
          <Box
            sx={{
              paddingLeft: 1,
            }}
          >
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#1694c4] font-semibold mr-2">Personal Information</p>
            </Typography>
          </Box>

          {showPatientInfo === "resus" ? (
            <Grid container sx={{ marginTop: 1 }} spacing={2}>
              <Grid
                item
                xs={6}
                sm={3}
                sx={{
                  paddingTop: "5px !important",
                }}
              >
                <Box>
                  <p className="flex flex-row text-xs items-center">
                    Patient ID:<span className="text-red-600 text-base mx-2">*</span>
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    value="000001-08-09-2024"
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 1,
                      },
                      "& .MuiOutlinedInput-input": {
                        height: "0.5rem",
                      },
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          ) : (
            <Grid container sx={{ marginTop: 1 }} spacing={2}>
              <Grid
                item
                xs={6}
                sm={3}
                sx={{
                  paddingTop: "5px !important",
                }}
              >
                <Box>
                  <p className="flex flex-row text-xs items-center">
                    Patient ID:<span className="text-red-600 text-base mx-2">*</span>
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    value="000001-08-09-2024" // Set the value here
                    InputProps={{
                      readOnly: true, // Make the field read-only
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 1,
                      },
                      "& .MuiOutlinedInput-input": {
                        height: "0.5rem",
                      },
                    }}
                  />
                </Box>
              </Grid>

              <Grid
                item
                xs={6}
                sm={3}
                sx={{
                  paddingTop: "5px !important",
                }}
              >
                <Box>
                  <p className="flex flex-row text-xs items-center">
                    Full Name:<span className="text-red-600 text-base mx-2">*</span>
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 1,
                      },
                      "& .MuiOutlinedInput-input": {
                        height: "0.5rem",
                      },
                    }}
                  />
                </Box>
              </Grid>

              {/* Gender */}
              <Grid
                item
                xs={6}
                sm={3}
                sx={{
                  paddingTop: "5px !important",
                }}
              >
                <div>
                  <p className="flex flex-row text-xs items-center">
                    Gender:<span className="text-red-600 text-base mx-2">*</span>
                  </p>

                  {/* Select Menu */}
                  <select
                    id="gender"
                    name="gender"
                    className="block w-full h-7 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    {/* Fetch options from the lab system */}
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </Grid>

              {/* Martial Status */}
              <Grid
                item
                xs={6}
                sm={3}
                sx={{
                  paddingTop: "5px !important",
                }}
              >
                <div>
                  {/* Label */}
                  <p className="flex flex-row text-xs items-center">
                    Maritial Status:<span className="text-red-600 text-base mx-2">*</span>
                  </p>

                  {/* Select Menu */}
                  <select
                    id="maritalStatus"
                    name="maritalStatus"
                    className="block w-3/4 h-7 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    {/* Fetch options from the lab system */}
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>
              </Grid>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* Date of Birth */}
                <Grid
                  item
                  xs={6}
                  sm={3}
                  sx={{
                    paddingTop: "5px !important",
                  }}
                >
                  <Box>
                    <p className="flex flex-row text-xs items-center">
                      Date of Birth:<span className="text-red-600 text-base mx-2">*</span>
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
                <Grid
                  item
                  xs={6}
                  sm={3}
                  sx={{
                    paddingTop: "5px !important",
                  }}
                >
                  <Box>
                    <p className="flex flex-row text-xs items-center">
                      Age:<span className="text-red-600 text-base mx-2">*</span>
                    </p>
                    <TextField
                      variant="outlined"
                      readOnly
                      fullWidth
                      value={age}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1,
                        },
                        "& .MuiOutlinedInput-input": {
                          height: "0.5rem",
                        },
                      }}
                    />
                  </Box>
                </Grid>
              </LocalizationProvider>

              <Grid
                item
                xs={6}
                sm={3}
                sx={{
                  paddingTop: "5px !important",
                }}
              >
                <Box>
                  <p className="flex flex-row text-xs items-center">
                    Phone Number:<span className="text-red-600 text-base mx-2">*</span>
                  </p>
                  <TextField
                    variant="outlined"
                    readOnly
                    fullWidth
                    value={age}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 1,
                      },
                      "& .MuiOutlinedInput-input": {
                        height: "0.5rem",
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
              paddingLeft: 1,
            }}
          >
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#1694c4] font-semibold mb-2">Add Vitals</p>
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            {/* Pulse */}
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Pulse/Heart:</p>
                <TextField
                  variant="outlined"
                  readOnly
                  fullWidth
                  value={age}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "0.5rem",
                    },
                  }}
                />
                <p className="text-sm font-semibold ml-2">pm</p>
              </Box>
            </Grid>

            {/* Blood Pressure */}
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Blood Pressure:</p>
                <TextField
                  variant="outlined"
                  readOnly
                  fullWidth
                  value={age}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "0.5rem",
                    },
                  }}
                />
                <p className="text-sm font-semibold ml-2">mmHg</p>
              </Box>
            </Grid>

            {/* Respiratory Rate */}
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Respiratory Rate:</p>
                <TextField
                  variant="outlined"
                  readOnly
                  fullWidth
                  value={age}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "0.5rem",
                    },
                  }}
                />
                <p className="text-sm font-semibold ml-2">pm</p>
              </Box>
            </Grid>

            {/* Oxygen Saturation */}
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Oxygen Saturation:</p>
                <TextField
                  variant="outlined"
                  readOnly
                  fullWidth
                  value={age}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "0.5rem",
                    },
                  }}
                />
              </Box>
            </Grid>

            {/* Temperature */}
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Temperature:</p>
                <TextField
                  variant="outlined"
                  readOnly
                  fullWidth
                  value={age}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "0.5rem",
                    },
                  }}
                />
                <p className="text-sm font-semibold ml-2">C</p>
              </Box>
            </Grid>

            {/* Pain Level */}
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Pain Level:</p>
                <TextField
                  variant="outlined"
                  readOnly
                  fullWidth
                  value={age}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "0.5rem",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Level of Consciousness:</p>
                <TextField
                  variant="outlined"
                  readOnly
                  fullWidth
                  value={age}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "0.5rem",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Capillary Refill Time:</p>
                <TextField
                  variant="outlined"
                  readOnly
                  fullWidth
                  value={age}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "0.5rem",
                    },
                  }}
                />
                <p className="text-sm font-semibold ml-2">sec</p>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Blood Glucose Level:</p>
                <TextField
                  variant="outlined"
                  readOnly
                  fullWidth
                  value={age}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "0.5rem",
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
              paddingLeft: 1,
            }}
          >
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#1694c4] font-semibold mb-2">Vital Details</p>
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            {/* Severity Level */}
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <div className="flex items-center space-x-4">
                {/* Label */}
                <p htmlFor="severity-level" className="text-xs">
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
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <div className="flex items-center space-x-4">
                {/* Label */}
                <p htmlFor="medication" className="text-xs">
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
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <div className="flex items-center">
                {/* Label */}
                <p htmlFor="tests" className="text-xs mb-2">
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
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Treatment Given:</p>
                <TextField
                  variant="outlined"
                  readOnly
                  fullWidth
                  value={age}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "0.5rem",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Diagnosis:</p>
                <TextField
                  variant="outlined"
                  readOnly
                  fullWidth
                  value={age}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "0.5rem",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Follow Up Instructions:</p>
                <TextField
                  variant="outlined"
                  readOnly
                  fullWidth
                  value={age}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "0.5rem",
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              paddingLeft: 1,
            }}
          >
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#1694c4] font-semibold mb-2">
                Interdepartmental Referrals
              </p>
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={6} sm={6}>
              <div className="flex items-center space-x-4">
                {/* Label */}
                <p htmlFor="referTo" className="text-xs">
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
              <Box>
                <p className="text-xs mb-2">Reason for refferal:</p>
                <TextField
                  variant="outlined"
                  sx={{
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
              paddingLeft: 1,
              marginTop: 2,
            }}
          >
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#1694c4] font-semibold mr-2">
                Operation Theater and Post-Op Care
              </p>
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={6} sm={3}>
              <Box>
                <p className="text-xs mb-2">Surgery Type:</p>
                <TextField
                  variant="outlined"
                  readOnly
                  fullWidth
                  value={age}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "0.5rem",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box>
                <p className="text-xs mb-2">Recovery Status:</p>
                <TextField
                  variant="outlined"
                  readOnly
                  fullWidth
                  value={age}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "0.5rem",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box>
                <p className="text-xs mb-2">Room Assignment:</p>
                <TextField
                  variant="outlined"
                  readOnly
                  fullWidth
                  value={age}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "0.5rem",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box>
                <p className="text-xs mb-2">Pre-op Notes:</p>
                <TextField
                  variant="outlined"
                  readOnly
                  fullWidth
                  value={age}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "0.5rem",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Box>
                <p className="text-xs mb-2">Post-op Notes:</p>
                <TextField
                  variant="outlined"
                  readOnly
                  fullWidth
                  value={age}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "0.5rem",
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container sx={{ marginTop: 1, justifyContent: "end" }} spacing={2}>
            <Grid item sx={{ marginRight: 1 }}>
              <MDButton style={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="info">
                <button type="submit" className="text-xs">
                  SAVE
                </button>
              </MDButton>
            </Grid>
            <Grid item>
              <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
                <span className="text-xs">Cancel</span>
              </MDButton>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </DashboardLayout>
  );
}

export default EmergencyCase;
