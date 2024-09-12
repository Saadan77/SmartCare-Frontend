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

import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDButton from "components/MDButton";

function PatientRegistration() {
  const [patient, setPatient] = useState({
    registrationType: "Regular",
    patientId: "1",
    fullName: "",
    age: "",
    gender: "",
    diagnosis: "",
    address: "",
    phone: "",
    email: "",
    maritalStatus: "",
    bloodType: "",
    emergencyContactId: "",
    insuranceProvider: "",
    insurancePolicyNumber: "",
    allergies: "",
    medicalHistory: "",
    registrationDate: new Date().toISOString().slice(0, 19).replace("T", " "),
    isActive: true,
    createdBy: null,
    createdDate: new Date().toISOString().slice(0, 19).replace("T", " "),
    updateBy: null,
    updatedDate: new Date().toISOString().slice(0, 19).replace("T", " "),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(patient);
  };

  const [dob, setDob] = React.useState(null);
  const [age, setAge] = React.useState("");

  const handleDateChange = (newDate) => {
    setDob(newDate);
    if (newDate) {
      const calculatedAge = dayjs().diff(newDate, "year");
      setAge(calculatedAge);
    }
  };

  const [showInsuranceForm, setShowInsuranceForm] = useState(false);

  const handleInsuranceChange = (event) => {
    setShowInsuranceForm(event.target.value === "yes");
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Container
        sx={{
          maxWidth: "100% !important",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
          marginLeft: "0 !important",
          marginRight: "0 !important",
        }}
      >
        <Paper elevation={3} sx={{ padding: 2, marginTop: 3 }}>
          <Box
            sx={{
              backgroundColor: "#49a3f1",
              paddingLeft: 1,
            }}
          >
            <Typography style={{ color: "white", fontWeight: "bold" }} gutterBottom>
              <p className="text-base font-semibold mr-2">Personal Information</p>
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Grid container sx={{ marginTop: 1 }} spacing={2}>
              <Grid item xs={6} sm={3}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p className="text-xs font-semibold text-end mr-2" style={{ width: "150px" }}>
                    Patient ID:
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: "#e0e0e0",
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
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p className="text-xs font-semibold text-end mr-2" style={{ width: "100px" }}>
                    Full Name:
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: "#e0e0e0",
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
              <Grid item xs={6} sm={3}>
                <div className="flex items-center space-x-4">
                  {/* Label */}
                  <p
                    htmlFor="gender"
                    className="text-xs font-semibold text-end"
                    style={{ width: "200px" }}
                  >
                    Gender:
                  </p>

                  {/* Select Menu */}
                  <select
                    id="gender"
                    name="gender"
                    className="block w-full h-7 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    {/* Fetch options from the lab system */}
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </Grid>

              {/* Martial Status */}
              <Grid item xs={6} sm={3}>
                <div className="flex items-center space-x-4">
                  {/* Label */}
                  <p
                    htmlFor="maritial-status"
                    className="text-xs font-semibold text-end"
                    style={{ width: "200px" }}
                  >
                    Maritial Status:
                  </p>

                  {/* Select Menu */}
                  <select
                    id="maritial-status"
                    name="maritial-status"
                    className="block w-44 h-7 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                <Grid item xs={6} sm={3}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <p className="text-xs font-semibold text-end mr-2" style={{ width: "150px" }}>
                      Date of Birth:
                    </p>
                    <DatePicker
                      value={dob}
                      onChange={(newDate) => handleDateChange(newDate)}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth variant="outlined" />
                      )}
                    />
                  </Box>
                </Grid>

                {/* Age */}
                <Grid item xs={6} sm={3}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <p className="text-xs font-semibold text-end mr-2" style={{ width: "100px" }}>
                      Age:
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
                        "& .MuiOutlinedInput-input": {
                          height: "0.5rem",
                        },
                      }}
                    />
                  </Box>
                </Grid>
              </LocalizationProvider>

              <Grid item xs={6} sm={6}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p className="text-xs font-semibold text-end mr-2" style={{ width: "120px" }}>
                    Nationality:
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: "#e0e0e0",
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
                backgroundColor: "#49a3f1",
                paddingLeft: 1,
                marginTop: 2,
              }}
            >
              <Typography style={{ color: "white", fontWeight: "bold" }} gutterBottom>
                <p className="text-base font-semibold mr-2">Contact Information</p>
              </Typography>
            </Box>

            <Grid container sx={{ marginTop: 1 }} spacing={2}>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p className="text-xs font-semibold text-end mr-2" style={{ width: "240px" }}>
                    Address:
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: "#e0e0e0",
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

              <Grid item xs={12} sm={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p className="text-xs font-semibold text-end mr-2" style={{ width: "400px" }}>
                    City:
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: "#e0e0e0",
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

              <Grid item xs={12} sm={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p className="text-xs font-semibold text-end mr-2" style={{ width: "200px" }}>
                    Area:
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: "#e0e0e0",
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

              <Grid item xs={12} sm={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p
                    className="flex flex-row items-center text-xs font-semibold text-end"
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
                      "& .MuiOutlinedInput-input": {
                        height: "0.5rem",
                      },
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p className="text-xs font-semibold text-end mr-2" style={{ width: "400px" }}>
                    Alternate phone number:
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: "#e0e0e0",
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

              <Grid item xs={12} sm={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p className="text-xs font-semibold text-end mr-2" style={{ width: "200px" }}>
                    Email Address:
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: "#e0e0e0",
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
                backgroundColor: "#49a3f1",
                paddingLeft: 1,
                marginTop: 2,
              }}
            >
              <Typography style={{ color: "white", fontWeight: "bold" }} gutterBottom>
                <p className="text-base font-semibold mr-2">Emergency Contact Information</p>
              </Typography>
            </Box>

            <Grid container sx={{ marginTop: 1 }} spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p
                    className="flex flex-row items-center text-xs font-semibold text-end"
                    style={{ width: "500px" }}
                  >
                    Emergency Contact Name:<span className="text-red-600 text-lg mx-2">*</span>
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: "#e0e0e0",
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

              {/* Relationship to Patient */}
              <Grid item xs={6} sm={6}>
                <div className="flex items-center space-x-4">
                  {/* Label */}
                  <p
                    htmlFor="relationship"
                    className="text-xs font-semibold text-end"
                    style={{ width: "500px" }}
                  >
                    Relationship to Patient:
                  </p>

                  {/* Select Menu */}
                  <select
                    id="relationship"
                    name="relationship"
                    className="block w-full h-10 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="Parent">Parent</option>
                    <option value="Sibling">Sibling</option>
                    <option value="Spouse">Spouse</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p
                    className="flex flex-row items-center text-xs font-semibold text-end mr-2"
                    style={{ width: "500px" }}
                  >
                    Emergency Contact Phone Number:
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: "#e0e0e0",
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

              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p
                    className="flex flex-row items-center text-xs font-semibold text-end mr-2"
                    style={{ width: "500px" }}
                  >
                    Alternate Emergency Contact Phone Number:
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: "#e0e0e0",
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

            {/* Insurance Information Heading */}
            <Box
              sx={{
                backgroundColor: "#49a3f1",
                paddingLeft: 1,
                marginTop: 2,
              }}
            >
              <Typography style={{ color: "white", fontWeight: "bold" }} gutterBottom>
                <p className="text-base font-semibold mr-2">Insurance Information</p>
              </Typography>
            </Box>

            {/* Radio Group for Yes/No Option */}
            <Box className="flex flex-row" sx={{ marginTop: 2, alignItems: "center" }}>
              <Typography
                className="flex flex-row items-center"
                sx={{ marginRight: "0.75rem" }}
                gutterBottom
              >
                <p className="text-xs font-semibold text-end mr-2">Do you have insurance?</p>
              </Typography>
              <RadioGroup
                row
                name="insurance"
                value={showInsuranceForm ? "yes" : "no"}
                onChange={handleInsuranceChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </Box>

            {/* Insurance Form Fields (Show/Hide based on Yes/No) */}
            {showInsuranceForm && (
              <Grid container sx={{ marginTop: 1 }} spacing={2}>
                {/* Insurance Provider */}
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <p className="text-xs font-semibold text-end mr-2" style={{ width: "300px" }}>
                      Insurance Provider:
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

                {/* Insurance Policy Number */}
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <p className="text-xs font-semibold text-end mr-2" style={{ width: "400px" }}>
                      Insurance Policy Number:
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

                {/* Insurance Group Number */}
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <p className="text-xs font-semibold text-end mr-2" style={{ width: "300px" }}>
                      Insurance Group Number:
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

                {/* Policyholder Name */}
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <p className="text-xs font-semibold text-end mr-2" style={{ width: "400px" }}>
                      Policyholder Name:
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

                {/* Policyholder Relationship */}
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <p className="text-xs font-semibold text-end mr-2" style={{ width: "300px" }}>
                      Policyholder Relationship:
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

            {/* Identification Information Heading */}
            <Box
              sx={{
                backgroundColor: "#49a3f1",
                paddingLeft: 1,
                marginTop: 2,
              }}
            >
              <Typography style={{ color: "white", fontWeight: "bold" }} gutterBottom>
                <p className="text-base font-semibold mr-2">Identification Information</p>
              </Typography>
            </Box>

            {/* Identification Form Fields */}
            <Grid container sx={{ marginTop: 1 }} spacing={2}>
              {/* National ID Number/SSN */}
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p className="text-xs font-semibold text-end mr-2" style={{ width: "300px" }}>
                    National ID Number/SSN:
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: "#e0e0e0",
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

              {/* Passport Number */}
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p className="text-xs font-semibold text-end mr-2" style={{ width: "400px" }}>
                    Passport Number:
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: "#e0e0e0",
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

              {/* Driver’s License Number */}
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p className="text-xs font-semibold text-end mr-2" style={{ width: "300px" }}>
                    Driver’s License Number:
                  </p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: "#e0e0e0",
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

              {/* Photo ID Upload */}
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p className="text-xs font-semibold text-end mr-2" style={{ width: "400px" }}>
                    Photo ID:
                  </p>
                  <TextField
                    type="file"
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
                  <p className="text-xs">Save</p>
                </MDButton>
              </Grid>
              <Grid item sx={{ marginRight: 1 }}>
                <MDButton variant="gradient" color="info">
                  <p className="text-xs">Save and Print Card</p>
                </MDButton>
              </Grid>
              <Grid item>
                <MDButton variant="gradient" color="light">
                  <p className="text-xs">Clear</p>
                </MDButton>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </DashboardLayout>
  );
}

export default PatientRegistration;
