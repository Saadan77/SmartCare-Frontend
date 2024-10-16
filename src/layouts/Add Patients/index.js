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
  Checkbox,
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

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Webcam from "react-webcam";

import { useNavigate } from "react-router-dom";
import MDBox from "components/MDBox";
import PatientTable from "layouts/dashboard/patientTable";

import { usePatientContext } from "services/Patient";

function AddPatient() {
  // const { newPatientId } = usePatientContext();

  // const { token } = useToken();

  // const navigate = useNavigate();

  const [patient, setPatient] = useState({
    gender: "",
    dob: "",
    age: "",
    firstName: "",
    middleName: "",
    lastName: "",
    maritalStatus: "",
    bloodGroup: "",
    cnicNo: "",
    nationality: "",
    email: "",
    mobile: "",
    referenceMobile: "",
    organization: "",
    patientId: "",
    country: "",
    province: "",
    district: "",
    city: "",
    address: "",
    relationship: "",
    kinFirstName: "",
    kinMiddleName: "",
    kinLastName: "",
    kinCountry: "",
    kinProvince: "",
    kinDistrict: "",
    kinCity: "",
    kinAddress: "",
  });

  // useEffect(() => {
  //   if (newPatientId) {
  //     setPatient((prev) => ({ ...prev, patientId: newPatientId }));
  //   }
  // }, [newPatientId]);

  const [errors, setErrors] = useState({});

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

    if (name === "firstName") {
      const regex = /^[a-zA-Z\s]*$/;
      if (!regex.test(value)) {
        setErrors({
          ...errors,
          firstName: "Only alphabets are allowed",
        });
      } else {
        setErrors({ ...errors, firstName: "" });
      }
    }

    if (name === "lastName") {
      const regex = /^[a-zA-Z\s]*$/;
      if (!regex.test(value)) {
        setErrors({
          ...errors,
          lastName: "Only alphabets are allowed",
        });
      } else {
        setErrors({ ...errors, lastName: "" });
      }
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const currentDate = new Date();

  //   try {
  //     const savePatient = {
  //       patientId: patient.patientId,
  //       fullName: patient.fullName,
  //       gender: patient.gender,
  //       maritalStatus: patient.maritalStatus,
  //       dob: patient.dob,
  //       age: patient.age,
  //       nationality: patient.nationality,
  //       address: patient.address,
  //       city: patient.city,
  //       area: patient.area,
  //       phoneNo: patient.phoneNo,
  //       alternatePhoneNumber: patient.alternatePhoneNumber,
  //       email: patient.email,
  //       emergencyContactName: patient.emergencyContactName,
  //       relationship: patient.relationship,
  //       emergencyContactNo: patient.emergencyContactNo,
  //       insurance: patient.insurance,
  //       insuranceProvider: patient.insuranceProvider,
  //       insurancePolicyNumber: patient.insurancePolicyNumber,
  //       insuranceGroupNo: patient.insuranceGroupNo,
  //       insuranceProvider: patient.insuranceProvider,
  //       policyHolderName: patient.policyHolderName,
  //       policyHolderRelationship: patient.policyHolderRelationship,
  //       nationalIdNo: patient.nationalIdNo,
  //       passportNo: patient.passportNo,
  //       driverLicenseNo: patient.driverLicenseNo,
  //       photoId: patient.photoId,
  //       registrationDate: currentDate,
  //       isActive: true,
  //       createdBy: null,
  //       createdDate: currentDate,
  //       updateBy: patient.updateBy,
  //       updatedDate: currentDate,
  //     };

  //     await createPatient(savePatient, token);
  //     toast.success("Patient registered successfully.");
  //     navigate("/dashboard/patients");

  //     setPatient({
  //       patientId: "",
  //       fullName: "",
  //       gender: "",
  //       maritalStatus: "",
  //       dob: "",
  //       age: "",
  //       nationality: "",
  //       address: "",
  //       city: "",
  //       area: "",
  //       phoneNo: "",
  //       alternatePhoneNumber: "",
  //       email: "",
  //       emergencyContactName: "",
  //       relationship: "",
  //       emergencyContactNo: "",
  //       alternateEmergencyContactNo: "",
  //       insurance: "",
  //       insuranceProvider: "",
  //       insurancePolicyNumber: "",
  //       insuranceGroupNo: "",
  //       policyHolderName: "",
  //       policyHolderRelationship: "",
  //       nationalIdNo: "",
  //       passportNo: "",
  //       driverLicenseNo: "",
  //       photoId: "",
  //     });
  //   } catch (error) {
  //     console.error("Error creating patient:", error.message);
  //     toast.error("Failed to register patient.");
  //   }
  // };

  // const handleClear = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     setPatient({
  //       patientId: "",
  //       fullName: "",
  //       gender: "",
  //       maritalStatus: "",
  //       dob: "",
  //       age: "",
  //       nationality: "",
  //       address: "",
  //       city: "",
  //       area: "",
  //       phoneNo: "",
  //       alternatePhoneNumber: "",
  //       email: "",
  //       emergencyContactName: "",
  //       relationship: "",
  //       emergencyContactNo: "",
  //       alternateEmergencyContactNo: "",
  //       insurance: "",
  //       insuranceProvider: "",
  //       insurancePolicyNumber: "",
  //       insuranceGroupNo: "",
  //       policyHolderName: "",
  //       policyHolderRelationship: "",
  //       nationalIdNo: "",
  //       passportNo: "",
  //       driverLicenseNo: "",
  //       photoId: "",
  //     });
  //     setShowInsuranceForm(false);
  //   },
  //   [setPatient, setShowInsuranceForm]
  // );

  const [activeSection, setActiveSection] = useState("patientInformation");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleNextSection = () => {
    const newErrors = {};
    if (!patient.firstName) {
      newErrors.firstName = "First Name is required";
    }
    if (!patient.lastName) {
      newErrors.lastName = "Last Name is required";
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
    if (!patient.bloodGroup) {
      newErrors.bloodGroup = "Blood Group is required";
    }
    if (!patient.country) {
      newErrors.country = "Country is required";
    }
    if (!patient.province) {
      newErrors.province = "Province is required";
    }
    if (!patient.district) {
      newErrors.district = "District is required";
    }
    if (!patient.city) {
      newErrors.city = "City is required";
    }
    if (!patient.address) {
      newErrors.address = "Address is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      if (activeSection === "patientInformation") {
        setActiveSection("currentAddress");
      } else if (activeSection === "currentAddress") {
        setActiveSection("nextOfKinInformation");
      }
    }
  };

  const handlePreviousSection = () => {
    if (activeSection === "currentAddress") {
      setActiveSection("patientInformation");
    } else if (activeSection === "nextOfKinInformation") {
      setActiveSection("currentAddress");
    }
  };

  const [countryCode, setCountryCode] = useState("");

  const handlePhoneChange = (value, country) => {
    const numericValue = value.replace(/\D/g, "");
    const isNumeric = /^\d+$/.test(numericValue);

    if (isNumeric) {
      setPatient({ ...patient, mobile: value });
      setCountryCode(country.dialCode);
      setErrors({ ...errors, mobile: "" });
    } else {
      setErrors({ ...errors, mobile: "Only numbers are allowed" });
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

  const [activeView, setActiveView] = useState("registrationForm");

  const handleActiveView = (section) => {
    setActiveView(section);
  };

  // const videoConstraints = {
  //   width: 1280,
  //   height: 720,
  //   facingMode: "user",
  // };

  // const [capturedImage, setCapturedImage] = useState(null);
  // const webcamRef = React.useRef(null);

  // const capture = useCallback(() => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   setCapturedImage(imageSrc);
  //   setPatient((prev) => ({ ...prev, photoId: imageSrc }));
  // }, [webcamRef, setPatient]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <ToastContainer /> */}

      {/* <MDBox
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
        >
          <MDButton
            onClick={() => handleActiveView("listView")}
            sx={{
              backgroundColor: "transparent !important",
              color: activeView === "listView" ? "#1694c4" : "",
            }}
          >
            <span>List View</span>
          </MDButton>
          |
          <MDButton
            onClick={() => handleActiveView("registrationForm")}
            sx={{
              backgroundColor: "transparent !important",
              color: activeView === "registrationForm" ? "#1694c4" : "",
            }}
          >
            <span>Create</span>
          </MDButton>
        </MDBox> */}

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
          {/* {activeView === "listView" && (
              <>
                <PatientTable />
              </>
            )} */}

          {activeView === "registrationForm" && (
            <>
              <section id="nav">
                <nav className="w-full mb-3">
                  <div>
                    <div className="flex items-center">
                      <Grid container>
                        {/* Navigation Links */}
                        <Grid
                          item
                          sm={4}
                          onClick={() => handleSectionClick("patientInformation")}
                          className={`cursor-pointer ${
                            activeSection === "patientInformation" ? "text-[#1694c4]" : ""
                          }`}
                        >
                          <div className="border border-gray-300 group h-10 flex items-center relative">
                            <RiCheckboxCircleFill className="h-5 w-5 mx-2" aria-hidden="true" />
                            <a
                              href="#patientInformation"
                              className={`font-semibold text-xs relative`}
                            >
                              Patient Information
                            </a>
                            <span
                              className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                                activeSection === "patientInformation" ? "scale-x-100" : "scale-x-0"
                              } transition-transform duration-300`}
                            ></span>
                          </div>
                        </Grid>

                        <Grid
                          item
                          sm={4}
                          onClick={() => handleSectionClick("currentAddress")}
                          className={`cursor-pointer ${
                            activeSection === "currentAddress" ? "text-[#1694c4]" : ""
                          }`}
                        >
                          <div className="border border-gray-300 group h-10 flex items-center relative">
                            <MdEmergency className="h-5 w-5 mx-2" aria-hidden="true" />
                            <a href="#currentAddress" className={`font-semibold text-xs relative`}>
                              Current Address
                            </a>
                            <span
                              className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                                activeSection === "currentAddress" ? "scale-x-100" : "scale-x-0"
                              } transition-transform duration-300`}
                            ></span>
                          </div>
                        </Grid>

                        <Grid
                          item
                          sm={4}
                          onClick={() => handleSectionClick("nextOfKinInformation")}
                          className={`cursor-pointer ${
                            activeSection === "nextOfKinInformation" ? "text-[#1694c4]" : ""
                          }`}
                        >
                          <div className="border border-gray-300 group h-10 flex items-center relative">
                            <MdHealthAndSafety className="h-5 w-5 mx-2" aria-hidden="true" />
                            <a
                              href="#nextOfKinInformation"
                              className={`font-semibold text-xs relative`}
                            >
                              Next Of Kin Information
                            </a>
                            <span
                              className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                                activeSection === "nextOfKinInformation"
                                  ? "scale-x-100"
                                  : "scale-x-0"
                              } transition-transform duration-300`}
                            ></span>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </nav>
              </section>
              <form>
                {activeSection === "patientInformation" && (
                  <>
                    <Box>
                      <Typography style={{ fontWeight: "bold" }} gutterBottom>
                        <p className="text-base text-[#42424a] font-semibold mr-2">
                          Personal Information
                        </p>
                      </Typography>
                    </Box>

                    <Grid container sx={{ marginTop: 1 }} spacing={2}>
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
                            className={`block w-full h-8 border ${
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
                            {errors.dob && (
                              <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
                            )}
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
                            First Name:<span className="text-red-600 text-base mx-2">*</span>
                          </p>
                          <TextField
                            variant="outlined"
                            fullWidth
                            name="firstName"
                            required
                            value={patient.firstName}
                            onChange={handleInputChange}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
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
                          <p className="text-xs mb-2">Middle Name:</p>
                          <TextField
                            variant="outlined"
                            fullWidth
                            name="middleName"
                            required
                            value={patient.middleName}
                            onChange={handleInputChange}
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
                            Last Name:<span className="text-red-600 text-base mx-2">*</span>
                          </p>
                          <TextField
                            variant="outlined"
                            fullWidth
                            name="lastName"
                            required
                            value={patient.lastName}
                            onChange={handleInputChange}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                          />
                        </Box>
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
                          <p htmlFor="maritalStatus" className="text-xs mb-2">
                            Maritial Status:
                          </p>

                          {/* Select Menu */}
                          <select
                            id="maritalStatus"
                            name="maritalStatus"
                            required
                            value={patient.maritalStatus}
                            onChange={handleInputChange}
                            className={`block w-full h-8 border ${
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
                          <p htmlFor="bloodGroup" className="flex flex-row text-xs items-center">
                            Blood Group:<span className="text-red-600 text-base mx-2">*</span>
                          </p>

                          {/* Select Menu */}
                          <select
                            id="bloodGroup"
                            name="bloodGroup"
                            value={patient.bloodGroup}
                            onChange={handleInputChange}
                            required
                            className={`block w-full h-8 border ${
                              errors.bloodGroup ? "border-red-500" : "border-gray-300"
                            } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                          >
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                          </select>
                          {errors.bloodGroup && (
                            <p className="text-red-500 text-xs mt-1">{errors.bloodGroup}</p>
                          )}
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
                          <p className="text-xs mb-2">CNIC No:</p>
                          <TextField
                            variant="outlined"
                            fullWidth
                            name="cnic"
                            value={patient.cnic}
                            onChange={handleInputChange}
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
                          <p className="text-xs mb-2">Nationality:</p>
                          <TextField
                            variant="outlined"
                            fullWidth
                            name="nationality"
                            value={patient.nationality}
                            onChange={handleInputChange}
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
                          <p className="text-xs mb-2">Email:</p>
                          <TextField
                            variant="outlined"
                            fullWidth
                            name="email"
                            value={patient.email}
                            onChange={handleInputChange}
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
                          <p className="text-xs mb-2">Mobile:</p>
                          <PhoneInput
                            country={"pk"}
                            value={patient.mobile}
                            onChange={handlePhoneChange}
                            inputProps={{
                              name: "mobile",
                              required: true,
                              autoFocus: true,
                            }}
                            containerStyle={{
                              height: "30px",
                            }}
                            inputStyle={{
                              height: "30px",
                              width: "260px",
                            }}
                            enableAreaCodes={true}
                            countryCodeEditable={false}
                            specialLabel=""
                          />
                          {errors.mobile && (
                            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                          )}
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
                          <p className="text-xs mb-2">Reference Mobile:</p>
                          <PhoneInput
                            country={"pk"}
                            value={patient.referenceMobile}
                            onChange={handlePhoneChange}
                            inputProps={{
                              name: "referenceMobile",
                              required: true,
                              autoFocus: true,
                            }}
                            containerStyle={{
                              height: "30px",
                            }}
                            inputStyle={{
                              height: "30px",
                              width: "260px",
                            }}
                            enableAreaCodes={true}
                            countryCodeEditable={false}
                            specialLabel=""
                          />
                          {errors.referenceMobile && (
                            <p className="text-red-500 text-xs mt-1">{errors.referenceMobile}</p>
                          )}
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
                          <p className="text-xs mb-2">Organization:</p>
                          <TextField
                            variant="outlined"
                            fullWidth
                            name="Organization"
                            value={patient.Organization}
                            onChange={handleInputChange}
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
                            Patient ID:<span className="text-red-600 text-base mx-2">*</span>
                          </p>
                          <TextField
                            variant="outlined"
                            fullWidth
                            name="patientId"
                            readOnly
                            // value={patient.patientId || ""}
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                        </Box>
                      </Grid>

                      {/* Webcam Capture */}
                      {/* <Grid
                      item
                      xs={6}
                      sm={3}
                      sx={{
                        paddingTop: "5px !important",
                      }}
                    >
                      <Box>
                        <p className="text-xs mb-2">Capture Patient Photo:</p>
                        <Webcam
                          audio={false}
                          ref={webcamRef}
                          screenshotFormat="image/jpeg"
                          width="100%"
                          videoConstraints={videoConstraints}
                        />
                        <MDButton
                          variant="contained"
                          color="primary"
                          onClick={capture}
                          style={{ marginTop: "10px" }}
                        >
                          Capture
                        </MDButton>
                      </Box> */}

                      {/* Display captured image */}
                      {/* {capturedImage && (
                        <Box mt={2}>
                          <img
                            src={capturedImage}
                            alt="Patient"
                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                          />
                        </Box>
                      )}
                    </Grid> */}
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
                    </Grid>
                  </>
                )}

                {activeSection === "currentAddress" && (
                  <>
                    <Grid container>
                      <Grid item xs={8}>
                        <Box
                          sx={{
                            marginTop: 2,
                          }}
                        >
                          <Typography style={{ fontWeight: "bold" }} gutterBottom>
                            <p className="text-base text-[#42424a] font-semibold mr-2">
                              Current Address
                            </p>
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={4}>
                        <Box
                          sx={{
                            marginTop: 2,
                          }}
                        >
                          <Typography style={{ fontWeight: "bold" }} gutterBottom>
                            <p className="text-base text-[#42424a] font-semibold mr-2">
                              Permanent Address
                            </p>
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>

                    <Grid container sx={{ marginTop: 1 }}>
                      <Grid item xs={8} sx={{ paddingRight: 1 }}>
                        <Grid container spacing={2}>
                          <Grid
                            item
                            xs={6}
                            sm={4}
                            sx={{
                              paddingTop: "5px !important",
                            }}
                          >
                            <Box>
                              <p htmlFor="country" className="flex flex-row text-xs items-center">
                                Country:<span className="text-red-600 text-base mx-2">*</span>
                              </p>
                              {/* Select Menu */}
                              <select
                                id="country"
                                name="country"
                                value={patient.country}
                                onChange={handleInputChange}
                                required
                                className={`block w-full h-8 border ${
                                  errors.country ? "border-red-500" : "border-gray-300"
                                } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                              >
                                <option value="">Select Country</option>
                                <option value="Pakistan">Pakistan</option>
                              </select>
                              {errors.country && (
                                <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                              )}
                            </Box>
                          </Grid>

                          <Grid
                            item
                            xs={6}
                            sm={4}
                            sx={{
                              paddingTop: "5px !important",
                            }}
                          >
                            <Box>
                              <p htmlFor="province" className="flex flex-row text-xs items-center">
                                Province:<span className="text-red-600 text-base mx-2">*</span>
                              </p>
                              {/* Select Menu */}
                              <select
                                id="province"
                                name="province"
                                value={patient.province}
                                onChange={handleInputChange}
                                required
                                className={`block w-full h-8 border ${
                                  errors.province ? "border-red-500" : "border-gray-300"
                                } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                              >
                                <option value="">Select Province</option>
                                <option value="Sindh">Sindh</option>
                              </select>
                              {errors.province && (
                                <p className="text-red-500 text-xs mt-1">{errors.province}</p>
                              )}
                            </Box>
                          </Grid>

                          <Grid
                            item
                            xs={6}
                            sm={4}
                            sx={{
                              paddingTop: "5px !important",
                            }}
                          >
                            <Box>
                              <p htmlFor="district" className="flex flex-row text-xs items-center">
                                District:<span className="text-red-600 text-base mx-2">*</span>
                              </p>
                              {/* Select Menu */}
                              <select
                                id="district"
                                name="district"
                                value={patient.district}
                                onChange={handleInputChange}
                                required
                                className={`block w-full h-8 border ${
                                  errors.district ? "border-red-500" : "border-gray-300"
                                } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                              >
                                <option value="">Select District</option>
                                <option value="Islamabad">Islamabad</option>
                              </select>
                              {errors.district && (
                                <p className="text-red-500 text-xs mt-1">{errors.district}</p>
                              )}
                            </Box>
                          </Grid>

                          <Grid
                            item
                            xs={6}
                            sm={4}
                            sx={{
                              paddingTop: "5px !important",
                            }}
                          >
                            <Box>
                              <p htmlFor="city" className="flex flex-row text-xs items-center">
                                City:<span className="text-red-600 text-base mx-2">*</span>
                              </p>
                              {/* Select Menu */}
                              <select
                                id="city"
                                name="city"
                                value={patient.city}
                                onChange={handleInputChange}
                                required
                                className={`block w-full h-8 border ${
                                  errors.city ? "border-red-500" : "border-gray-300"
                                } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                              >
                                <option value="">Select City</option>
                                <option value="Islamabad">Islamabad</option>
                              </select>
                              {errors.city && (
                                <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                              )}
                            </Box>
                          </Grid>

                          <Grid
                            item
                            xs={6}
                            sm={4}
                            sx={{
                              paddingTop: "5px !important",
                            }}
                          >
                            <Box>
                              <p htmlFor="address" className="flex flex-row text-xs items-center">
                                Address:<span className="text-red-600 text-base mx-2">*</span>
                              </p>
                              <TextField
                                variant="outlined"
                                name="address"
                                fullWidth
                                required
                                value={patient.address}
                                onChange={handleInputChange}
                                error={!!errors.address}
                                helperText={errors.address}
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        sx={{
                          paddingTop: "5px !important",
                        }}
                      >
                        <Box className="flex items-center space-x-2">
                          <p htmlFor="Phone" className="flex flex-row text-xs items-center">
                            Same as current address
                          </p>
                          <Checkbox />
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
                          onClick={handlePreviousSection}
                        >
                          <span className="text-xs">Back</span>
                        </MDButton>
                      </Grid>
                    </Grid>
                  </>
                )}

                {activeSection === "nextOfKinInformation" && (
                  <>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box
                          sx={{
                            marginTop: 1,
                          }}
                        >
                          <Typography style={{ fontWeight: "bold" }} gutterBottom>
                            <p className="text-base text-[#42424a] font-semibold mr-2">
                              Next Of Kin Information
                            </p>
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={6}>
                        <Box
                          sx={{
                            marginTop: 1,
                          }}
                        >
                          <Typography style={{ fontWeight: "bold" }} gutterBottom>
                            <p className="text-base text-[#42424a] font-semibold mr-2">
                              Kin Address
                            </p>
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>

                    <Grid container sx={{ marginTop: 1 }} spacing={2}>
                      <Grid item xs={6} sx={{ paddingRight: 1 }}>
                        <Grid container spacing={2}>
                          <Grid
                            item
                            xs={6}
                            sm={4}
                            sx={{
                              paddingTop: "5px !important",
                            }}
                          >
                            <div>
                              {/* Label */}
                              <p htmlFor="KinRelaion" className=" text-xs mb-2">
                                Relation:
                              </p>

                              {/* Select Menu */}
                              <select
                                id="KinRelaion"
                                name="KinRelaion"
                                //   value={patient.KinRelaion}
                                //   onChange={handleInputChange}
                                //   required
                                className={`block w-full h-8 border "border-gray-300"
                          rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                                //   className={`block w-full h-8 border ${
                                //     errors.KinRelaion ? "border-red-500" : "border-gray-300"
                                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                              >
                                <option value="Father">Father</option>
                                <option value="Mother">Mother</option>
                                <option value="Sibling">Sibling</option>
                              </select>
                              {/* {errors.gender && (
                          <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
                        )} */}
                            </div>
                          </Grid>
                          <Grid
                            item
                            xs={6}
                            sm={4}
                            sx={{
                              paddingTop: "5px !important",
                            }}
                          >
                            <Box>
                              <p className="text-xs mb-2">First Name:</p>
                              <TextField
                                variant="outlined"
                                fullWidth
                                name="KinFirstName"
                                // required
                                // value={patient.KinFirstName}
                                // onChange={handleInputChange}
                                // error={!!errors.KinFirstName}
                                // helperText={errors.KinFirstName}
                              />
                            </Box>
                          </Grid>

                          <Grid
                            item
                            xs={6}
                            sm={4}
                            sx={{
                              paddingTop: "5px !important",
                            }}
                          >
                            <Box>
                              <p className="text-xs mb-2">Middle Name:</p>
                              <TextField
                                variant="outlined"
                                fullWidth
                                name="KinMiddleName"
                                // required
                                // value={patient.KinMiddleName}
                                // onChange={handleInputChange}
                                // error={!!errors.KinMiddleName}
                                // helperText={errors.KinMiddleName}
                              />
                            </Box>
                          </Grid>

                          <Grid
                            item
                            xs={6}
                            sm={4}
                            sx={{
                              paddingTop: "5px !important",
                            }}
                          >
                            <Box>
                              <p className="text-xs mb-2">Last Name:</p>
                              <TextField
                                variant="outlined"
                                fullWidth
                                name="KinLastName"
                                // required
                                // value={patient.KinLastName}
                                // onChange={handleInputChange}
                                // error={!!errors.KinLastName}
                                // helperText={errors.KinLastName}
                              />
                            </Box>
                          </Grid>

                          <Grid
                            item
                            xs={6}
                            sm={4}
                            sx={{
                              paddingTop: "5px !important",
                            }}
                          >
                            <Box>
                              <p className="text-xs mb-2">Email:</p>
                              <TextField
                                variant="outlined"
                                fullWidth
                                name="KinEmail"
                                // value={patient.KinEmail}
                                // onChange={handleInputChange}
                              />
                            </Box>
                          </Grid>

                          <Grid
                            item
                            xs={6}
                            sm={4}
                            sx={{
                              paddingTop: "5px !important",
                            }}
                          >
                            <Box>
                              <p className="text-xs mb-2">Mobile:</p>
                              <PhoneInput
                                country={"pk"}
                                // value={patient.KinMobile}
                                onChange={handlePhoneChange}
                                inputProps={{
                                  name: "KinMobile",
                                  required: true,
                                  autoFocus: true,
                                }}
                                containerStyle={{
                                  height: "31.98px",
                                }}
                                inputStyle={{
                                  height: "31.98px",
                                  width: "168.8px",
                                }}
                                enableAreaCodes={true}
                                countryCodeEditable={false}
                                specialLabel=""
                              />
                              {/* {errors.KinMobile && (
                                <p className="text-red-500 text-xs mt-1">{errors.KinMobile}</p>
                              )} */}
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item xs={6}>
                        <Grid container spacing={2}>
                          <Grid
                            item
                            xs={6}
                            sm={4}
                            sx={{
                              paddingTop: "5px !important",
                            }}
                          >
                            <Box>
                              <p htmlFor="KinCountry" className="text-xs mb-2">
                                Country:
                              </p>
                              {/* Select Menu */}
                              <select
                                id="KinCountry"
                                name="KinCountry"
                                //   value={patient.KinCountry}
                                //   onChange={handleInputChange}
                                //   required
                                className={`block w-full h-8 border "border-gray-300"
                          rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                                //   className={`block w-full h-8 border ${
                                //     errors.KinCountry ? "border-red-500" : "border-gray-300"
                                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                              >
                                <option value="Pakistan">Pakistan</option>
                              </select>
                              {/* {errors.gender && (
                          <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
                        )} */}
                            </Box>
                          </Grid>

                          <Grid
                            item
                            xs={6}
                            sm={4}
                            sx={{
                              paddingTop: "5px !important",
                            }}
                          >
                            <Box>
                              <p htmlFor="KinProvince" className="text-xs mb-2">
                                Province:
                              </p>
                              {/* Select Menu */}
                              <select
                                id="KinProvince"
                                name="KinProvince"
                                //   value={patient.KinProvince}
                                //   onChange={handleInputChange}
                                //   required
                                className={`block w-full h-8 border "border-gray-300"
                          rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                                //   className={`block w-full h-8 border ${
                                //     errors.KinProvince ? "border-red-500" : "border-gray-300"
                                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                              >
                                <option value="Sindh">Sindh</option>
                              </select>
                              {/* {errors.gender && (
                          <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
                        )} */}
                            </Box>
                          </Grid>

                          <Grid
                            item
                            xs={6}
                            sm={4}
                            sx={{
                              paddingTop: "5px !important",
                            }}
                          >
                            <Box>
                              <p htmlFor="KinDistrict" className="text-xs mb-2">
                                District:
                              </p>
                              {/* Select Menu */}
                              <select
                                id="KinDistrict"
                                name="KinDistrict"
                                //   value={patient.KinDistrict}
                                //   onChange={handleInputChange}
                                //   required
                                className={`block w-full h-8 border "border-gray-300"
                          rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                                //   className={`block w-full h-8 border ${
                                //     errors.KinDistrict ? "border-red-500" : "border-gray-300"
                                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                              >
                                <option value="Islamabad">Islamabad</option>
                              </select>
                              {/* {errors.gender && (
                          <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
                        )} */}
                            </Box>
                          </Grid>

                          <Grid
                            item
                            xs={6}
                            sm={4}
                            sx={{
                              paddingTop: "5px !important",
                            }}
                          >
                            <Box>
                              <p htmlFor="KinCity" className="text-xs mb-2">
                                City:
                              </p>
                              {/* Select Menu */}
                              <select
                                id="KinCity"
                                name="KinCity"
                                //   value={patient.KinCity}
                                //   onChange={handleInputChange}
                                //   required
                                className={`block w-full h-8 border "border-gray-300"
                          rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                                //   className={`block w-full h-8 border ${
                                //     errors.KinCity ? "border-red-500" : "border-gray-300"
                                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                              >
                                <option value="Islamabad">Islamabad</option>
                              </select>
                              {/* {errors.gender && (
                          <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
                        )} */}
                            </Box>
                          </Grid>

                          <Grid
                            item
                            xs={6}
                            sm={4}
                            sx={{
                              paddingTop: "5px !important",
                            }}
                          >
                            <Box>
                              <p htmlFor="KinAddress" className="text-xs mb-2">
                                Address:
                              </p>
                              <TextField
                                variant="outlined"
                                name="KinAddress"
                                // value={patient.KinAddress}
                                // onChange={handleInputChange}
                                fullWidth
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      sx={{
                        marginTop: 1,
                        justifyContent: "end",
                      }}
                      spacing={0.5}
                    >
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
                          <button type="submit" className="text-xs">
                            SAVE AND VIEW
                          </button>
                        </MDButton>
                      </Grid>

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
                          <button type="submit" className="text-xs">
                            SAVE AND PRINT CARD
                          </button>
                        </MDButton>
                      </Grid>

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
                          <button type="submit" className="text-xs">
                            SAVE AND FAMILY MEMBER
                          </button>
                        </MDButton>
                      </Grid>

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
                          <button type="submit" className="text-xs">
                            SAVE AND ADD PATIENT PANEL
                          </button>
                        </MDButton>
                      </Grid>

                      <Grid item>
                        <MDButton
                          sx={{ borderRadius: 0, minHeight: 0 }}
                          variant="gradient"
                          color="light"
                          onClick={handlePreviousSection}
                        >
                          <span className="text-xs">Back</span>
                        </MDButton>
                      </Grid>
                    </Grid>
                  </>
                )}
              </form>
            </>
          )}
        </Paper>
      </Container>
    </DashboardLayout>
  );
}

export default AddPatient;
