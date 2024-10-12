import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Tab,
  Typography,
  Button,
  TextField,
  Tabs,
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import VitalsData from "./layouts/Vitals/VitalsData";
import VitalsTable from "./layouts/Vitals/VitalsTable";
import WardBedShifting from "./layouts/WardBedShifting";
import InvestigationSheet from "./layouts/InvestigationSheet";
import MedicationAdmin from "./layouts/MedicationAdmin";
import PhysicianOrderTable from "./layouts/PhysicianOrderTable";
import Consultation from "./layouts/Consultation";
import IntakeOutput from "./layouts/IntakeOutput";
import PreOpOrders from "./layouts/PreOpOrders";
import PostOpOrderTable from "./layouts/PostOpOrderTable";
import PatientHealthState from "./layouts/PatientHealthState";
import DietHistoryTable from "./layouts/DietHistoryTable";
import GlasgowComaScale from "./layouts/GlasgowComaScale";
import FormPage from "./layouts/BloodBankRequisition/FormPage";

import MDButton from "./components/MDButton";

const App = () => {
  const [vitals, setVitals] = useState([]);
  const [value, setValue] = useState("");
  const [nursingNotes, setNursingNotes] = useState("");
  const [savedNotes, setSavedNotes] = useState("");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const addVitals = (newVital) => {
    setVitals([...vitals, newVital]);
  };

  const handleSaveNotes = () => {
    setSavedNotes(nursingNotes);
    alert("Nursing notes saved successfully!");
    setNursingNotes(""); // Clear the input box after saving
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "20px",
        backgroundColor: "#fff",
        padding: "20px",
        border: "1px solid #ddd",
      }}
    >
      {/* Header Section */}
      <Box sx={{ padding: "10px 0" }}>
        <Typography variant="h5" sx={{ textAlign: "left", fontWeight: "bold" }}>
          Nursing Record - Dependant Patient
        </Typography>
      </Box>

      {/* Patient Information */}
      <Box>
        <Typography variant="h6">Patient Information</Typography>
        <Grid container spacing={2} sx={{ marginTop: "1px" }}>
          <Grid item xs={12} md={4}>
            <Typography>
              <strong>MR No:</strong> 01-17-0022236
            </Typography>
            <Typography>
              <strong>Gender:</strong> Female
            </Typography>
            <Typography>
              <strong>Ward:</strong> Room 10
            </Typography>
            <Typography>
              <strong>Admission Date/Time:</strong> 06-Mar-2018, 07:24 PM
            </Typography>
            <Typography>
              <strong>Location:</strong> Sui
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography>
              <strong>Patient Name:</strong> KHADI ZADI W/O GHULAM SHABIR BUGTI
            </Typography>
            <Typography>
              <strong>DOB:</strong> 31-Dec-1975
            </Typography>
            <Typography>
              <strong>Bed No:</strong> 01
            </Typography>
            <Typography>
              <strong>Primary Patient Name:</strong> Ghulam Shakir Bugti
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography>
              <strong>Admission No:</strong> 01-18-0001783
            </Typography>
            <Typography>
              <strong>Age:</strong> 42 years 3 months
            </Typography>
            <Typography>
              <strong>Consultant:</strong> Dr. Nureen Bodar
            </Typography>
            <Typography>
              <strong>Designation:</strong> Assistant Tradesman
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Patient Alerts */}
      <Box sx={{ marginTop: "20px" }}>
        <Typography variant="h6">Patient Alerts</Typography>
        <Typography variant="body1" sx={{ marginTop: "10px" }}>
          <strong>General Alert:</strong>{" "}
          <span style={{ color: "#ed1329" }}>Self, Anorexia, Anorexia</span>
        </Typography>
      </Box>

      {/* Tabs Section */}
      <Box sx={{ width: "100%", typography: "body1", marginTop: "20px" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
              sx={{
                "& .MuiTab-root": {
                  "&:hover": {
                    backgroundColor: "lightgrey",
                  },
                },
              }}
            >
              <Tab label="Nursing Notes" value="1" />
              <Tab label="Vitals" value="2" />
              <Tab label="Ward Bed Shifting" value="3" />
              <Tab label="Investigation Sheet" value="4" />
              <Tab label="Medication Administrator" value="5" />
              <Tab label="Physician Order" value="6" />
              <Tab label="Request for Consultation" value="7" />
              <Tab label="Intake/Output" value="8" />
              <Tab label="Pre-Op Order" value="9" />
              <Tab label="Post-Op Order" value="10" />
              <Tab label="Patient Health State" value="11" />
              <Tab label="Diet Advice" value="12" />
              <Tab label="Glasgow Coma Score" value="13" />
              <Tab label="Blood Bank Requisition" value="14" />
              <Tab label="Gynae/Obs" value="15" />
            </Tabs>
          </Box>

          {/* Tab Content */}
          <TabPanel value="1">
            <Typography variant="h6">Nursing Notes</Typography>
            <TextField
              label="Enter nursing notes here..."
              multiline
              rows={8}
              fullWidth
              value={nursingNotes}
              onChange={(e) => setNursingNotes(e.target.value)}
              variant="outlined"
              margin="normal"
            />
            <MDButton
              sx={{
                marginRight: 1,
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#115293" },
              }}
              variant="contained"
              color="primary"
              size="medium"
              onClick={handleSaveNotes}
            >
              Save
            </MDButton>
          </TabPanel>

          <TabPanel value="2">
            <VitalsData addVitals={addVitals} />
            <VitalsTable vitals={vitals} />
          </TabPanel>

          <TabPanel value="3">
            <WardBedShifting />
          </TabPanel>

          <TabPanel value="4">
            <InvestigationSheet />
          </TabPanel>

          <TabPanel value="5">
            <MedicationAdmin />
          </TabPanel>

          <TabPanel value="6">
            <PhysicianOrderTable />
          </TabPanel>

          <TabPanel value="7">
            <Consultation />
          </TabPanel>

          <TabPanel value="8">
            <IntakeOutput />
          </TabPanel>

          <TabPanel value="9">
            <PreOpOrders />
          </TabPanel>

          <TabPanel value="10">
            <PostOpOrderTable />
          </TabPanel>

          <TabPanel value="11">
            <PatientHealthState />
          </TabPanel>

          <TabPanel value="12">
            <DietHistoryTable />
          </TabPanel>

          <TabPanel value="13">
            <GlasgowComaScale />
          </TabPanel>

          <TabPanel value="14">
            <FormPage />
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};

export default App;
