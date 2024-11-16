/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react";
import InputMask from "react-input-mask";
import PropTypes from "prop-types";

import { Typography, Box, Grid, TextField, Checkbox, FormControlLabel } from "@mui/material";
import MDButton from "components/MDButton";

import { AddEmployeeContext } from "context/Employee/Add Employee/addEmployeeContext";
import { addEmployee } from "services/Employee/Add Employee/addEmployeeService";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AddEmployee = () => {
  const [sameAsCurrentAddress, setSameAsCurrentAddress] = useState(false);

  const { addNewEmployee } = useContext(AddEmployeeContext);

  const [errors, setErrors] = useState({});

  const handleCheckboxChange = (event) => {
    setSameAsCurrentAddress(event.target.checked);
  };

  const [employee, setEmployee] = useState({
    title: "",
    employeeNo: "",
    gender: "1",
    firstName: "",
    middleName: "",
    lastName: "",
    relationship: "",
    relationshipFirstName: "",
    relationshipMiddleName: "",
    relationshipLastName: "",
    dateOfBirth: "",
    maritalStatus: "1",
    bloodGroup: "",
    cnic: "",
    nationality: "",
    phoneOffice: "",
    phoneResidence: "",
    email: "",
    mobile: "",
    fax: "",
    uniqueKeyType: "",
    uniqueKey: "",
    currentCountry: "",
    currentProvince: "",
    currentDistrict: "",
    currentCity: "",
    currentAddress: "",
    permanentCountry: "",
    permanentProvince: "",
    permanentDistrict: "",
    permanentCity: "",
    permanentAddress: "",
    createdBy: 1,
    isDeleted: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEmployee({
      ...employee,
      [name]: value,
    });

    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }

    if (name === "firstName" || name === "middleName" || name === "lastName") {
      const regex = /^[a-zA-Z\s]*$/;
      if (!regex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Only alphabets are allowed",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!employee.firstName.trim()) {
      newErrors.firstName = "First Name is required.";
    }

    if (!employee.relationshipFirstName.trim()) {
      newErrors.relationshipFirstName = "Relationship First Name is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill all required fields."); // Show error toast
      return;
    }

    try {
      const employeeData = {
        title: employee.title,
        employeeNo: employee.employeeNo,
        gender: employee.gender,
        firstName: employee.firstName,
        middleName: employee.middleName,
        lastName: employee.lastName,
        relationship: employee.relationship,
        relationshipFirstName: employee.relationshipFirstName,
        relationshipMiddleName: employee.relationshipMiddleName,
        relationshipLastName: employee.relationshipLastName,
        dateOfBirth: employee.dateOfBirth,
        maritalStatus: employee.maritalStatus,
        bloodGroup: employee.bloodGroup,
        cnic: employee.cnic,
        nationality: employee.nationality,
        phoneOffice: employee.phoneOffice,
        phoneResidence: employee.phoneResidence,
        email: employee.email,
        mobile: employee.mobile,
        fax: employee.fax,
        uniqueKeyType: employee.uniqueKeyType,
        uniqueKey: employee.uniqueKey,
        currentCountry: employee.currentCountry,
        currentProvince: employee.currentProvince,
        currentDistrict: employee.currentDistrict,
        currentCity: employee.currentCity,
        currentAddress: employee.currentAddress,
        permanentCountry: employee.permanentCountry,
        permanentProvince: employee.permanentProvince,
        permanentDistrict: employee.permanentDistrict,
        permanentCity: employee.permanentCity,
        permanentAddress: employee.permanentAddress,
        createdBy: employee.createdBy,
        isDeleted: employee.isDeleted,
      };

      const savedEmployee = await addEmployee(employeeData);
      addNewEmployee(savedEmployee);
      toast.success("Employee added successfully");

      setEmployee({
        title: "",
        employeeNo: "",
        gender: "1",
        firstName: "",
        middleName: "",
        lastName: "",
        relationship: "",
        relationshipFirstName: "",
        relationshipMiddleName: "",
        relationshipLastName: "",
        dateOfBirth: "",
        maritalStatus: "1",
        bloodGroup: "",
        cnic: "",
        nationality: "",
        phoneOffice: "",
        phoneResidence: "",
        email: "",
        mobile: "",
        fax: "",
        uniqueKeyType: "",
        uniqueKey: "",
        currentCountry: "",
        currentProvince: "",
        currentDistrict: "",
        currentCity: "",
        currentAddress: "",
        permanentCountry: "",
        permanentProvince: "",
        permanentDistrict: "",
        permanentCity: "",
        permanentAddress: "",
        createdBy: 1,
        isDeleted: 0,
      });
    } catch (error) {
      console.error("Error creating employee:", error.message);
      toast.error("Failed to register employee.");
    }
  };

  const [countryCode, setCountryCode] = useState("");

  const handlePhoneChange = (value, country) => {
    const numericValue = value.replace(/\D/g, "");
    const isNumeric = /^\d+$/.test(numericValue);

    if (isNumeric) {
      setEmployee({ ...employee, mobile: value });
      setCountryCode(country.dialCode);
      setErrors({ ...errors, mobile: "" });
    } else {
      setErrors({ ...errors, mobile: "Only numbers are allowed" });
    }
  };

  return (
    <div>
      <ToastContainer />

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

      <Grid container spacing={2} sx={{ marginBottom: "40px" }}>
        <Grid item xs={3}>
          <p className="text-xs mb-2">Title:</p>
          {/* Select Menu */}
          <select
            id="title"
            name="title"
            value={employee.title}
            onChange={handleInputChange}
            className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="Doctor">Doctor</option>
            <option value="Nurse">Nurse</option>
          </select>
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs mb-2">Employee No.:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="employeeNo"
            onChange={handleInputChange}
            value={employee.employeeNo}
          />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs mb-2">Gender:</p>
          {/* Select Menu */}
          <select
            id="gender"
            name="gender"
            value={employee.gender}
            onChange={handleInputChange}
            className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </Grid>
        <Grid item xs={3}>
          <p className="flex flex-row text-xs items-center">
            First Name:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          <TextField
            variant="outlined"
            fullWidth
            name="firstName"
            value={employee.firstName}
            onChange={handleInputChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
        </Grid>

        {/* Additional fields in a similar layout */}
        <Grid item xs={3}>
          <p className="text-xs mb-2">Middle Name:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="middleName"
            value={employee.middleName}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs mb-2">Last Name:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="lastName"
            value={employee.lastName}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs mb-2">Relationship:</p>
          {/* Select Menu */}
          <select
            id="relationship"
            name="relationship"
            value={employee.relationship}
            onChange={handleInputChange}
            className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="1">Son of</option>
            <option value="2">Daughter Of</option>
          </select>
        </Grid>

        <Grid item xs={3}>
          <p className="flex flex-row text-xs items-center">
            Relationship First Name:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          <TextField
            variant="outlined"
            fullWidth
            name="relationshipFirstName"
            onChange={handleInputChange}
            value={employee.relationshipFirstName}
            error={!!errors.relationshipFirstName}
            helperText={errors.relationshipFirstName}
          />
        </Grid>

        {/* Additional fields in a similar layout */}
        <Grid item xs={3}>
          <p className="text-xs mb-2">Relationship Middle Name:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="relationshipMiddleName"
            value={employee.relationshipMiddleName}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs mb-2">Relationship Last Name:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="relationshipLastName"
            onChange={handleInputChange}
            value={employee.relationshipLastName}
          />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs mb-2">Date of Birth:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="dateOfBirth"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={employee.dateOfBirth}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs mb-2">Marital Status:</p>
          {/* Select Menu */}
          <select
            id="maritalStatus"
            name="maritalStatus"
            value={employee.maritalStatus}
            onChange={handleInputChange}
            className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="1">Married</option>
            <option value="2">Single</option>
          </select>
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs mb-2">Blood Group:</p>
          {/* Select Menu */}
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={employee.bloodGroup}
            onChange={handleInputChange}
            className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="A+">A+</option>
            <option value="B+">B+</option>
          </select>
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs mb-2">CNIC:</p>
          <InputMask
            mask="99999-9999999-9"
            value={employee.cnic}
            onChange={handleInputChange}
            maskChar={null} // This will not show any placeholder character
          >
            {(inputProps) => (
              <TextField
                {...inputProps}
                variant="outlined"
                fullWidth
                name="cnic"
                placeholder="12345-1234567-1"
              />
            )}
          </InputMask>
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs mb-2">Nationality:</p>
          {/* Select Menu */}
          <select
            id="nationality"
            name="nationality"
            value={employee.nationality}
            onChange={handleInputChange}
            className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="Pakistani">Pakistani</option>
          </select>
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs mb-2">Phone (Off):</p>
          <TextField
            variant="outlined"
            fullWidth
            name="phoneOffice"
            value={employee.phoneOffice}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs mb-2">Phone (Res):</p>
          <TextField
            variant="outlined"
            fullWidth
            name="phoneResidence"
            value={employee.phoneResidence}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs mb-2">Email:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="email"
            value={employee.email}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs mb-2">Mobile:</p>
          <PhoneInput
            country={"pk"}
            value={employee.mobile}
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
              width: "250px",
            }}
            enableAreaCodes={true}
            countryCodeEditable={false}
            specialLabel=""
          />
          {errors.phoneNo && <p className="text-red-500 text-xs mt-1">{errors.phoneNo}</p>}
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs mb-2">Fax:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="fax"
            value={employee.fax}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs mb-2">Unique Key Type:</p>
          {/* Select Menu */}
          <select
            id="uniqueKey"
            name="uniqueKey"
            value={employee.uniqueKey}
            onChange={handleInputChange}
            className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="CNIC">CNIC</option>
          </select>
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs mb-2">Unique Key:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="uniqueKey"
            value={employee.uniqueKey}
            onChange={handleInputChange}
          />
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
          <Grid container spacing={2} sx={{ marginTop: "57px" }}>
            <Grid item xs={6}>
              <p className="text-xs mb-2">Country:</p>
              {/* Select Menu */}
              <select
                id="currentCountry"
                name="currentCountry"
                value={employee.currentCountry}
                onChange={handleInputChange}
                className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select a country</option>
                <option value="Pakistan">Pakistan</option>
              </select>
            </Grid>
            <Grid item xs={6}>
              <p className="text-xs mb-2">Province:</p>
              <TextField
                variant="outlined"
                fullWidth
                name="currentProvince"
                onChange={handleInputChange}
                value={employee.currentProvince}
              />
            </Grid>
            <Grid item xs={6}>
              <p className="text-xs mb-2">District:</p>
              <TextField
                variant="outlined"
                fullWidth
                name="currentDistrict"
                onChange={handleInputChange}
                value={employee.currentDistrict}
              />
            </Grid>
            <Grid item xs={6}>
              <p className="text-xs mb-2">City:</p>
              <TextField
                variant="outlined"
                fullWidth
                name="currentCity"
                onChange={handleInputChange}
                value={employee.currentCity}
              />
            </Grid>
            <Grid item xs={12}>
              <p className="text-xs mb-2">Address:</p>
              <TextField
                variant="outlined"
                fullWidth
                name="currentAddress"
                multiline
                rows={2}
                onChange={handleInputChange}
                value={employee.currentAddress}
              />
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
                control={
                  <Checkbox checked={sameAsCurrentAddress} onChange={handleCheckboxChange} />
                }
                label="Same as Current Address"
              />
            </Grid>
            <Grid item xs={6}>
              <p className="text-xs mb-2">Country:</p>
              {/* Select Menu */}
              <select
                id="permanentCountry"
                name="permanentCountry"
                value={sameAsCurrentAddress ? employee.currentCountry : employee.permanentCountry}
                onChange={handleInputChange}
                className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select a country</option>
                <option value="Pakistan">Pakistan</option>
              </select>
            </Grid>
            <Grid item xs={6}>
              <p className="text-xs mb-2">Province:</p>
              <TextField
                variant="outlined"
                fullWidth
                name="permanentProvince"
                disabled={sameAsCurrentAddress}
                onChange={handleInputChange}
                value={sameAsCurrentAddress ? employee.currentProvince : employee.permanentProvince}
              />
            </Grid>
            <Grid item xs={6}>
              <p className="text-xs mb-2">District:</p>
              <TextField
                variant="outlined"
                fullWidth
                name="permanentDistrict"
                disabled={sameAsCurrentAddress}
                onChange={handleInputChange}
                value={sameAsCurrentAddress ? employee.currentDistrict : employee.permanentDistrict}
              />
            </Grid>
            <Grid item xs={6}>
              <p className="text-xs mb-2">City:</p>
              <TextField
                variant="outlined"
                fullWidth
                name="permanentCity"
                disabled={sameAsCurrentAddress}
                onChange={handleInputChange}
                value={sameAsCurrentAddress ? employee.currentCity : employee.permanentCity}
              />
            </Grid>
            <Grid item xs={12}>
              <p className="text-xs mb-2">Address:</p>
              <TextField
                variant="outlined"
                fullWidth
                name="permanentAddress"
                multiline
                rows={2}
                disabled={sameAsCurrentAddress}
                onChange={handleInputChange}
                value={sameAsCurrentAddress ? employee.currentAddress : employee.permanentAddress}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Buttons */}
      <Grid
        container
        sx={{ marginTop: 3, backgroundColor: "#11171d" }}
        className="place-content-center justify-center p-2 gap-2"
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
            onClick={handleSave}
          >
            Save
          </MDButton>
        </Grid>
        <Grid item sx={{ paddingLeft: "1px !important" }}>
          <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
            <button className="text-xs">Cancel</button>
          </MDButton>
        </Grid>
        <Grid item>
          <MDButton
            variant="gradient"
            style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}
          >
            <button type="submit" className="text-xs">
              Save & Assign Appointment
            </button>
          </MDButton>
        </Grid>
      </Grid>
    </div>
  );
};

AddEmployee.propTypes = {
  employee: PropTypes.shape({
    cnic: PropTypes.string.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default AddEmployee;
