import {
  TextField,
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDButton from "components/MDButton";
import { createPatient, fetchPatients } from "services/Patient";
import { useToken } from "layouts/authentication/sign-in/token";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RiCheckboxCircleFill } from "react-icons/ri";
import { MdEmergency, MdHealthAndSafety } from "react-icons/md";

function PatientRegistration() {
  const { token } = useToken();

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    if (!token) {
      console.log("Token is not available yet.");
      return;
    }
    const fetchData = async () => {
      try {
        if (token) {
          const reponsePatients = await fetchPatients(token);
          setPatients(reponsePatients || []);
          console.log(reponsePatients);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, [token]);

  const [patient, setPatient] = useState({
    fullName: "",
    gender: "",
    maritalStatus: "",
    dob: "",
    age: "",
    nationality: "",
    address: "",
    city: "",
    area: "",
    phoneNo: "",
    alternatePhoneNumber: "",
    email: "",
    emergencyContactName: "",
    relationship: "",
    emergencyContactNo: "",
    alternateEmergencyContactNo: "",
    insurance: "",
    insuranceProvider: "",
    insurancePolicyNumber: "",
    insuranceGroupNo: "",
    policyHolderName: "",
    policyHolderRelationship: "",
    nationalIdNo: "",
    passportNo: "",
    driverLicenseNo: "",
    photoId: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const savePatient = {
        fullName: patient.fullName,
        gender: patient.gender,
        maritalStatus: patient.maritalStatus,
        dob: patient.dob,
        age: patient.age,
        nationality: patient.nationality,
        address: patient.address,
        city: patient.city,
        area: patient.area,
        phoneNo: patient.phoneNo,
        alternatePhoneNumber: patient.alternatePhoneNumber,
        email: patient.email,
        emergencyContactName: patient.emergencyContactName,
        relationship: patient.relationship,
        emergencyContactNo: patient.emergencyContactNo,
        insurance: patient.insurance,
        insuranceProvider: patient.insuranceProvider,
        insurancePolicyNumber: patient.insurancePolicyNumber,
        insuranceGroupNo: patient.insuranceGroupNo,
        insuranceProvider: patient.insuranceProvider,
        policyHolderName: patient.policyHolderName,
        policyHolderRelationship: patient.policyHolderRelationship,
        nationalIdNo: patient.nationalIdNo,
        passportNo: patient.passportNo,
        driverLicenseNo: patient.driverLicenseNo,
        photoId: patient.photoId,
        registrationDate: patient.registrationDate,
        isActive: patient.isActive,
        createdBy: patient.createdBy,
        createdDate: patient.createdDate,
        updateBy: patient.updateBy,
        updatedDate: patient.updatedDate,
      };

      await createPatient(savePatient, token);
      toast.success("Patient registered successfully.");

      setPatient({
        fullName: "",
        gender: "",
        maritalStatus: "",
        dob: "",
        age: "",
        nationality: "",
        address: "",
        city: "",
        area: "",
        phoneNo: "",
        alternatePhoneNumber: "",
        email: "",
        emergencyContactName: "",
        relationship: "",
        emergencyContactNo: "",
        alternateEmergencyContactNo: "",
        insurance: "",
        insuranceProvider: "",
        insurancePolicyNumber: "",
        insuranceGroupNo: "",
        policyHolderName: "",
        policyHolderRelationship: "",
        nationalIdNo: "",
        passportNo: "",
        driverLicenseNo: "",
        photoId: "",
        registrationDate: new Date().toISOString().slice(0, 19).replace("T", " "),
        isActive: true,
        createdBy: null,
        createdDate: new Date().toISOString().slice(0, 19).replace("T", " "),
        updateBy: null,
        updatedDate: new Date().toISOString().slice(0, 19).replace("T", " "),
      });
    } catch (error) {
      console.error("Error creating patient:", error.message);
      toast.error("Failed to register patient.");
    }
  };

  const [dob, setDob] = React.useState(null);

  const handleDateChange = (newDate) => {
    patient.dob = setDob(newDate);
    if (newDate) {
      const calculatedAge = dayjs().diff(newDate, "year");
      patient.age = calculatedAge;
    }
  };

  const [showInsuranceForm, setShowInsuranceForm] = useState(false);

  const handleInsuranceChange = (event) => {
    setShowInsuranceForm(event.target.value === "yes");
  };

  const handleClear = useCallback(
    (e) => {
      e.preventDefault();
      setPatient({
        fullName: "",
        gender: "",
        maritalStatus: "",
        dob: "",
        age: "",
        nationality: "",
        address: "",
        city: "",
        area: "",
        phoneNo: "",
        alternatePhoneNumber: "",
        email: "",
        emergencyContactName: "",
        relationship: "",
        emergencyContactNo: "",
        alternateEmergencyContactNo: "",
        insurance: "",
        insuranceProvider: "",
        insurancePolicyNumber: "",
        insuranceGroupNo: "",
        policyHolderName: "",
        policyHolderRelationship: "",
        nationalIdNo: "",
        passportNo: "",
        driverLicenseNo: "",
        photoId: "",
        registrationDate: new Date().toISOString().slice(0, 19).replace("T", " "),
        isActive: true,
        createdBy: null,
        createdDate: new Date().toISOString().slice(0, 19).replace("T", " "),
        updateBy: null,
        updatedDate: new Date().toISOString().slice(0, 19).replace("T", " "),
      });
      setDob(null);
      setShowInsuranceForm(false);
    },
    [setPatient, setDob, setShowInsuranceForm]
  );

  const [activeSection, setActiveSection] = useState("patientDetails");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ToastContainer />
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
          <section id="nav">
            <nav className="w-full mb-3">
              <div>
                <div className="flex items-center">
                  <Grid container>
                    {/* Navigation Links */}
                    <Grid item sm={4}>
                      <div className="border border-gray-300 group h-10 flex items-center">
                        <RiCheckboxCircleFill className="h-5 w-5 mx-2" aria-hidden="true" />
                        <a
                          href="#patientDetails"
                          className={`text-heading font-heading font-semibold text-xs relative`}
                          onClick={() => handleSectionClick("patientDetails")}
                        >
                          Patient Details
                        </a>
                      </div>
                    </Grid>
                    <Grid item sm={4}>
                      <div className="border border-gray-300 group h-10 flex items-center">
                        <MdEmergency className="h-5 w-5 mx-2" aria-hidden="true" />
                        <a
                          href="#emergencyInfo"
                          className={`text-heading font-heading font-semibold text-xs relative`}
                          onClick={() => handleSectionClick("emergencyInfo")}
                        >
                          Emergency Information
                        </a>
                      </div>
                    </Grid>
                    <Grid item sm={4}>
                      <div className="border border-gray-300 group h-10 flex items-center">
                        <MdHealthAndSafety className="h-5 w-5 mx-2" aria-hidden="true" />
                        <a
                          href="#insuranceDetails"
                          className={`text-heading font-heading font-semibold text-xs relative`}
                          onClick={() => handleSectionClick("insuranceDetails")}
                        >
                          Insurance Details
                        </a>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </nav>
          </section>

          <form onSubmit={handleSubmit}>
            {activeSection === "patientDetails" && (
              <>
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
                      <p className="text-xs font-semibold mb-2">Patient ID:</p>
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

                  <Grid
                    item
                    xs={6}
                    sm={3}
                    sx={{
                      paddingTop: "5px !important",
                    }}
                  >
                    <Box>
                      <p className="text-xs font-semibold mb-2">Full Name:</p>
                      <TextField
                        variant="outlined"
                        fullWidth
                        name="fullName"
                        value={patient.fullName}
                        onChange={handleInputChange}
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
                      <p htmlFor="gender" className="text-xs font-semibold mb-2">
                        Gender:
                      </p>

                      {/* Select Menu */}
                      <select
                        id="gender"
                        name="gender"
                        value={patient.gender}
                        onChange={handleInputChange}
                        className="block w-3/4 h-7 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                      <p htmlFor="maritalStatus" className="text-xs font-semibold mb-2">
                        Maritial Status:
                      </p>

                      {/* Select Menu */}
                      <select
                        id="maritalStatus"
                        name="maritalStatus"
                        value={patient.maritalStatus}
                        onChange={handleInputChange}
                        className="block w-3/4 h-7 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                        <p className="text-xs font-semibold mb-2">Date of Birth:</p>
                        <DatePicker
                          value={dob}
                          onChange={(newDate) => handleDateChange(newDate)}
                          renderInput={(params) => (
                            <TextField
                              name="dob"
                              value={patient.dob}
                              {...params}
                              fullWidth
                              variant="outlined"
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
                        <p className="text-xs font-semibold mb-2">Age:</p>
                        <TextField
                          variant="outlined"
                          readOnly
                          fullWidth
                          name="age"
                          onChange={handleInputChange}
                          value={patient.age}
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

                  <Grid
                    item
                    xs={6}
                    sm={3}
                    sx={{
                      paddingTop: "5px !important",
                    }}
                  >
                    <Box>
                      <p className="text-xs font-semibold mb-2">Nationality:</p>
                      <TextField
                        variant="outlined"
                        fullWidth
                        name="nationality"
                        value={patient.nationality}
                        onChange={handleInputChange}
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
                  <Grid
                    item
                    xs={6}
                    sm={3}
                    sx={{
                      paddingTop: "5px !important",
                    }}
                  >
                    <Box>
                      <p className="text-xs font-semibold mb-2">Address:</p>
                      <TextField
                        variant="outlined"
                        fullWidth
                        name="address"
                        value={patient.address}
                        onChange={handleInputChange}
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

                  <Grid
                    item
                    xs={6}
                    sm={3}
                    sx={{
                      paddingTop: "5px !important",
                    }}
                  >
                    <Box>
                      <p className="text-xs font-semibold mb-2">City:</p>
                      <TextField
                        variant="outlined"
                        name="city"
                        value={patient.city}
                        onChange={handleInputChange}
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

                  <Grid
                    item
                    xs={6}
                    sm={3}
                    sx={{
                      paddingTop: "5px !important",
                    }}
                  >
                    <Box>
                      <p className="text-xs font-semibold mb-2">Area:</p>
                      <TextField
                        variant="outlined"
                        name="area"
                        value={patient.area}
                        onChange={handleInputChange}
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

                  <Grid
                    item
                    xs={6}
                    sm={3}
                    sx={{
                      paddingTop: "5px !important",
                    }}
                  >
                    <Box>
                      <p className="flex flex-row text-xs font-semibold mb-2">
                        Phone number:<span className="text-red-600 text-xs mx-2">*</span>
                      </p>
                      <TextField
                        variant="outlined"
                        name="phoneNo"
                        value={patient.phoneNo}
                        onChange={handleInputChange}
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

                  <Grid
                    item
                    xs={6}
                    sm={3}
                    sx={{
                      paddingTop: "5px !important",
                    }}
                  >
                    <Box>
                      <p className="text-xs font-semibold mb-2">Alternate phone number:</p>
                      <TextField
                        variant="outlined"
                        fullWidth
                        name="alternatePhoneNumber"
                        value={patient.alternatePhoneNumber}
                        onChange={handleInputChange}
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

                  <Grid
                    item
                    xs={6}
                    sm={3}
                    sx={{
                      paddingTop: "5px !important",
                    }}
                  >
                    <Box>
                      <p className="text-xs font-semibold mb-2">Email Address:</p>
                      <TextField
                        variant="outlined"
                        name="email"
                        value={patient.email}
                        onChange={handleInputChange}
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
                        name="nationalIdNo"
                        value={patient.nationalIdNo}
                        onChange={handleInputChange}
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
                        name="passportNo"
                        value={patient.passportNo}
                        onChange={handleInputChange}
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
                        name="driverLicenseNo"
                        value={patient.driverLicenseNo}
                        onChange={handleInputChange}
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
                        name="photoId"
                        value={patient.photoId}
                        onChange={handleInputChange}
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
              </>
            )}

            {activeSection === "emergencyInfo" && (
              <>
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
                        name="emergencyContactName"
                        value={patient.emergencyContactName}
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        className="text-xs font-semibold text-end"
                        style={{ width: "500px" }}
                      >
                        Relationship to Patient:
                      </p>

                      {/* Select Menu */}
                      <select
                        id="relationship"
                        name="relationship"
                        value={patient.relationship}
                        onChange={handleInputChange}
                        className="block w-full h-7 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                        name="emergencyContactNo"
                        value={patient.emergencyContactNo}
                        onChange={handleInputChange}
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
                        name="alternateEmergencyContactNo"
                        value={patient.alternateEmergencyContactNo}
                        onChange={handleInputChange}
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
              </>
            )}

            {activeSection === "insuranceDetails" && (
              <>
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
                        <p
                          className="text-xs font-semibold text-end mr-2"
                          style={{ width: "300px" }}
                        >
                          Insurance Provider:
                        </p>
                        <TextField
                          variant="outlined"
                          fullWidth
                          name="insuranceProvider"
                          value={patient.insuranceProvider}
                          onChange={handleInputChange}
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
                        <p
                          className="text-xs font-semibold text-end mr-2"
                          style={{ width: "400px" }}
                        >
                          Insurance Policy Number:
                        </p>
                        <TextField
                          variant="outlined"
                          name="insurancePolicyNo"
                          value={patient.insurancePolicyNo}
                          onChange={handleInputChange}
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
                        <p
                          className="text-xs font-semibold text-end mr-2"
                          style={{ width: "300px" }}
                        >
                          Insurance Group Number:
                        </p>
                        <TextField
                          variant="outlined"
                          fullWidth
                          name="insuranceGroupNo"
                          value={patient.insuranceGroupNo}
                          onChange={handleInputChange}
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
                        <p
                          className="text-xs font-semibold text-end mr-2"
                          style={{ width: "400px" }}
                        >
                          Policyholder Name:
                        </p>
                        <TextField
                          variant="outlined"
                          name="policyHolderName"
                          value={patient.policyHolderName}
                          onChange={handleInputChange}
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
                        <p
                          className="text-xs font-semibold text-end mr-2"
                          style={{ width: "300px" }}
                        >
                          Policyholder Relationship:
                        </p>
                        <TextField
                          variant="outlined"
                          fullWidth
                          name="policyHolderRelationship"
                          value={patient.policyHolderRelationship}
                          onChange={handleInputChange}
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
              </>
            )}

            <Grid container sx={{ marginTop: 1, justifyContent: "center" }} spacing={2}>
              <Grid item sx={{ marginRight: 1 }}>
                <MDButton variant="gradient" color="info">
                  <button onClick={handleSubmit} type="submit" className="text-xs">
                    Save
                  </button>
                </MDButton>
              </Grid>
              <Grid item sx={{ marginRight: 1 }}>
                <MDButton variant="gradient" color="info">
                  <p className="text-xs">Save and Print Card</p>
                </MDButton>
              </Grid>
              <Grid item>
                <MDButton variant="gradient" color="light" onClick={(e) => handleClear(e)}>
                  <span className="text-xs">Clear</span>
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
