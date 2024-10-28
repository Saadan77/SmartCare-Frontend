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
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
} from "@mui/material";

import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import addedServicesPackagesData from "./components/Added Services/Packages/data";
import viewFeeStructureData from "./components/View Fee Structure/data";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function FeeStructure() {
  const { columns: addedServicesPackagesColumns, rows: addedServicesPackagesRows } =
    addedServicesPackagesData();

  const { columns: viewFeeStructureColumns, rows: viewFeeStructureRows } = viewFeeStructureData();

  const [expandedAccordions, setExpandedAccordions] = useState({
    specifyDoctr: false,
    specifyOrganizationUnit: false,
    specifyPanelOrganization: false,
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
              <p className="text-base text-[#42424a] font-semibold mr-2">Fee Structure</p>
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
                <p className="flex flex-row text-xs items-center">
                  Fee Group:<span className="text-red-600 text-base mx-2">*</span>
                </p>
                <TextField variant="outlined" fullWidth />
              </Box>
            </Grid>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* From Date*/}
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
                    From Date:<span className="text-red-600 text-base mx-2">*</span>
                  </p>
                  <DatePicker
                    renderInput={(params) => (
                      <TextField
                        name="fromDate"
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

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* To Date */}
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
                    To Date:<span className="text-red-600 text-base mx-2">*</span>
                  </p>
                  <DatePicker
                    renderInput={(params) => (
                      <TextField name="toDate" required {...params} fullWidth variant="outlined" />
                    )}
                  />
                </Box>
              </Grid>
            </LocalizationProvider>

            <Grid item xs={12} sm={3} sx={{ display: "flex" }}>
              <p className="text-xs mr-2">Select Type:</p>
              <RadioGroup row>
                <FormControlLabel value="Date Time" control={<Radio />} label="Date Time" />
                <FormControlLabel value="Priority" control={<Radio />} label="Priority" />
              </RadioGroup>
            </Grid>
          </Grid>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
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
                <p htmlFor="group" className="text-xs mb-2">
                  Group:
                </p>

                {/* Select Menu */}
                <select
                  id="group"
                  name="group"
                  //   value={patient.group}
                  //   onChange={handleInputChange}
                  className={`block w-full h-8 border "border-gray-300"
                  rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                >
                  <option value="">Select Group</option>
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
              <div>
                {/* Label */}
                <p htmlFor="subGroup" className="text-xs mb-2">
                  Sub Group:
                </p>

                {/* Select Menu */}
                <select
                  id="subGroup"
                  name="subGroup"
                  //   value={patient.subGroup}
                  //   onChange={handleInputChange}
                  className={`block w-full h-8 border "border-gray-300"
                  rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                >
                  <option value="">Select Sub Group</option>
                </select>
              </div>
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
                <p className="flex flex-row text-xs items-center">
                  Service:<span className="text-red-600 text-base mx-2">*</span>
                </p>
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
                <p className="flex flex-row text-xs items-center">
                  Service Rate:<span className="text-red-600 text-base mx-2">*</span>
                </p>
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
                <p className="flex flex-row text-xs items-center">
                  Urgent Rate:<span className="text-red-600 text-base mx-2">*</span>
                </p>
                <TextField variant="outlined" fullWidth />
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
                expanded={expandedAccordions.specifyDoctor}
                onChange={handleAccordionToggle("specifyDoctor")}
              >
                <AccordionSummary
                  expandIcon={<Icon>{expandedAccordions.specifyDoctor ? "-" : "+"}</Icon>}
                  aria-controls="specifyDoctor-content"
                  id="specifyDoctor-header"
                >
                  <Typography variant="h6">Specify Doctor</Typography>
                </AccordionSummary>
                {/* <AccordionDetails>
                  <DataTable
                    table={{ columns: panelDetailsColumns, rows: panelDetailsRows }}
                    showTotalEntries={true}
                    isSorted={true}
                    noEndBorder
                    entriesPerPage={false}
                  />
                </AccordionDetails> */}
              </Accordion>
            </Grid>

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
                expanded={expandedAccordions.specifyOrganizationUnit}
                onChange={handleAccordionToggle("specifyOrganizationUnit")}
              >
                <AccordionSummary
                  expandIcon={<Icon>{expandedAccordions.specifyOrganizationUnit ? "-" : "+"}</Icon>}
                  aria-controls="specifyOrganizationUnit-content"
                  id="specifyOrganizationUnit-header"
                >
                  <Typography variant="h6">Specify Doctor</Typography>
                </AccordionSummary>
                {/* <AccordionDetails>
                  <DataTable
                    table={{ columns: panelDetailsColumns, rows: panelDetailsRows }}
                    showTotalEntries={true}
                    isSorted={true}
                    noEndBorder
                    entriesPerPage={false}
                  />
                </AccordionDetails> */}
              </Accordion>
            </Grid>

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
                expanded={expandedAccordions.specifyPanelOrganization}
                onChange={handleAccordionToggle("specifyPanelOrganization")}
              >
                <AccordionSummary
                  expandIcon={
                    <Icon>{expandedAccordions.specifyPanelOrganization ? "-" : "+"}</Icon>
                  }
                  aria-controls="specifyPanelOrganization-content"
                  id="specifyPanelOrganization-header"
                >
                  <Typography variant="h6">Specify Doctor</Typography>
                </AccordionSummary>
                {/* <AccordionDetails>
                  <DataTable
                    table={{ columns: panelDetailsColumns, rows: panelDetailsRows }}
                    showTotalEntries={true}
                    isSorted={true}
                    noEndBorder
                    entriesPerPage={false}
                  />
                </AccordionDetails> */}
              </Accordion>
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
                  ADD
                </button>
              </MDButton>
            </Grid>

            <Grid item sx={{ paddingLeft: "1px !important" }}>
              <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
                <span className="text-xs">Clear</span>
              </MDButton>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Added Services/Packages</p>
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DataTable
                table={{ columns: addedServicesPackagesColumns, rows: addedServicesPackagesRows }}
                showTotalEntries={true}
                isSorted={true}
                noEndBorder
                entriesPerPage={false}
              />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">View Fee Structures</p>
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DataTable
                table={{ columns: viewFeeStructureColumns, rows: viewFeeStructureRows }}
                showTotalEntries={false}
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

export default FeeStructure;
