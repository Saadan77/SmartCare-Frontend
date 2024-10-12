import React, { useState, useMemo } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DataTable from "../examples/Tables/DataTable";
import MDButton from "../components/MDButton";

const IntakeOutputChart = () => {
  const [intakeRecords, setIntakeRecords] = useState([
    {
      source: "NG Feed",
      fluid: "Ciproxin",
      qty: "100",
      date: "12-Apr-2018, 01:14 PM",
    },
  ]);
  const [outputRecords, setOutputRecords] = useState([
    { type: "Urine", qty: "20", date: "12-Apr-2018, 01:14 PM" },
  ]);

  const [intake, setIntake] = useState({
    source: "CVP",
    fluid: "Ciproxin",
    qty: "100",
  });
  const [output, setOutput] = useState({ type: "Colostomy Tube", qty: "25" });

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [searchResults, setSearchResults] = useState({
    intake: [],
    output: [],
  });

  const [grandTotalIntake, setGrandTotalIntake] = useState({
    oral: 0,
    intravenous: 0,
    NGFeed: 0,
  });
  const [grandTotalOutput, setGrandTotalOutput] = useState({
    aspirates: 0,
    drain: 0,
    urine: 0,
    vomit: 0,
    stool: 0,
  });

  const handleAddIntake = () => {
    setIntakeRecords([
      ...intakeRecords,
      { ...intake, date: new Date().toLocaleString() },
    ]);
    setIntake({ source: "", fluid: "", qty: "" });
  };

  const handleAddOutput = () => {
    setOutputRecords([
      ...outputRecords,
      { ...output, date: new Date().toLocaleString() },
    ]);
    setOutput({ type: "", qty: "" });
  };

  const handleDeleteIntake = (index) => {
    const updatedRecords = intakeRecords.filter((_, i) => i !== index);
    setIntakeRecords(updatedRecords);
  };

  const handleDeleteOutput = (index) => {
    const updatedRecords = outputRecords.filter((_, i) => i !== index);
    setOutputRecords(updatedRecords);
  };

  const handleSave = () => {
    console.log("Intake Records:", intakeRecords);
    console.log("Output Records:", outputRecords);
    alert("Data saved successfully!");
  };

  const handleSearch = () => {
    const filteredIntake = intakeRecords.filter((record) => {
      const recordDate = new Date(record.date);
      return fromDate && toDate
        ? recordDate >= new Date(fromDate) && recordDate <= new Date(toDate)
        : true;
    });

    const filteredOutput = outputRecords.filter((record) => {
      const recordDate = new Date(record.date);
      return fromDate && toDate
        ? recordDate >= new Date(fromDate) && recordDate <= new Date(toDate)
        : true;
    });

    setSearchResults({ intake: filteredIntake, output: filteredOutput });

    const intakeTotals = filteredIntake.reduce(
      (totals, record) => {
        if (record.fluid === "Oral") totals.oral += parseFloat(record.qty);
        if (record.fluid === "Intravenous")
          totals.intravenous += parseFloat(record.qty);
        if (record.fluid === "NG Feed") totals.NGFeed += parseFloat(record.qty);
        return totals;
      },
      { oral: 0, intravenous: 0, NGFeed: 0 }
    );

    const outputTotals = filteredOutput.reduce(
      (totals, record) => {
        if (record.type === "Aspirates")
          totals.aspirates += parseFloat(record.qty);
        if (record.type === "Drain") totals.drain += parseFloat(record.qty);
        if (record.type === "Urine") totals.urine += parseFloat(record.qty);
        return totals;
      },
      { aspirates: 0, drain: 0, urine: 0 }
    );

    setGrandTotalIntake(intakeTotals);
    setGrandTotalOutput(outputTotals);
  };

  const handleReset = () => {
    setFromDate(null);
    setToDate(null);
    setSearchResults({ intake: [], output: [] });
    setGrandTotalIntake({ oral: 0, intravenous: 0, NGFeed: 0 });
    setGrandTotalOutput({ aspirates: 0, drain: 0, urine: 0 });
  };

  // Define columns for Intake, Output, Grand Total Intake, and Grand Total Output
  const intakeColumns = useMemo(
    () => [
      { Header: "Date/Time", accessor: "date" },
      { Header: "Source", accessor: "source" },
      { Header: "Fluid", accessor: "fluid" },
      { Header: "Qty (ml)", accessor: "qty" },
      {
        Header: "Delete",
        accessor: "delete",
        Cell: ({ row }) => (
          <MDButton
            variant="outlined"
            color="error"
            onClick={() => handleDeleteIntake(row.index)}
          >
            Delete
          </MDButton>
        ),
      },
    ],
    []
  );

  const outputColumns = useMemo(
    () => [
      { Header: "Date/Time", accessor: "date" },
      { Header: "Type", accessor: "type" },
      { Header: "Qty (ml)", accessor: "qty" },
      {
        Header: "Delete",
        accessor: "delete",
        Cell: ({ row }) => (
          <MDButton
            variant="outlined"
            color="error"
            onClick={() => handleDeleteOutput(row.index)}
          >
            Delete
          </MDButton>
        ),
      },
    ],
    []
  );

  const grandTotalIntakeColumns = useMemo(
    () => [
      { Header: "Oral (ml)", accessor: "oral" },
      { Header: "Intravenous (ml)", accessor: "intravenous" },
      { Header: "NG Feed (ml)", accessor: "NGFeed" },
      { Header: "Total Intake (ml)", accessor: "total" },
    ],
    []
  );

  const grandTotalOutputColumns = useMemo(
    () => [
      { Header: "Aspirates (ml)", accessor: "aspirates" },
      { Header: "Drain (ml)", accessor: "drain" },
      { Header: "Urine (ml)", accessor: "urine" },
      { Header: "Vomit (ml)", accessor: "vomit" },
      { Header: "Stool (ml)", accessor: "stool" },
      { Header: "Total Output (ml)", accessor: "total" },
    ],
    []
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <Typography variant="h6">Patient Intake / Output Chart</Typography>
        <Grid container spacing={3}>
          {/* Intake Section */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Add Intake
            </Typography>
            <Typography variant="body1">
              Source<span style={{ color: "red" }}>*</span>
            </Typography>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Select
                value={intake.source}
                onChange={(e) =>
                  setIntake({ ...intake, source: e.target.value })
                }
              >
                <MenuItem value={"CVP"}>CVP</MenuItem>
                <MenuItem value={"NG Feed"}>NG Feed</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="body1">
              Fluid<span style={{ color: "red" }}>*</span>
            </Typography>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Select
                value={intake.fluid}
                onChange={(e) =>
                  setIntake({ ...intake, fluid: e.target.value })
                }
              >
                <MenuItem value={"Ciproxin"}>Ciproxin</MenuItem>
                <MenuItem value={"Dextrose"}>Dextrose</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="body1">
              Qty (ml) <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              value={intake.qty}
              onChange={(e) => setIntake({ ...intake, qty: e.target.value })}
              sx={{ mb: 2 }}
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
              onClick={handleAddIntake}
            >
              Add
            </MDButton>
          </Grid>

          {/* Output Section */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Add Output
            </Typography>
            <Typography variant="body1">
              Type <span style={{ color: "red" }}>*</span>
            </Typography>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Select
                value={output.type}
                onChange={(e) => setOutput({ ...output, type: e.target.value })}
              >
                <MenuItem value={"Urine"}>Urine</MenuItem>
                <MenuItem value={"Colostomy Tube"}>Colostomy Tube</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="body1">
              Qty (ml) <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              value={output.qty}
              onChange={(e) => setOutput({ ...output, qty: e.target.value })}
              sx={{ mb: 2 }}
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
              onClick={handleAddOutput}
            >
              Add
            </MDButton>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              {/* Intake Records Table */}
              <Grid item xs={6}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Intake Records
                </Typography>
                <DataTable
                  table={{
                    columns: intakeColumns,
                    rows: intakeRecords,
                  }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                />
              </Grid>

              {/* Output Records Table */}
              <Grid item xs={6}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Output Records
                </Typography>
                <DataTable
                  table={{
                    columns: outputColumns,
                    rows: outputRecords,
                  }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                />
              </Grid>
            </Grid>
            {/* Save Button at the end */}
            <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
              <MDButton
                sx={{
                  marginRight: 1,
                  backgroundColor: "#1976d2",
                  "&:hover": { backgroundColor: "#115293" },
                }}
                variant="contained"
                color="primary"
                size="medium"
                onClick={handleSave}
              >
                Save
              </MDButton>
            </Box>
          </Grid>

          {/* Search Section */}
          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Search Records
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <DatePicker
                    label="MM/DD/YYYY"
                    value={fromDate}
                    onChange={(newValue) => setFromDate(newValue)}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                    sx={{ mb: 2 }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <DatePicker
                    label="MM/DD/YYYY"
                    value={toDate}
                    onChange={(newValue) => setToDate(newValue)}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={2}>
                  <MDButton
                    sx={{
                      marginRight: 1,
                      backgroundColor: "#1976d2",
                      "&:hover": { backgroundColor: "#115293" },
                    }}
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={handleSearch}
                  >
                    Search
                  </MDButton>
                </Grid>
                <Grid item xs={2}>
                  <MDButton
                    sx={{
                      marginRight: 1,
                      backgroundColor: "#e0e0e0",
                      color: "black",
                      "&:hover": { backgroundColor: "#bdbdbd" },
                    }}
                    variant="contained"
                    size="medium"
                    onClick={handleReset}
                  >
                    Reset
                  </MDButton>
                </Grid>
                <Grid item xs={4}>
                  <MDButton variant="contained" color="info">
                    Show Chart
                  </MDButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            {/* Grand Total Intake */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Grand Total Intake
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={6}>
                  <Typography>
                    <strong>Oral: </strong> {grandTotalIntake.oral} ml
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    <strong>Intravenous: </strong>{" "}
                    {grandTotalIntake.intravenous} ml
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    <strong>NG Feed: </strong> {grandTotalIntake.NGFeed} ml
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    <strong>Total Intake: </strong>{" "}
                    {grandTotalIntake.oral +
                      grandTotalIntake.intravenous +
                      grandTotalIntake.NGFeed}{" "}
                    ml
                  </Typography>
                </Grid>
              </Grid>
              <DataTable
                table={{
                  columns: grandTotalIntakeColumns,
                  rows: [grandTotalIntake],
                }}
                isSorted={false}
                entriesPerPage={false}
                showTotalEntries={false}
              />
            </Grid>

            {/* Grand Total Output */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Grand Total Output
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={4}>
                  <Typography>
                    <strong>Aspirates: </strong> {grandTotalOutput.aspirates} ml
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    <strong>Drain: </strong> {grandTotalOutput.drain} ml
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    <strong>Vomit: </strong> {grandTotalOutput.vomit} ml
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    <strong>Stool: </strong> {grandTotalOutput.stool} ml
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    <strong>Urine: </strong> {grandTotalOutput.urine} ml
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    <strong>Total Output: </strong>
                    {grandTotalOutput.aspirates +
                      grandTotalOutput.drain +
                      grandTotalOutput.urine}{" "}
                    ml
                  </Typography>
                </Grid>
              </Grid>
              <DataTable
                table={{
                  columns: grandTotalOutputColumns,
                  rows: [grandTotalOutput],
                }}
                isSorted={false}
                entriesPerPage={false}
                showTotalEntries={false}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </LocalizationProvider>
  );
};

export default IntakeOutputChart;
