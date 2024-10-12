import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  Button,
  Tabs,
  Tab,
  TextField,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DataTable from "../../examples/Tables/DataTable";
import MDButton from "../../components/MDButton";

const VitalsData = () => {
  const initialVitals = {
    pulse: "85",
    bpSystolic: "120",
    bpDiastolic: "78",
    temperature: "101",
    respirationRate: "90",
    height: "176",
    weight: "60",
    bsf: "130",
    bsr: "150",
    spo2: "85",
    bmi: "19.37",
  };

  const [vitals, setVitals] = useState(initialVitals);
  const [calculatedBMI, setCalculatedBMI] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [previousVitals, setPreviousVitals] = useState([]); // To store fetched vitals
  const [savedVitals, setSavedVitals] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVitals({
      ...vitals,
      [name]: value,
    });
  };

  const calculateBMI = () => {
    const heightInMeters = vitals.height / 100;
    const bmi = (vitals.weight / (heightInMeters * heightInMeters)).toFixed(2);
    setVitals({
      ...vitals,
      bmi,
    });
    setCalculatedBMI(bmi);
  };

  // Calculate BMI when height or weight changes
  useEffect(() => {
    if (vitals.height && vitals.weight) {
      calculateBMI();
    }
  }, [vitals.height, vitals.weight]);

  const saveVitals = () => {
    setSavedVitals((prev) => [
      ...prev,
      { ...vitals, date: new Date().toLocaleString() },
    ]); // Add current vitals with date
    setAlert({
      show: true,
      message: "Vitals saved successfully!",
      severity: "success",
    });
    clearVitals(); // Clear fields after saving
  };

  const clearVitals = () => {
    setVitals({
      pulse: "",
      bpSystolic: "",
      bpDiastolic: "",
      temperature: "",
      respirationRate: "",
      height: "",
      weight: "",
      bsf: "",
      bsr: "",
      spo2: "",
      bmi: "",
    });
    setCalculatedBMI(null);
  };

  const handleSearchVitals = () => {
    if (!fromDate || !toDate) {
      setAlert({
        show: true,
        message: "Please select both From and To dates.",
        severity: "warning",
      });
      return;
    }

    // Simulate fetching data
    const fetchedVitals = [
      {
        date: "2023-09-15",
        pulse: "80",
        bpSystolic: "125",
        bpDiastolic: "82",
        temperature: "100",
        respirationRate: "88",
        height: "176",
        weight: "62",
        bsf: "120",
        bsr: "75",
        spo2: "90",
        bmi: "20.01",
      },
      {
        date: "2023-09-10",
        pulse: "78",
        bpSystolic: "118",
        bpDiastolic: "76",
        temperature: "98.6",
        respirationRate: "85",
        height: "176",
        weight: "60",
        bsf: "125",
        bsr: "109",
        spo2: "88",
        bmi: "19.37",
      },
    ];
    setPreviousVitals(fetchedVitals);
    setAlert({
      show: true,
      message: "Fetched previous vitals successfully!",
      severity: "info",
    });
  };

  // Define the columns for the DataTable
  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Pulse (bpm)",
        accessor: "pulse",
      },
      {
        Header: "BP (Sys/Dia)",
        accessor: (row) => `${row.bpSystolic}/${row.bpDiastolic}`,
        id: "bp",
      },
      {
        Header: "Temperature (°F)",
        accessor: "temperature",
      },
      {
        Header: "Respiration Rate",
        accessor: "respirationRate",
      },
      {
        Header: "Height (cm)",
        accessor: "height",
      },
      {
        Header: "Weight (kg)",
        accessor: "weight",
      },
      {
        Header: "BSF",
        accessor: "bsf",
      },
      {
        Header: "BSR",
        accessor: "bsr",
      },
      {
        Header: "SpO2",
        accessor: "spo2",
      },
      {
        Header: "BMI",
        accessor: "bmi",
      },
    ],
    []
  );

  const table = { columns, rows: previousVitals };

  const clearDateFields = () => {
    setFromDate(null);
    setToDate(null);
    setPreviousVitals([]);
    setAlert({
      show: true,
      message: "Cleared date fields and previous vitals.",
      severity: "info",
    });
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setAlert({ show: false, message: "", severity: "success" });
  };

  return (
    <Box>
      {/* Vitals Section with Header Buttons */}
      <Box>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          textColor=""
          indicatorColor="primary"
          sx={{
            marginBottom: 3,
            borderRadius: 1,
            "& .MuiTab-root": {
              "&:hover": {
                backgroundColor: "lightgrey",
              },
            },
          }}
        >
          <Tab label="Add Vitals" />
          <Tab label="View Previous Vital History" />
        </Tabs>
      </Box>

      {alert.show && (
        <Alert
          severity={alert.severity}
          onClose={() =>
            setAlert({ show: false, message: "", severity: "success" })
          }
          sx={{ mb: 2 }}
        >
          {alert.message}
        </Alert>
      )}

      {tabValue === 0 && (
        <Grid container spacing={2} className="vitals-grid">
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={2.4}>
                <TextField
                  label="Pulse (bpm)"
                  name="pulse"
                  value={vitals.pulse}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={2.4}>
                <TextField
                  label="BP Systolic (mmHg)"
                  name="bpSystolic"
                  value={vitals.bpSystolic}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={2.4}>
                <TextField
                  label="BP Diastolic (mmHg)"
                  name="bpDiastolic"
                  value={vitals.bpDiastolic}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={2.4}>
                <TextField
                  label="Temperature (°F)"
                  name="temperature"
                  value={vitals.temperature}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={2.4}>
                <TextField
                  label="Respiration Rate (/min)"
                  name="respirationRate"
                  value={vitals.respirationRate}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <TextField
                  label="Height (cm)"
                  name="height"
                  value={vitals.height}
                  onChange={handleChange}
                  onBlur={calculateBMI}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Weight (kg)"
                  name="weight"
                  value={vitals.weight}
                  onChange={handleChange}
                  onBlur={calculateBMI}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="SPO2 (%)"
                  name="spo2"
                  value={vitals.spo2}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="BSF (mg/dL)"
                  name="bsf"
                  value={vitals.bsf}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <TextField
                  label="BSR (mg/dL)"
                  name="bsr"
                  value={vitals.bsr}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3} display="flex" alignItems="center">
                <MDButton
                  variant="contained"
                  color="primary"
                  onClick={calculateBMI}
                >
                  Calculate BMI
                </MDButton>
                {calculatedBMI && (
                  <Typography variant="h6" sx={{ ml: 2, fontWeight: "bold" }}>
                    {calculatedBMI}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>

          {/* Action Buttons */}
          <Grid item xs={12} display="flex" justifyContent="center" gap={2}>
            <MDButton
              sx={{
                marginRight: 1,
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#115293" },
              }}
              variant="contained"
              color="primary"
              size="medium"
              onClick={saveVitals}
            >
              Save
            </MDButton>

            <MDButton
              sx={{
                marginRight: 1,
                backgroundColor: "#e0e0e0",
                color: "black",
                "&:hover": { backgroundColor: "#bdbdbd" },
              }}
              variant="contained"
              size="medium"
              onClick={clearVitals}
            >
              Cancel
            </MDButton>
            <MDButton variant="contained" color="info">
              Flow Chart
            </MDButton>
          </Grid>
        </Grid>
      )}

      {tabValue === 1 && (
        <Box className="previous-vital-history">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body1">From</Typography>
                <DatePicker
                  label="MM/DD/YYYY"
                  value={fromDate}
                  onChange={(newValue) => setFromDate(newValue)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body1">To</Typography>
                <DatePicker
                  label="MM/DD/YYYY"
                  value={toDate}
                  onChange={(newValue) => setToDate(newValue)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <MDButton
                  color="primary"
                  variant="contained"
                  size="medium"
                  onClick={handleSearchVitals}
                >
                  Search
                </MDButton>
                <MDButton
                  sx={{
                    ml: 2,
                    backgroundColor: "#e0e0e0",
                    color: "black",
                    "&:hover": { backgroundColor: "#bdbdbd" },
                  }}
                  variant="contained"
                  size="medium"
                  onClick={clearDateFields}
                >
                  Clear
                </MDButton>
              </Grid>
            </Grid>
          </LocalizationProvider>

          {/* Display fetched previous vitals */}
          <Box sx={{ mt: 4 }}>
            {previousVitals.length > 0 ? (
              <DataTable
                entriesPerPage={{
                  defaultValue: 10,
                  entries: [5, 10, 15, 20, 25],
                }}
                canSearch
                showTotalEntries
                table={table}
                pagination={{ variant: "gradient", color: "info" }}
                isSorted
              />
            ) : (
              <Typography>No previous vitals found.</Typography>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default VitalsData;
