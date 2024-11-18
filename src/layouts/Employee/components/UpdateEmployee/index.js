import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PropTypes from "prop-types";

import {
  Typography,
  Box,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import MDButton from "components/MDButton";

import { updateEmployee } from "services/Employee/Update Employee/updateEmployeeService";

function UpdateEmployee({ employee }) {
  const [errors, setErrors] = useState({});

  const [updateParams, setUpdateParams] = useState({
    employeeNo: employee.EmployeeNo,
    username: "",
    password: "",
    confirmPassword: "",
    status: "active",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateParams({
      ...updateParams,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!updateParams.username.trim()) {
      newErrors.username = "Username is required.";
    }

    if (!updateParams.password.trim()) {
      newErrors.password = "Password is required.";
    }

    if (updateParams.password !== updateParams.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill all required fields and make sure passwords match.");
      return;
    }

    try {
      const employeeUpdatedData = {
        employeeNo: employee.EmployeeNo,
        username: updateParams.username,
        password: updateParams.password,
        status: updateParams.status,
      };

      await updateEmployee(employeeUpdatedData);
      toast.success("Employee updated successfully");

      setUpdateParams({
        employeeNo: employee.EmployeeNo,
        username: "",
        password: "",
        confirmPassword: "",
        status: "active",
      });
    } catch (error) {
      console.error("Error updating employee:", error.message);
      toast.error("Failed to update employee.");
    }
  };

  return (
    <div>
      <ToastContainer />
      {/* Header */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        User Updation
      </Typography>

      {/* Employee Information Section */}
      <Box sx={{ backgroundColor: "#1769aa", padding: 1, mb: 2 }}>
        <Typography variant="subtitle1" className="text-white">
          Employee Information
        </Typography>
      </Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={10}>
          <Box>
            <p className="font-semibold text-sm mb-2">
              Employee Name:{" "}
              <span className="text-sm text-gray-500">
                {employee.Title} {employee.FirstName} {employee.MiddleName} {employee.LastName}
              </span>
            </p>
          </Box>
          <Box>
            <p className="font-semibold text-sm mb-2">
              Employee No: <span className="text-sm text-gray-500">{employee.EmployeeNo}</span>
            </p>
          </Box>
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
        <Typography variant="subtitle1" className="text-white">
          Update User
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <p className="text-xs">User Name:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="username"
            value={updateParams.username}
            onChange={handleInputChange}
            error={!!errors.username}
            helperText={errors.username}
          />
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Password:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="password"
            type="password"
            value={updateParams.password}
            onChange={handleInputChange}
            error={!!errors.password}
            helperText={errors.password}
          />
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Confirm Password:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="confirmPassword"
            type="password"
            value={updateParams.confirmPassword}
            onChange={handleInputChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
        </Grid>
        <Grid item xs={3}>
          <p className="text-xs">Login Status:</p>
          <RadioGroup row name="status" value={updateParams.status} onChange={handleInputChange}>
            <FormControlLabel value="0" control={<Radio />} label="Active" />
            <FormControlLabel value="1" control={<Radio />} label="Inactive" />
          </RadioGroup>
        </Grid>
      </Grid>

      {/* Buttons Section */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <MDButton
          variant="gradient"
          style={{
            borderRadius: 0,
            minHeight: 0,
            backgroundColor: "#1694c4",
            color: "White",
          }}
          onClick={handleUpdate}
        >
          Update User
        </MDButton>
        <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
          <span className="text-xs">Back</span>
        </MDButton>
      </Box>
    </div>
  );
}

UpdateEmployee.propTypes = {
  employee: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    FirstName: PropTypes.string.isRequired,
    MiddleName: PropTypes.string,
    LastName: PropTypes.string.isRequired,
    EmployeeNo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};

export default UpdateEmployee;
