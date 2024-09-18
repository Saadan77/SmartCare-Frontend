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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RiCheckboxCircleFill } from "react-icons/ri";
import { MdEmergency, MdHealthAndSafety } from "react-icons/md";

import { createEmergencyCase } from "services/EmergencyCase";
import { useToken } from "layouts/authentication/sign-in/token";

function EmergencyCase() {
  const [showPatientInfo, setShowPatientInfo] = useState("fastTrack");

  const handleVisitChange = (event) => {
    setShowPatientInfo(event.target.value);
  };

  const [activeSection, setActiveSection] = useState("visitCategory");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const { token } = useToken();

  const [emergencyCase, setEmergencyCase] = useState({
    patientId: "",
    fullName: "",
    gender: "",
    maritalStatus: "",
    dob: "",
    age: "",
    phoneNo: "",
    pulse: "",
    bloodPressure: "",
    respiratoryRate: "",
    oxygenSaturation: "",
    temperature: "",
    painLevel: "",
    levelOfConsciousness: "",
    capillaryRefillTime: "",
    bloodGlucoseLevel: "",
    severityLevel: "",
    medication: "",
    tests: "",
    treatment: "",
    diagnosis: "",
    instructions: "",
    referTo: "",
    refferalReason: "",
    surgeryType: "",
    recoveryStatus: "",
    room: "",
    preOpNotes: "",
    postOpNotes: "",
    isActive: true,
    createdBy: null,
    createdDate: new Date().toISOString().slice(0, 19).replace("T", " "),
    updateBy: null,
    updatedDate: new Date().toISOString().slice(0, 19).replace("T", " "),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmergencyCase({
      ...emergencyCase,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const saveEmergencyCase = {
        patientId: emergencyCase.patientId,
        fullName: emergencyCase.fullName,
        gender: emergencyCase.gender,
        maritalStatus: emergencyCase.maritalStatus,
        dob: emergencyCase.dob,
        age: emergencyCase.age,
        phoneNo: emergencyCase.phoneNo,
        pulse: emergencyCase.pulse,
        bloodPressure: emergencyCase.bloodPressure,
        respiratoryRate: emergencyCase.respiratoryRate,
        oxygenSaturation: emergencyCase.oxygenSaturation,
        temperature: emergencyCase.temperature,
        painLevel: emergencyCase.painLevel,
        levelOfConsciousness: emergencyCase.levelOfConsciousness,
        capillaryRefillTime: emergencyCase.capillaryRefillTime,
        bloodGlucoseLevel: emergencyCase.bloodGlucoseLevel,
        severityLevel: emergencyCase.severityLevel,
        medication: emergencyCase.medication,
        tests: emergencyCase.tests,
        treatment: emergencyCase.treatment,
        diagnosis: emergencyCase.diagnosis,
        instructions: emergencyCase.instructions,
        surgeryType: emergencyCase.surgeryType,
        recoveryStatus: emergencyCase.recoveryStatus,
        room: emergencyCase.room,
        preOpNotes: emergencyCase.preOpNotes,
        postOpNotes: emergencyCase.postOpNotes,
        isActive: emergencyCase.isActive,
        createdBy: emergencyCase.createdBy,
        createdDate: emergencyCase.createdDate,
        updateBy: emergencyCase.updateBy,
        updatedDate: emergencyCase.updatedDate,
      };

      await createEmergencyCase(saveEmergencyCase, token);
      toast.success("Emergency case registered.");

      setEmergencyCase({
        patientId: "",
        fullName: "",
        gender: "",
        maritalStatus: "",
        dob: "",
        age: "",
        phoneNo: "",
        pulse: "",
        bloodPressure: "",
        respiratoryRate: "",
        oxygenSaturation: "",
        temperature: "",
        painLevel: "",
        levelOfConsciousness: "",
        capillaryRefillTime: "",
        bloodGlucoseLevel: "",
        severityLevel: "",
        medication: "",
        tests: "",
        treatment: "",
        diagnosis: "",
        instructions: "",
        referTo: "",
        refferalReason: "",
        surgeryType: "",
        recoveryStatus: "",
        room: "",
        preOpNotes: "",
        postOpNotes: "",
        isActive: true,
        createdBy: null,
        createdDate: new Date().toISOString().slice(0, 19).replace("T", " "),
        updateBy: null,
        updatedDate: new Date().toISOString().slice(0, 19).replace("T", " "),
      });
    } catch (error) {
      console.error("Error creating emergency case:", error.message);
      toast.error("Failed to register emergency case.");
    }
  };

  const [dob, setDob] = React.useState(null);

  const handleDateChange = (newDate) => {
    emergencyCase.dob = setDob(newDate);
    if (newDate) {
      const calculatedAge = dayjs().diff(newDate, "year");
      emergencyCase.age = calculatedAge;
    }
  };

  return (
    <DashboardLayout>
      <ToastContainer />
      <DashboardNavbar />
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }} className="h-screen">
        <section id="nav">
          <nav className="w-full mb-3">
            <div>
              <div className="flex items-center">
                <Grid container>
                  {/* Navigation Links */}
                  <Grid
                    item
                    sm={4}
                    onClick={() => handleSectionClick("visitCategory")}
                    className={`cursor-pointer ${
                      activeSection === "visitCategory" ? "text-[#1694c4]" : ""
                    }`}
                  >
                    <div className="border border-gray-300 group h-10 flex items-center relative">
                      <RiCheckboxCircleFill className="h-5 w-5 mx-2" aria-hidden="true" />
                      <a href="#visitCategory" className={`font-semibold text-xs relative`}>
                        Visit Category
                      </a>
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                          activeSection === "visitCategory" ? "scale-x-100" : "scale-x-0"
                        } transition-transform duration-300`}
                      ></span>
                    </div>
                  </Grid>

                  <Grid
                    item
                    sm={4}
                    onClick={() => handleSectionClick("vitals")}
                    className={`cursor-pointer ${
                      activeSection === "vitals" ? "text-[#1694c4]" : ""
                    }`}
                  >
                    <div className="border border-gray-300 group h-10 flex items-center relative">
                      <MdEmergency className="h-5 w-5 mx-2" aria-hidden="true" />
                      <a href="#vitals" className={`font-semibold text-xs relative`}>
                        Vitals
                      </a>
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                          activeSection === "vitals" ? "scale-x-100" : "scale-x-0"
                        } transition-transform duration-300`}
                      ></span>
                    </div>
                  </Grid>

                  <Grid
                    item
                    sm={4}
                    onClick={() => handleSectionClick("operationTheater")}
                    className={`cursor-pointer ${
                      activeSection === "operationTheater" ? "text-[#1694c4]" : ""
                    }`}
                  >
                    <div className="border border-gray-300 group h-10 flex items-center relative">
                      <MdHealthAndSafety className="h-5 w-5 mx-2" aria-hidden="true" />
                      <a href="#operationTheater" className={`font-semibold text-xs relative`}>
                        Operation Theater
                      </a>
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                          activeSection === "operationTheater" ? "scale-x-100" : "scale-x-0"
                        } transition-transform duration-300`}
                      ></span>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </nav>
        </section>

        <form onSubmit={handleSubmit}>
          {activeSection === "visitCategory" && (
            <>
              {/* Visit Category */}
              <Box
                sx={{
                  paddingLeft: 1,
                  marginTop: 2,
                }}
              >
                <Typography style={{ fontWeight: "bold" }} gutterBottom>
                  <p className="text-base text-[#1694c4] font-semibold mr-2">Visit Category</p>
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

              <Box
                sx={{
                  paddingLeft: 1,
                  marginTop: 2,
                }}
              >
                <Typography style={{ fontWeight: "bold" }} gutterBottom>
                  <p className="text-base text-[#1694c4] font-semibold mr-2">
                    Personal Information
                  </p>
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
                        name="patientId"
                        value="000001-08-09-2024"
                        onChange={handleInputChange}
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
                        name="patientId"
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
                        name="fullName"
                        value={emergencyCase.fullName}
                        onChange={handleInputChange}
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
                        value={emergencyCase.gender}
                        onChange={handleInputChange}
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
                        value={emergencyCase.maritalStatus}
                        onChange={handleInputChange}
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
                              name="dob"
                              fullWidth
                              variant="outlined"
                              value={emergencyCase.dob}
                              onChange={handleInputChange}
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
                          name="age"
                          fullWidth
                          value={emergencyCase.age}
                          onChange={handleInputChange}
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
                        fullWidth
                        name="phone"
                        value={emergencyCase.phone}
                        onChange={handleInputChange}
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
                  marginTop: 2,
                }}
              >
                <Typography style={{ fontWeight: "bold" }} gutterBottom>
                  <p className="text-base text-[#1694c4] font-semibold mr-2">Add Vitals</p>
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
                    <div className="flex items-center">
                      <TextField
                        variant="outlined"
                        name="pulse"
                        value={emergencyCase.pulse}
                        onChange={handleInputChange}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1,
                          },
                          "& .MuiOutlinedInput-input": {
                            height: "0.5rem",
                          },
                        }}
                      />
                      <p className="text-sm ml-2">pm</p>
                    </div>
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
                    <div className="flex items-center">
                      <TextField
                        variant="outlined"
                        name="bloodPressure"
                        value={emergencyCase.bloodPressure}
                        onChange={handleInputChange}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1,
                          },
                          "& .MuiOutlinedInput-input": {
                            height: "0.5rem",
                          },
                        }}
                      />
                      <p className="text-sm ml-2">mmHg</p>
                    </div>
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
                    <div className="flex items-center">
                      <TextField
                        variant="outlined"
                        name="respiratoryRate"
                        value={emergencyCase.respiratoryRate}
                        onChange={handleInputChange}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1,
                          },
                          "& .MuiOutlinedInput-input": {
                            height: "0.5rem",
                          },
                        }}
                      />
                      <p className="text-sm ml-2">pm</p>
                    </div>
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
                      name="oxygenSaturation"
                      value={emergencyCase.oxygenSaturation}
                      onChange={handleInputChange}
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
                    <div className="flex items-center">
                      <TextField
                        variant="outlined"
                        name="temperature"
                        value={emergencyCase.temperature}
                        onChange={handleInputChange}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1,
                          },
                          "& .MuiOutlinedInput-input": {
                            height: "0.5rem",
                          },
                        }}
                      />
                      <p className="text-sm ml-2">C</p>
                    </div>
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
                      name="painLevel"
                      value={emergencyCase.painLevel}
                      onChange={handleInputChange}
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
                      name="levelOfConsciousness"
                      value={emergencyCase.levelOfConsciousness}
                      onChange={handleInputChange}
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
                    <div className="flex items-center">
                      <TextField
                        variant="outlined"
                        name="capillaryRefillTime"
                        value={emergencyCase.capillaryRefillTime}
                        onChange={handleInputChange}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1,
                          },
                          "& .MuiOutlinedInput-input": {
                            height: "0.5rem",
                          },
                        }}
                      />
                      <p className="text-sm ml-2">sec</p>
                    </div>
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
                    <div className="flex items-center">
                      <TextField
                        variant="outlined"
                        name="bloodGlucoseLevel"
                        value={emergencyCase.bloodGlucoseLevel}
                        onChange={handleInputChange}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1,
                          },
                          "& .MuiOutlinedInput-input": {
                            height: "0.5rem",
                          },
                        }}
                      />
                      <p className="text-sm ml-2">mg/dl</p>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </>
          )}

          {activeSection === "vitals" && (
            <>
              {/* Vital Details Section */}
              <Box
                sx={{
                  paddingLeft: 1,
                  marginTop: 2,
                }}
              >
                <Typography style={{ fontWeight: "bold" }} gutterBottom>
                  <p className="text-base text-[#1694c4] font-semibold mr-2">Vital Details</p>
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
                  <div>
                    <p className="text-xs mb-2">Severity Level:</p>

                    {/* Select Menu */}
                    <select
                      name="severityLevel"
                      value={emergencyCase.severityLevel}
                      onChange={handleInputChange}
                      className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                  <div>
                    {/* Label */}
                    <p htmlFor="medication" className="text-xs mb-2">
                      Medication:
                    </p>

                    {/* Select Menu */}
                    <select
                      name="medication"
                      value={emergencyCase.medication}
                      onChange={handleInputChange}
                      className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                  <div>
                    {/* Label */}
                    <p htmlFor="tests" className="text-xs mb-2">
                      Lab Tests Ordered:
                    </p>

                    {/* Select Menu */}
                    <select
                      name="tests"
                      className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                      name="treatment"
                      value={emergencyCase.treatment}
                      onChange={handleInputChange}
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
                      name="diagnosis"
                      value={emergencyCase.diagnosis}
                      onChange={handleInputChange}
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
                      name="instructions"
                      value={emergencyCase.instructions}
                      onChange={handleInputChange}
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
              </Grid>

              <Box
                sx={{
                  paddingLeft: 1,
                  marginTop: 2,
                }}
              >
                <Typography style={{ fontWeight: "bold" }} gutterBottom>
                  <p className="text-base text-[#1694c4] font-semibold mr-2">
                    Interdepartmental Referrals
                  </p>
                </Typography>
              </Box>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={6} sm={6}>
                  <div>
                    {/* Label */}
                    <p htmlFor="referTo" className="text-xs mb-2">
                      Refer to:
                    </p>

                    {/* Select Menu */}
                    <select
                      id="referTo"
                      name="referTo"
                      value={emergencyCase.referTo}
                      onChange={handleInputChange}
                      className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                      fullWidth
                      name="refferalReason"
                      value={emergencyCase.refferalReason}
                      onChange={handleInputChange}
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
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<CheckBox />}
                    label="Automatically Schedule Follow-up"
                  />
                </Grid>
              </Grid>
            </>
          )}

          {activeSection === "operationTheater" && (
            <>
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
                      name="surgeryType"
                      value={emergencyCase.surgeryType}
                      onChange={handleInputChange}
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
                <Grid item xs={6} sm={3}>
                  <Box>
                    <p className="text-xs mb-2">Recovery Status:</p>
                    <TextField
                      variant="outlined"
                      fullWidth
                      name="recoveryStatus"
                      value={emergencyCase.recoveryStatus}
                      onChange={handleInputChange}
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
                      fullWidth
                      name="room"
                      value={emergencyCase.room}
                      onChange={handleInputChange}
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
                      fullWidth
                      name="preOpNotes"
                      value={emergencyCase.preOpNotes}
                      onChange={handleInputChange}
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
                      fullWidth
                      name="postOpNotes"
                      value={emergencyCase.postOpNotes}
                      onChange={handleInputChange}
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
            </>
          )}

          <Grid container sx={{ marginTop: 1, justifyContent: "end" }} spacing={2}>
            <Grid item sx={{ marginRight: 1 }}>
              <MDButton style={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="info">
                <button onClick={handleSubmit} type="submit" className="text-xs">
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
