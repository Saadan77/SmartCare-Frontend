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

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const getPatientCountForToday = (patients) => {
    const today = formatDate(new Date());
    return (
      patients.filter((patient) => {
        const registrationDate = new Date(patient.createdDate);
        return formatDate(registrationDate) === today;
      }).length + 1
    );
  };

  useEffect(() => {
    if (!token) {
      console.log("Token is not available yet.");
      return;
    }
    const fetchData = async () => {
      try {
        const reponsePatients = await fetchPatients(token);
        setPatients(reponsePatients || []);

        const count = getPatientCountForToday(reponsePatients || []);
        const newPatientId = `${count.toString().padStart(5, "0")}-${formatDate(new Date())}`;
        setPatient((prev) => ({ ...prev, patientId: newPatientId }));
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

    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    const currentRegistrationDate = new Date().toISOString().slice(0, 19).replace("T", " ");

    e.preventDefault();
    try {
      const savePatient = {
        patientId: patient.patientId,
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
        isActive: patient.isActive,
        createdBy: patient.createdBy,
        createdDate: currentRegistrationDate,
        updateBy: patient.updateBy,
        updatedDate: currentRegistrationDate,
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
        isActive: true,
        createdBy: null,
        createdDate: currentRegistrationDate,
        updateBy: null,
        updatedDate: currentRegistrationDate,
      });
    } catch (error) {
      console.error("Error creating patient:", error.message);
      toast.error("Failed to register patient.");
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
        isActive: true,
        createdBy: null,
        createdDate: new Date().toISOString().slice(0, 19).replace("T", " "),
        updateBy: null,
        updatedDate: new Date().toISOString().slice(0, 19).replace("T", " "),
      });
      setShowInsuranceForm(false);
    },
    [setPatient, setShowInsuranceForm]
  );

  const [activeSection, setActiveSection] = useState("patientDetails");
  const [errors, setErrors] = useState({});

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleNextSection = () => {
    const newErrors = {};
    if (!patient.patientId) {
      newErrors.patientId = "Patient ID is required";
    }
    if (!patient.fullName) {
      newErrors.fullName = "Full Name is required";
    }
    if (!patient.dob) {
      newErrors.dob = "Date of birth is required";
    }
    if (!patient.age) {
      newErrors.age = "Age is required";
    }
    if (!patient.gender) {
      newErrors.gender = "Gender is required";
    }
    if (!patient.maritalStatus) {
      newErrors.maritalStatus = "Maritial status is required";
    }
    if (!patient.phoneNo) {
      newErrors.phoneNo = "Phone number is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Current section:", activeSection);
      if (activeSection === "patientDetails") {
        setActiveSection("emergencyInfo");
      } else if (activeSection === "emergencyInfo") {
        setActiveSection("insuranceDetails");
      }
    }
  };

  const handleDateChange = (newDate) => {
    if (newDate) {
      const calculatedAge = dayjs().diff(newDate, "year");

      setPatient((prevPatient) => ({
        ...prevPatient,
        dob: newDate,
        age: calculatedAge,
      }));

      setErrors((prevErrors) => ({
        ...prevErrors,
        dob: "",
        age: "",
      }));
    } else {
      setPatient((prevPatient) => ({
        ...prevPatient,
        dob: "",
        age: "",
      }));
    }
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
        <Paper
          elevation={3}
          sx={{ padding: 2, marginTop: 3, position: "relative" }}
          className="h-screen"
        >
          <section id="nav">
            <nav className="w-full mb-3">
              <div>
                <div className="flex items-center">
                  <Grid container>
                    {/* Navigation Links */}
                    <Grid
                      item
                      sm={4}
                      onClick={() => handleSectionClick("patientDetails")}
                      className={`cursor-pointer ${
                        activeSection === "patientDetails" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 flex items-center relative">
                        <RiCheckboxCircleFill className="h-5 w-5 mx-2" aria-hidden="true" />
                        <a href="#patientDetails" className={`font-semibold text-xs relative`}>
                          Patient Details
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeSection === "patientDetails" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={4}
                      onClick={() => handleSectionClick("emergencyInfo")}
                      className={`cursor-pointer ${
                        activeSection === "emergencyInfo" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 flex items-center relative">
                        <MdEmergency className="h-5 w-5 mx-2" aria-hidden="true" />
                        <a href="#emergencyInfo" className={`font-semibold text-xs relative`}>
                          Emergency Information
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeSection === "emergencyInfo" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={4}
                      onClick={() => handleSectionClick("insuranceDetails")}
                      className={`cursor-pointer ${
                        activeSection === "insuranceDetails" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 flex items-center relative">
                        <MdHealthAndSafety className="h-5 w-5 mx-2" aria-hidden="true" />
                        <a href="#insuranceDetails" className={`font-semibold text-xs relative`}>
                          Insurance Details
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeSection === "insuranceDetails" ? "scale-x-100" : "scale-x-0"
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
            {activeSection === "patientDetails" && (
              <>
                <Box>
                  <Typography style={{ fontWeight: "bold" }} gutterBottom>
                    <p className="text-base text-[#42424a] font-semibold mr-2">
                      Personal Information
                    </p>
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
                      <p className="flex flex-row text-xs items-center">
                        Patient ID:<span className="text-red-600 text-base mx-2">*</span>
                      </p>
                      <TextField
                        variant="outlined"
                        fullWidth
                        name="patientId"
                        readOnly
                        value={patient.patientId || ""}
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
                        required
                        value={patient.fullName}
                        onChange={handleInputChange}
                        error={!!errors.fullName}
                        helperText={errors.fullName}
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
                      {/* Label */}
                      <p htmlFor="gender" className="flex flex-row text-xs items-center">
                        Gender:<span className="text-red-600 text-base mx-2">*</span>
                      </p>

                      {/* Select Menu */}
                      <select
                        id="gender"
                        name="gender"
                        value={patient.gender}
                        onChange={handleInputChange}
                        required
                        className={`block w-full h-7 border ${
                          errors.gender ? "border-red-500" : "border-gray-300"
                        } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Transgender">Transgender</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.gender && (
                        <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
                      )}
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
                      <p htmlFor="maritalStatus" className="flex flex-row text-xs items-center">
                        Maritial Status:<span className="text-red-600 text-base mx-2">*</span>
                      </p>

                      {/* Select Menu */}
                      <select
                        id="maritalStatus"
                        name="maritalStatus"
                        required
                        value={patient.maritalStatus}
                        onChange={handleInputChange}
                        className={`block w-full h-7 border ${
                          errors.maritalStatus ? "border-red-500" : "border-gray-300"
                        } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      >
                        <option value="">Select Marriage Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                      </select>
                      {errors.maritalStatus && (
                        <p className="text-red-500 text-xs mt-1">{errors.maritalStatus}</p>
                      )}
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
                          onChange={(newDate) => handleDateChange(newDate)}
                          renderInput={(params) => (
                            <TextField
                              name="dob"
                              required
                              value={patient.dob}
                              onChange={handleInputChange}
                              {...params}
                              fullWidth
                              variant="outlined"
                              error={!!errors.dob}
                              helperText={errors.dob}
                            />
                          )}
                        />
                        {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
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
                          fullWidth
                          required
                          name="age"
                          onChange={handleInputChange}
                          value={patient.age}
                          error={!!errors.age}
                          helperText={errors.age}
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
                      <p className="text-xs mb-2">Nationality:</p>
                      <TextField
                        variant="outlined"
                        fullWidth
                        name="nationality"
                        value={patient.nationality}
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

                <Box
                  sx={{
                    marginTop: 2,
                  }}
                >
                  <Typography style={{ fontWeight: "bold" }} gutterBottom>
                    <p className="text-base text-[#42424a] font-semibold mr-2">
                      Contact Information
                    </p>
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
                      <p className="text-xs mb-2">Address:</p>
                      <TextField
                        variant="outlined"
                        fullWidth
                        name="address"
                        value={patient.address}
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
                      <p className="text-xs mb-2">City:</p>
                      <TextField
                        variant="outlined"
                        name="city"
                        value={patient.city}
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
                      <p className="text-xs mb-2">Area:</p>
                      <TextField
                        variant="outlined"
                        name="area"
                        value={patient.area}
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
                      <p className="flex flex-row text-xs items-center">
                        Phone number:<span className="text-red-600 text-base mx-2">*</span>
                      </p>
                      <TextField
                        variant="outlined"
                        name="phoneNo"
                        value={patient.phoneNo}
                        onChange={handleInputChange}
                        error={!!errors.phoneNo}
                        helperText={errors.phoneNo}
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
                      <p className="text-xs mb-2">Alternate phone number:</p>
                      <TextField
                        variant="outlined"
                        fullWidth
                        name="alternatePhoneNumber"
                        value={patient.alternatePhoneNumber}
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
                      <p className="text-xs mb-2">Email Address:</p>
                      <TextField
                        variant="outlined"
                        name="email"
                        value={patient.email}
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

                {/* Identification Information Heading */}
                <Box
                  sx={{
                    marginTop: 2,
                  }}
                >
                  <Typography style={{ fontWeight: "bold" }} gutterBottom>
                    <p className="text-base text-[#42424a] font-semibold mr-2">
                      Identification Information
                    </p>
                  </Typography>
                </Box>

                {/* Identification Form Fields */}
                <Grid container sx={{ marginTop: 1 }} spacing={2}>
                  {/* National ID Number/SSN */}
                  <Grid
                    item
                    xs={6}
                    sm={3}
                    sx={{
                      paddingTop: "5px !important",
                    }}
                  >
                    <Box>
                      <p className="text-xs mb-2">National ID Number/SSN:</p>
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

                  {/* Passport Number */}
                  <Grid
                    item
                    xs={6}
                    sm={3}
                    sx={{
                      paddingTop: "5px !important",
                    }}
                  >
                    <Box>
                      <p className="text-xs mb-2">Passport Number:</p>
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

                  {/* Driver’s License Number */}
                  <Grid
                    item
                    xs={6}
                    sm={3}
                    sx={{
                      paddingTop: "5px !important",
                    }}
                  >
                    <Box>
                      <p className="text-xs mb-2">Driver’s License Number:</p>
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

                  {/* Photo ID Upload */}
                  <Grid
                    item
                    xs={6}
                    sm={3}
                    sx={{
                      paddingTop: "5px !important",
                    }}
                  >
                    <Box>
                      <p className="text-xs mb-2">Photo ID:</p>
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
                </Grid>
                <Grid
                  container
                  sx={{
                    marginTop: 1,
                    justifyContent: "end",
                  }}
                  spacing={2}
                >
                  <Grid item sx={{ marginRight: 1 }}>
                    <MDButton
                      variant="gradient"
                      onClick={handleNextSection}
                      style={{
                        borderRadius: 0,
                        minHeight: 0,
                        backgroundColor: "#1694c4",
                        color: "White",
                      }}
                    >
                      <span className="text-xs">Continue</span>
                    </MDButton>
                  </Grid>
                  <Grid item>
                    <MDButton
                      sx={{ borderRadius: 0, minHeight: 0 }}
                      variant="gradient"
                      color="light"
                      onClick={(e) => handleClear(e)}
                    >
                      <span className="text-xs">Clear</span>
                    </MDButton>
                  </Grid>
                </Grid>
              </>
            )}

            {activeSection === "emergencyInfo" && (
              <>
                <Box
                  sx={{
                    marginTop: 2,
                  }}
                >
                  <Typography style={{ fontWeight: "bold" }} gutterBottom>
                    <p className="text-base text-[#42424a] font-semibold mr-2">
                      Emergency Contact Information
                    </p>
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
                      <p className="flex flex-row text-xs items-center">
                        Emergency Contact Name:
                        <span className="text-red-600 text-base mx-2">*</span>
                      </p>
                      <TextField
                        variant="outlined"
                        name="emergencyContactName"
                        value={patient.emergencyContactName}
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

                  {/* Relationship to Patient */}
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
                      <p htmlFor="relationship" className="text-xs mb-2">
                        Relationship:
                      </p>

                      {/* Select Menu */}
                      <select
                        id="relationship"
                        name="relationship"
                        value={patient.relationship}
                        onChange={handleInputChange}
                        className="block w-full h-7 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option value="Parent">Parent</option>
                        <option value="Sibling">Sibling</option>
                        <option value="Spouse">Spouse</option>
                        <option value="Other">Other</option>
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
                      <p className="text-xs mb-2">Emergency Contact Phone Number:</p>
                      <TextField
                        variant="outlined"
                        fullWidth
                        name="emergencyContactNo"
                        value={patient.emergencyContactNo}
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
                      <p className="text-xs mb-2">Alternate Emergency Contact Phone Number:</p>
                      <TextField
                        variant="outlined"
                        name="alternateEmergencyContactNo"
                        value={patient.alternateEmergencyContactNo}
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
                <Grid
                  container
                  sx={{
                    marginTop: 1,
                    justifyContent: "end",
                  }}
                  spacing={2}
                >
                  <Grid item sx={{ marginRight: 1 }}>
                    <MDButton
                      variant="gradient"
                      onClick={handleNextSection}
                      style={{
                        borderRadius: 0,
                        minHeight: 0,
                        backgroundColor: "#1694c4",
                        color: "White",
                      }}
                    >
                      <span className="text-xs">Continue</span>
                    </MDButton>
                  </Grid>
                  <Grid item>
                    <MDButton
                      sx={{ borderRadius: 0, minHeight: 0 }}
                      variant="gradient"
                      color="light"
                      onClick={(e) => handleClear(e)}
                    >
                      <span className="text-xs">Clear</span>
                    </MDButton>
                  </Grid>
                </Grid>
              </>
            )}

            {activeSection === "insuranceDetails" && (
              <>
                {/* Insurance Information Heading */}
                <Box
                  sx={{
                    marginTop: 2,
                  }}
                >
                  <Typography style={{ fontWeight: "bold" }} gutterBottom>
                    <p className="text-base text-[#42424a] font-semibold mr-2">
                      Insurance Information
                    </p>
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
                    <Grid
                      item
                      xs={6}
                      sm={3}
                      sx={{
                        paddingTop: "5px !important",
                      }}
                    >
                      <Box>
                        <p className="text-xs mb-2">Insurance Provider:</p>
                        <TextField
                          variant="outlined"
                          fullWidth
                          name="insuranceProvider"
                          value={patient.insuranceProvider}
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

                    {/* Insurance Policy Number */}
                    <Grid
                      item
                      xs={6}
                      sm={3}
                      sx={{
                        paddingTop: "5px !important",
                      }}
                    >
                      <Box>
                        <p className="text-xs mb-2">Insurance Policy Number:</p>
                        <TextField
                          variant="outlined"
                          name="insurancePolicyNo"
                          value={patient.insurancePolicyNumber}
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

                    {/* Insurance Group Number */}
                    <Grid
                      item
                      xs={6}
                      sm={3}
                      sx={{
                        paddingTop: "5px !important",
                      }}
                    >
                      <Box>
                        <p className="text-xs mb-2">Insurance Group Number:</p>
                        <TextField
                          variant="outlined"
                          fullWidth
                          name="insuranceGroupNo"
                          value={patient.insuranceGroupNo}
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

                    {/* Policyholder Name */}
                    <Grid
                      item
                      xs={6}
                      sm={3}
                      sx={{
                        paddingTop: "5px !important",
                      }}
                    >
                      <Box>
                        <p className="text-xs mb-2">Policyholder Name:</p>
                        <TextField
                          variant="outlined"
                          name="policyHolderName"
                          value={patient.policyHolderName}
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

                    {/* Policyholder Relationship */}
                    <Grid
                      item
                      xs={6}
                      sm={3}
                      sx={{
                        paddingTop: "5px !important",
                      }}
                    >
                      <Box>
                        <p className="text-xs mb-2">Policyholder Relationship:</p>
                        <TextField
                          variant="outlined"
                          fullWidth
                          name="policyHolderRelationship"
                          value={patient.policyHolderRelationship}
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
                <Grid
                  container
                  sx={{
                    marginTop: 1,
                    justifyContent: "end",
                  }}
                  spacing={2}
                >
                  <Grid item sx={{ marginRight: 1 }}>
                    <MDButton
                      variant="gradient"
                      style={{
                        borderRadius: 0,
                        minHeight: 0,
                        backgroundColor: "#1694c4",
                        color: "White",
                      }}
                    >
                      <button onClick={handleSubmit} type="submit" className="text-xs">
                        SAVE
                      </button>
                    </MDButton>
                  </Grid>
                  <Grid item>
                    <MDButton
                      sx={{ borderRadius: 0, minHeight: 0 }}
                      variant="gradient"
                      color="light"
                      onClick={(e) => handleClear(e)}
                    >
                      <span className="text-xs">Cancel</span>
                    </MDButton>
                  </Grid>
                </Grid>
              </>
            )}
          </form>
        </Paper>
      </Container>
    </DashboardLayout>
  );
}

export default PatientRegistration;
