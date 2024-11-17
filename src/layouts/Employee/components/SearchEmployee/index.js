/* eslint-disable prettier/prettier */
/* prettier-ignore-end-of-line */
import React, { useState } from "react";
import { Typography, Box, Grid, TextField, MenuItem } from "@mui/material";

import PropTypes from "prop-types";

import MDButton from "components/MDButton";

import data from "./data/index";
import leftTable from "./leftTable";
import rightTable from "./rightTable";
import DataTable from "examples/Tables/DataTable";

import { searchEmployee } from "services/Employee/Search Employee/searchEmployeeService";

function SearchEmployee({ setSelectedEmployee, setActiveTab }) {
  const { LColumns, LRows } = leftTable();
  const { RColumns, RRows } = rightTable();
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  const [searchParams, setSearchParams] = useState({
    employeeNo: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    cnic: "",
    dateOfBirth: "",
  });

  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value,
    });
  };

  const handleSearch = async () => {
    try {
      const employees = await searchEmployee(searchParams);
      setResults(employees);
      setError("");
      console.log("Results: ", employees);
    } catch (err) {
      setError("Failed to search employees. Please try again.");
      setResults([]);
    }
  };

  const { columns, rows } = data(results, setSelectedEmployee, setActiveTab);

  return (
    <div>
      {/* Header */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Search Employee
      </Typography>

      {/* Employee Personal Information Section */}
      <Box sx={{ backgroundColor: "#1769aa", padding: 1, mb: 2 }}>
        <Typography variant="subtitle1" className="text-white">
          Search Employee
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ marginBottom: "40px" }}>
        <Grid item xs={3}>
          <p className="text-xs">Employee No.:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="employeeNo"
            value={searchParams.employeeNo}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs">First Name:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="firstName"
            onChange={handleInputChange}
            value={searchParams.firstName}
          />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs">Middle Name:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="middleName"
            onChange={handleInputChange}
            value={searchParams.middleName}
          />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs">Last Name:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="lastName"
            onChange={handleInputChange}
            value={searchParams.lastName}
          />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs">Gender:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="gender"
            select
            sx={{ "& .MuiInputBase-root": { height: "34px", paddingRight: "0px" } }}
          >
            <MenuItem value="Male">Male</MenuItem>
            {/* Add other options as needed */}
          </TextField>
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs">CNIC:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="cnic"
            onChange={handleInputChange}
            value={searchParams.cnic}
          />
        </Grid>

        <Grid item xs={3}>
          <p className="text-xs">Date of Birth:</p>
          <TextField
            variant="outlined"
            fullWidth
            name="dateOfBirth"
            type="date"
            value={searchParams.dateOfBirth}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>

      {/* Buttons Container */}
      <Grid container sx={{ marginTop: 3, marginBottom: 8 }} justifyContent="space-between">
        {/* Grouped Buttons: Search, Clear, Cancel */}
        <Grid item>
          <Grid container spacing={1}>
            <Grid item>
              <MDButton
                variant="gradient"
                style={{
                  borderRadius: 0,
                  minHeight: 0,
                  backgroundColor: "#1694c4",
                  color: "White",
                }}
                onClick={handleSearch}
              >
                Search
              </MDButton>
            </Grid>

            <Grid item>
              <MDButton
                variant="gradient"
                style={{
                  borderRadius: 0,
                  minHeight: 0,
                  backgroundColor: "#f44336",
                  color: "White",
                }}
              >
                <button type="submit" className="text-xs">
                  Clear
                </button>
              </MDButton>
            </Grid>

            <Grid item>
              <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
                <span className="text-xs">Cancel</span>
              </MDButton>
            </Grid>
          </Grid>
        </Grid>

        {/* Separate Button: Show Advanced Options */}
        <Grid item>
          <MDButton
            variant="gradient"
            style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}
            onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
          >
            <span className="text-xs">
              {showAdvancedOptions ? "Hide" : "Show"} Advanced Options
            </span>
          </MDButton>
        </Grid>
      </Grid>

      {/* Advanced Options Section */}
      {showAdvancedOptions && (
        <Box>
          <Box sx={{ backgroundColor: "#1769aa" }} className="px-2 mb-4 text-white">
            Organization Unit
          </Box>
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center w-full gap-10">
            <div className="lg:col-span-1 gap-4">
              <h4 className="text-sm font-semibold">
                Organization Unit: <span className="text-red-600">*</span>
              </h4>
              <DataTable
                table={{ columns: LColumns, rows: LRows }}
                showTotalEntries
                isSorted
                noEndBorder
                entriesPerPage={false}
              />
              <p className="text-sm">
                Total Record(s) found: <span className="text-red-600 font-semibold">(2)</span>
              </p>
            </div>
            <div className="lg:col-span-2 space-y-5 px-10">
              <div className="flex items-center gap-8">
                <p>Root Node:</p>
                <p>IAC</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex items-center gap-4">
                  <label htmlFor="parentType" className="text-xs">
                    Organizational Type:
                  </label>
                  <select
                    id="parentType"
                    name="parentType"
                    className="block w-44 h-8 border border-gray-300 rounded-md shadow-sm"
                  >
                    <option value="salman">salman</option>
                  </select>
                </div>
                <div className="flex items-center gap-4">
                  <label htmlFor="parentNature" className="text-xs">
                    Organization Nature:
                  </label>
                  <select
                    id="parentNature"
                    name="parentNature"
                    className="block w-44 h-8 border border-gray-300 rounded-md shadow-sm"
                  >
                    <option value="salman">salman</option>
                  </select>
                </div>
              </div>
              <DataTable
                table={{ columns: RColumns, rows: RRows }}
                showTotalEntries
                isSorted
                noEndBorder
                entriesPerPage={false}
              />
              <p className="text-sm">
                Total Record(s) found: <span className="text-red-600 font-semibold">(2)</span>
              </p>
            </div>
          </div>

          <Box className="px-2 font-bold text-sm mt-10">
            Selected Organization Unit:{" "}
            <span className="font-normal">Interactive Group Hospital, IAC, Gynea</span>
          </Box>
        </Box>
      )}

      {/* Searched Records */}
      <Box sx={{ backgroundColor: "#1769aa", padding: 1, mb: 2, mt: 6 }}>
        <Typography variant="subtitle1" className="text-white">
          Searched Record
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DataTable
            table={{ columns, rows }}
            showTotalEntries
            isSorted
            noEndBorder
            entriesPerPage={false}
          />
        </Grid>
      </Grid>
    </div>
  );
}

SearchEmployee.propTypes = {
  setSelectedEmployee: PropTypes.func.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default SearchEmployee;
