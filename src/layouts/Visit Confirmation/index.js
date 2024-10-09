import React, { useState } from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Icon,
  Box,
  Container,
  Paper,
  Grid,
} from "@mui/material";

import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import panelDetailsData from "./Panel Details";
import patientsData from "./Patients";
import organizationUnitData from "./Organization Unit";
import medicalDoctorsData from "./Medical Doctors";
import confirmedPatientsData from "./Confirmed Patients";

function VisitConfirmation() {
  const { columns: panelDetailsColumns, rows: panelDetailsRows } = panelDetailsData();
  const { columns: patientsColumns, rows: patientsRows } = patientsData();
  const { columns: organizationUnitColumns, rows: organizationUnitRows } = organizationUnitData();
  const { columns: medicalDoctorsColumns, rows: medicalDoctorsRows } = medicalDoctorsData();
  const { columns: confirmedPatientsColumns, rows: confirmedPatientsRows } =
    confirmedPatientsData();

  const [expandedAccordions, setExpandedAccordions] = useState({
    panelDetails: false,
  });

  const handleAccordionToggle = (accordionId) => () => {
    setExpandedAccordions((prevState) => ({
      ...prevState,
      [accordionId]: !prevState[accordionId],
    }));
  };

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
              <Accordion
                expanded={expandedAccordions.panelDetails}
                onChange={handleAccordionToggle("panelDetails")}
              >
                <AccordionSummary
                  expandIcon={<Icon>{expandedAccordions.panelDetails ? "-" : "+"}</Icon>}
                  aria-controls="panelDetails-content"
                  id="panelDetails-header"
                >
                  <Typography variant="h6">Panel Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <DataTable
                    table={{ columns: panelDetailsColumns, rows: panelDetailsRows }}
                    showTotalEntries={true}
                    isSorted={true}
                    noEndBorder
                    entriesPerPage={false}
                  />
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Patients</p>
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DataTable
                table={{ columns: patientsColumns, rows: patientsRows }}
                showTotalEntries={true}
                isSorted={true}
                noEndBorder
                entriesPerPage={false}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Box sx={{ marginTop: 2 }}>
                <Typography style={{ fontWeight: "bold" }} gutterBottom>
                  <p className="text-base text-[#42424a] font-semibold mr-2">Organization Unit</p>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={10}>
              <Box sx={{ marginTop: 2 }}>
                <Typography style={{ fontWeight: "bold" }} gutterBottom>
                  <p className="text-base text-[#42424a] font-semibold mr-2">Medical Doctors</p>
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={2}>
              <DataTable
                table={{ columns: organizationUnitColumns, rows: organizationUnitRows }}
                showTotalEntries={false}
                isSorted={true}
                noEndBorder
                entriesPerPage={false}
              />
            </Grid>
            <Grid item xs={10}>
              <DataTable
                table={{ columns: medicalDoctorsColumns, rows: medicalDoctorsRows }}
                showTotalEntries={false}
                isSorted={true}
                noEndBorder
                entriesPerPage={false}
              />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Department Level Visit</p>
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
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
                <p htmlFor="organizationVisit" className="flex text-xs items-center">
                  Organization Visit:<span className="text-red-600 text-base mx-2">*</span>
                </p>

                {/* Select Menu */}
                <select
                  id="organizationVisit"
                  name="organizationVisit"
                  //   value={patient.organizationVisit}
                  //   onChange={handleInputChange}
                  required
                  //   className={`block w-full h-8 border ${
                  //     errors.organizationVisit ? "border-red-500" : "border-gray-300"
                  //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                >
                  <option value=">Normal Visit">Normal Visit</option>
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
                <p htmlFor="speciality" className="flex text-xs items-center">
                  Speciality:<span className="text-red-600 text-base mx-2">*</span>
                </p>

                {/* Select Menu */}
                <select
                  id="speciality"
                  name="speciality"
                  //   value={patient.speciality}
                  //   onChange={handleInputChange}
                  required
                  //   className={`block w-full h-8 border ${
                  //     errors.speciality ? "border-red-500" : "border-gray-300"
                  //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                >
                  <option value=""></option>
                </select>
                {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
              </div>
            </Grid>

            <Grid item sx={{ marginTop: 1 }}>
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
                  Add
                </button>
              </MDButton>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Confirmed Patients</p>
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DataTable
                table={{ columns: confirmedPatientsColumns, rows: confirmedPatientsRows }}
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
          </Grid>
        </Paper>
      </Container>
    </DashboardLayout>
  );
}

export default VisitConfirmation;
