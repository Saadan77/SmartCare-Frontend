import React, { useState } from "react";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { TextField, Container, Typography, Grid, Paper, Box } from "@mui/material";
import MDButton from "components/MDButton";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// Data
import patientsData from "./data/Patients";
import scheduledAppointmentsData from "./data/Scheduled Appointments";

function PatientAppointment() {
  const { columns: patientsColumns, rows: patientsRows } = patientsData();
  const { columns: scheduledAppointmentsColumns, rows: scheduledAppointmentsRows } =
    scheduledAppointmentsData();

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
        <Paper
          elevation={3}
          sx={{ padding: 2, marginTop: 3, position: "relative" }}
          className="h-full"
        >
          <Box>
            <Typography sx={{ marginTop: 1 }} style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">
                Search Patient For Appointment
              </p>
            </Typography>
          </Box>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">MR No:</p>
                <TextField variant="outlined" fullWidth />
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Patient First Name:</p>
                <TextField variant="outlined" fullWidth />
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Patient Middle Name:</p>
                <TextField variant="outlined" fullWidth />
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Patient Last Name:</p>
                <TextField variant="outlined" fullWidth />
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">National ID Number/SSN:</p>
                <TextField variant="outlined" fullWidth />
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Phone number:</p>
                <TextField variant="outlined" fullWidth />
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">City:</p>
                <TextField variant="outlined" fullWidth />
              </Box>
            </Grid>
          </Grid>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
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
                  SEARCH
                </button>
              </MDButton>
            </Grid>

            <Grid item sx={{ paddingLeft: "1px !important" }}>
              <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
                <span className="text-xs">Clear</span>
              </MDButton>
            </Grid>

            <Grid item sx={{ paddingLeft: "1px !important" }}>
              <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="info">
                <span className="text-xs">Cancel</span>
              </MDButton>
            </Grid>

            <Grid item sx={{ paddingLeft: "1px !important" }}>
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
                  ADD PATIENT
                </button>
              </MDButton>
            </Grid>
          </Grid>

          <Box>
            <Typography sx={{ marginTop: 2 }} style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Patients</p>
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item sm={12}>
              <DataTable
                table={{ columns: patientsColumns, rows: patientsRows }}
                showTotalEntries={true}
                isSorted={true}
                noEndBorder
                entriesPerPage={false}
              />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 1 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Patient Information</p>
            </Typography>
          </Box>

          <Grid
            item
            xs={6}
            sm={3}
            sx={{
              paddingTop: "5px !important",
              paddingBottom: "5px !important",
            }}
          >
            <Box>
              <p className="font-semibold text-xs mb-2">
                Patient Name: <span className="text-xs text-gray-500">John Smith</span>
              </p>
            </Box>
          </Grid>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
            <Grid
              item
              xs={12}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="font-semibold text-xs mb-2">
                  MR No.: <span className="text-xs text-gray-500">00001-01-10-2024</span>
                </p>
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="flex flex-row text-xs font-semibold items-center mb-2">
                  Gender:<p className="font-normal text-gray-600 text-xs mx-2">Male</p>
                </p>
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="flex flex-row text-xs font-semibold items-center mb-2">
                  DOB:<p className="font-normal text-gray-600 text-xs mx-2">12/09/2001</p>
                </p>
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="flex flex-row text-xs font-semibold items-center mb-2">
                  Age:<p className="font-normal text-gray-600 text-xs mx-2">22 years 09 months</p>
                </p>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 1 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Appointment Details</p>
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ marginTop: 1 }} className="flex items-end">
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
                <p htmlFor="complaint" className="flex text-xs items-center">
                  Complaint:<span className="text-red-600 text-base mx-2">*</span>
                </p>
                {/* Select Menu */}
                <select
                  id="complaint"
                  name="complaint"
                  //   value={patient.complaint}
                  //   onChange={handleInputChange}
                  required
                  //   className={`block w-full h-8 border ${
                  //     errors.complaint ? "border-red-500" : "border-gray-300"
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
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <div>
                {/* Label */}
                <p htmlFor="doctor" className="flex text-xs items-center">
                  Doctor:<span className="text-red-600 text-base mx-2">*</span>
                </p>

                {/* Select Menu */}
                <select
                  id="doctor"
                  name="doctor"
                  //   value={patient.doctor}
                  //   onChange={handleInputChange}
                  required
                  //   className={`block w-full h-8 border ${
                  //     errors.doctor ? "border-red-500" : "border-gray-300"
                  //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                >
                  <option value="Dr. John Smith">Dr. John Smith</option>
                </select>
                {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
              </div>
            </Grid>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* Appointment Date */}
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
                    Appointment Date:<span className="text-red-600 text-base mx-2">*</span>
                  </p>
                  <DatePicker
                    renderInput={(params) => (
                      <TextField
                        name="appointentDate"
                        required
                        {...params}
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />
                </Box>
              </Grid>
            </LocalizationProvider>

            <Grid
              item
              xs={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <p className="flex text-xs items-center">
                Doctor&apos;s Shift:<span className="text-red-600 text-base mx-2">*</span>
              </p>

              {/* Select Menu */}
              <select
                id="doctorsShift"
                name="doctorsShift"
                //   value={patient.doctorsShift}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.doctorsShift ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="Medical">Medical</option>
              </select>
              {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
            </Grid>

            <Grid
              item
              xs={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="font-semibold text-xs mb-2">
                  Doctors Session: <span className="text-xs text-gray-500">07:00 - 09:00</span>
                </p>
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
              <div>
                {/* Label */}
                <p htmlFor="appointmentTime" className="flex flex-row text-xs items-center">
                  Appointment Time:<span className="text-red-600 text-base mx-2">*</span>
                </p>

                {/* Select Menu */}
                <select
                  id="appointmentTime"
                  name="appointmentTime"
                  //   value={patient.appointmentTime}
                  //   onChange={handleInputChange}
                  required
                  //   className={`block w-full h-8 border ${
                  //     errors.appointmentTime ? "border-red-500" : "border-gray-300"
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
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <div>
                {/* Label */}
                <p htmlFor="appointmentType" className="flex flex-row text-xs items-center">
                  Appointment Type:<span className="text-red-600 text-base mx-2">*</span>
                </p>

                {/* Select Menu */}
                <select
                  id="appointmentType"
                  name="appointmentType"
                  //   value={patient.appointmentType}
                  //   onChange={handleInputChange}
                  required
                  //   className={`block w-full h-8 border ${
                  //     errors.appointmentType ? "border-red-500" : "border-gray-300"
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
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <div>
                {/* Label */}
                <p htmlFor="priority" className="flex flex-row text-xs items-center">
                  Priority:<span className="text-red-600 text-base mx-2">*</span>
                </p>

                {/* Select Menu */}
                <select
                  id="priority"
                  name="priority"
                  //   value={patient.priority}
                  //   onChange={handleInputChange}
                  required
                  //   className={`block w-full h-8 border ${
                  //     errors.priority ? "border-red-500" : "border-gray-300"
                  //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                >
                  <option value=""></option>
                </select>
                {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
              </div>
            </Grid>

            <Grid item xs={6}>
              <p className="text-xs mb-2">Remarks:</p>
              <TextField
                variant="outlined"
                name="remarks"
                fullWidth
                // value={emergencyCase.remarks}
                // onChange={handleInputChange}
                // error={!!errors.remarks}
                // helperText={errors.remarks}
              />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Searched Appointment(s)</p>
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item sm={12}>
              <DataTable
                table={{ columns: scheduledAppointmentsColumns, rows: scheduledAppointmentsRows }}
                showTotalEntries={true}
                isSorted={true}
                noEndBorder
                entriesPerPage={false}
              />
            </Grid>
          </Grid>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex justify-end">
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
                  SAVE
                </button>
              </MDButton>
            </Grid>

            <Grid item sx={{ paddingLeft: "1px !important" }}>
              <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
                <span className="text-xs">Cancel</span>
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
                  SAVE AND PRINT
                </button>
              </MDButton>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </DashboardLayout>
  );
}

export default PatientAppointment;
