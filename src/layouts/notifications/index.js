import { useState } from "react";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
import MDButton from "components/MDButton";

import WaitingListTable from "./components/Waiting List";

function ManagePatients() {
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
          className="h-screen"
        >
          <Box>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Manage Patients</p>
            </Typography>
          </Box>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
            <Grid
              item
              xs={12}
              sm={12}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="font-semibold text-xs mb-2">
                  Oragnization Unit:{" "}
                  <span className="text-xs text-gray-500">Emergency / Emergency</span>
                </p>
              </Box>
            </Grid>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* Date From */}
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
                  <p className="flex flex-row text-xs items-center mb-2">
                    Date From:<span className="text-red-600 text-base mx-2">*</span>
                  </p>
                  <DatePicker
                    renderInput={(params) => (
                      <TextField name="dob" required {...params} fullWidth variant="outlined" />
                    )}
                  />
                </Box>
              </Grid>
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* Date To */}
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
                  <p className="flex flex-row text-xs items-center mb-2">
                    Date To:<span className="text-red-600 text-base mx-2">*</span>
                  </p>
                  <DatePicker
                    renderInput={(params) => (
                      <TextField name="dob" required {...params} fullWidth variant="outlined" />
                    )}
                  />
                </Box>
              </Grid>
            </LocalizationProvider>

            <Grid item xs={12} sm={3}>
              <RadioGroup row>
                <FormControlLabel value="Date Time" control={<Radio />} label="Date Time" />
                <FormControlLabel value="Priority" control={<Radio />} label="Priority" />
              </RadioGroup>
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
                <p className="flex flex-row text-xs items-center mb-2">
                  Doctor:<span className="text-red-600 text-xs mx-2">Dr. Rauf</span>
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
                <p className="text-xs mb-2">First Name:</p>
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
                <p className="text-xs mb-2">Middle Name:</p>
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
                <p className="text-xs mb-2">Last Name:</p>
                <TextField variant="outlined" fullWidth />
              </Box>
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
          </Grid>

          <section id="nav">
            <nav className="w-full mb-3">
              <div>
                <div className="flex items-center">
                  <Grid container sx={{ marginTop: 1 }} className="text-center">
                    {/* Navigation Links */}
                    <Grid
                      item
                      sm={2}
                      // onClick={() => handleSectionClick("patientDetails")}
                      // className={`cursor-pointer ${
                      //   activeSection === "patientDetails" ? "text-[#1694c4]" : ""
                      // }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="" className={`font-semibold text-xs relative`}>
                          Waiting List
                        </a>
                        {/* <span
                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                              activeSection === "patientDetails" ? "scale-x-100" : "scale-x-0"
                            } transition-transform duration-300`}
                          ></span> */}
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={2}
                      // onClick={() => handleSectionClick("emergencyInfo")}
                      // className={`cursor-pointer ${
                      //   activeSection === "emergencyInfo" ? "text-[#1694c4]" : ""
                      // }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="" className={`font-semibold text-xs relative`}>
                          My Appointments
                        </a>
                        {/* <span
                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                              activeSection === "emergencyInfo" ? "scale-x-100" : "scale-x-0"
                            } transition-transform duration-300`}
                          ></span> */}
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={2}
                      // onClick={() => handleSectionClick("insuranceDetails")}
                      // className={`cursor-pointer ${
                      //   activeSection === "insuranceDetails" ? "text-[#1694c4]" : ""
                      // }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="" className={`font-semibold text-xs relative`}>
                          Referred Patients
                        </a>
                        {/* <span
                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                              activeSection === "insuranceDetails" ? "scale-x-100" : "scale-x-0"
                            } transition-transform duration-300`}
                          ></span> */}
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={2}
                      // onClick={() => handleSectionClick("insuranceDetails")}
                      // className={`cursor-pointer ${
                      //   activeSection === "insuranceDetails" ? "text-[#1694c4]" : ""
                      // }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="" className={`font-semibold text-xs relative`}>
                          Patient Attended
                        </a>
                        {/* <span
                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                              activeSection === "insuranceDetails" ? "scale-x-100" : "scale-x-0"
                            } transition-transform duration-300`}
                          ></span> */}
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={2}
                      // onClick={() => handleSectionClick("insuranceDetails")}
                      // className={`cursor-pointer ${
                      //   activeSection === "insuranceDetails" ? "text-[#1694c4]" : ""
                      // }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="" className={`font-semibold text-xs relative`}>
                          Send Back Medicine list
                        </a>
                        {/* <span
                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                              activeSection === "insuranceDetails" ? "scale-x-100" : "scale-x-0"
                            } transition-transform duration-300`}
                          ></span> */}
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </nav>
          </section>
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <WaitingListTable />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </DashboardLayout>
  );
}

export default ManagePatients;
