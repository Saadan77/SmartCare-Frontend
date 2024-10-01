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
  TextField,
} from "@mui/material";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import data from "./data";
import MDButton from "components/MDButton";

function MedicineChargeFile() {
  const { columns, rows } = data();

  const [expandedAccordions, setExpandedAccordions] = useState({
    prescribedItems: false,
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
          <Box>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Medicine Charge File</p>
            </Typography>
          </Box>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-center">
            <Grid
              item
              xs={3}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <p className="flex text-xs items-center">
                Mr No.:<span className="text-red-600 text-base mx-2">*</span>
              </p>
              <TextField
                variant="outlined"
                name="mrNo"
                fullWidth
                readOnly
                value="00001-01-10-2024"
                // value={emergencyCase.mrNo}
                // onChange={handleInputChange}
                // error={!!errors.mrNo}
                // helperText={errors.mrNo}
              />
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
                  Search
                </button>
              </MDButton>
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
                  Advanced Search
                </button>
              </MDButton>
            </Grid>

            <Grid item className="flex items-center">
              <p className="text-xs text-sky-600">View Admitted Patients List</p>
            </Grid>

            <Grid item className="flex items-center">
              <p className="text-xs text-sky-600">View Pending Prescription(s) List</p>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 1 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Patient Information</p>
            </Typography>
          </Box>

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
                <p className="font-semibold text-xs mb-2">
                  Patient Name: <span className="text-xs text-gray-500">John Smith</span>
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
                expanded={expandedAccordions.prescribedItems}
                onChange={handleAccordionToggle("prescribedItems")}
              >
                <AccordionSummary
                  expandIcon={<Icon>{expandedAccordions.prescribedItems ? "-" : "+"}</Icon>}
                  aria-controls="prescribedItems-content"
                  id="prescribedItems-header"
                >
                  <Typography variant="h6">Prescribed Items</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <DataTable
                    table={{ columns, rows }}
                    showTotalEntries={true}
                    isSorted={true}
                    noEndBorder
                    entriesPerPage={false}
                  />
                  <Grid
                    className="flex justify-end"
                    container
                    spacing={1}
                    sx={{ marginTop: 1, marginRight: 1 }}
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
                          Add
                        </button>
                      </MDButton>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
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
                style={{
                  borderRadius: 0,
                  minHeight: 0,
                  backgroundColor: "#1694c4",
                  color: "White",
                }}
              >
                <button type="submit" className="text-xs">
                  SAVE AND DIAGNOSE
                </button>
              </MDButton>
            </Grid>
            <Grid item>
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

export default MedicineChargeFile;
