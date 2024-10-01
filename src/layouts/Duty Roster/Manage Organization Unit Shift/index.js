import {
  Typography,
  Box,
  Grid,
  FormControlLabel,
  Checkbox,
  TextField,
  FormGroup,
  FormControl,
} from "@mui/material";

import React, { useState } from "react";

// import data from "./data";
import DataTable from "examples/Tables/DataTable";
import data from "./data";
import shiftsData from "./data/shifts";

const ManageOrganizationUnitShift = () => {
  const { columns, rows } = data();
  const { columns: shiftsColumns, rows: shiftsRows } = shiftsData();

  return (
    <div>
      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Manage Shift Type</p>
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: 1 }} className="flex items-end">
        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <Box>
            <p className="font-semibold text-xs mb-2">
              Organization Unit: <span className="text-xs text-gray-500">Dr. John Smith</span>
            </p>
          </Box>
        </Grid>

        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <div>
            {/* Label */}
            <p htmlFor="organizationType" className="flex flex-row text-xs items-center">
              Organization Type:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <select
              id="organizationType"
              name="organizationType"
              //   value={patient.organizationType}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.organizationType ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value=""></option>
            </select>
          </div>
        </Grid>

        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <div>
            {/* Label */}
            <p htmlFor="organizationNature" className="flex flex-row text-xs items-center">
              Organization Nature:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <select
              id="organizationNature"
              name="organizationNature"
              //   value={patient.organizationNature}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.organizationNature ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value=""></option>
            </select>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        <Grid item xs={12}>
          <DataTable
            table={{ columns, rows }}
            showTotalEntries={true}
            isSorted={true}
            noEndBorder
            entriesPerPage={false}
          />
        </Grid>
      </Grid>

      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Shift Detail</p>
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <p className="flex text-xs items-center">
            Shift Name:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          <TextField
            variant="outlined"
            name="shiftName"
            fullWidth
            readOnly
            // value="shiftName"
            // value={emergencyCase.shiftName}
            // onChange={handleInputChange}
            // error={!!errors.shiftName}
            // helperText={errors.shiftName}
          />
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
            <p htmlFor="shiftType" className="text-xs mb-2">
              Shift Type:
            </p>

            {/* Select Menu */}
            <select
              id="shiftType"
              name="shiftType"
              //   value={patient.shiftType}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.shiftType ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value=""></option>
            </select>
            {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
          </div>
        </Grid>

        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <p className="flex text-xs items-center">
            Start Time:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          <div className="flex items-center">
            {/* Select Menu */}
            <select
              id="startTimeHrs"
              name="startTimeHrs"
              //   value="0"
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.startTimeHrs ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value="0">0</option>
            </select>
            <p className="text-xs mr-2">Hour(s)</p>
            {/* Select Menu */}
            <select
              id="startTimeMins"
              name="startTimeMins"
              //   value="0"
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.startTimeMins ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value="0">0</option>
            </select>
            <p className="text-xs">Minute(s)</p>
          </div>
        </Grid>

        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <p className="flex text-xs items-center">
            Start Time:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          <div className="flex items-center">
            {/* Select Menu */}
            <select
              id="endTimeHrs"
              name="endTimeHrs"
              //   value="0"
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.endTimeHrs ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value="0">0</option>
            </select>
            <p className="text-xs mr-2">Hour(s)</p>
            {/* Select Menu */}
            <select
              id="endTimeMins"
              name="endTimeMins"
              //   value="0"
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.endTimeMins ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value="0">0</option>
            </select>
            <p className="text-xs">Minute(s)</p>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            paddingTop: "5px !important",
          }}
          className="flex"
        >
          <p className="flex text-xs items-center mr-2">
            Days:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="all"
                control={<Checkbox />}
                label="All"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Monday"
                control={<Checkbox />}
                label="Monday"
                labelPlacement="end"
              />
              <FormControlLabel
                value="tuesday"
                control={<Checkbox />}
                label="Tuesday"
                labelPlacement="end"
              />
              <FormControlLabel
                value="wednesday"
                control={<Checkbox />}
                label="Wednesday"
                labelPlacement="end"
              />
              <FormControlLabel
                value="thursday"
                control={<Checkbox />}
                label="Thursday"
                labelPlacement="end"
              />
              <FormControlLabel
                value="friday"
                control={<Checkbox />}
                label="Friday"
                labelPlacement="end"
              />
              <FormControlLabel
                value="saturday"
                control={<Checkbox />}
                label="Saturday"
                labelPlacement="end"
              />
              <FormControlLabel
                value="sunday"
                control={<Checkbox />}
                label="Sunday"
                labelPlacement="end"
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DataTable
            table={{ columns: shiftsColumns, rows: shiftsRows }}
            showTotalEntries={false}
            isSorted={true}
            noEndBorder
            entriesPerPage={false}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ManageOrganizationUnitShift;
