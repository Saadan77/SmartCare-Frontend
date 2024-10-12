import React, { useState } from "react";
import {
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextareaAutosize,
  Typography,
  Box,
} from "@mui/material";
import MDButton from "../components/MDButton";
import DataTable from "../examples/Tables/DataTable";

const WardBedShifting = () => {
  const [shiftFrom, setShiftFrom] = useState({ ward: "", room: "", bed: "" });
  const [shiftTo, setShiftTo] = useState({
    ward: "",
    room: "",
    bed: "",
    specialty: "",
  });
  const [shiftingType, setShiftingType] = useState("");
  const [remarks, setRemarks] = useState("");
  const [orderedBy, setOrderedBy] = useState("");
  const [shiftingHistory, setShiftingHistory] = useState([]);

  const handleInputChange = (setter) => (e) =>
    setter((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (
      !shiftFrom.ward ||
      !shiftTo.ward ||
      !shiftTo.bed ||
      !orderedBy ||
      !shiftTo.specialty
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const newShift = {
      fromWard: shiftFrom.ward,
      fromBed: shiftFrom.bed,
      toWard: shiftTo.ward,
      toBed: shiftTo.bed,
      orderedBy,
      shiftedBy: "Nurse A", // Replace with actual user info if needed
      remarks,
    };

    setShiftingHistory([...shiftingHistory, newShift]);

    // Reset form fields
    setShiftFrom({ ward: "", room: "", bed: "" });
    setShiftTo({ ward: "", room: "", bed: "", specialty: "" });
    setRemarks("");
    setOrderedBy("");
    setShiftingType("");
  };

  // Columns for the DataTable
  const columns = [
    { Header: "From Ward", accessor: "fromWard" },
    { Header: "From Bed", accessor: "fromBed" },
    { Header: "To Ward", accessor: "toWard" },
    { Header: "To Bed", accessor: "toBed" },
    { Header: "Ordered By", accessor: "orderedBy" },
    { Header: "Shifted By", accessor: "shiftedBy" },
    { Header: "Remarks", accessor: "remarks" },
  ];

  // Data for the DataTable
  const data = shiftingHistory.map((shift) => ({
    fromWard: shift.fromWard,
    fromBed: shift.fromBed,
    toWard: shift.toWard,
    toBed: shift.toBed,
    orderedBy: shift.orderedBy,
    shiftedBy: shift.shiftedBy,
    remarks: shift.remarks,
  }));

  return (
    <Box>
      <Typography variant="h6">Patient Ward/Bed Shifting</Typography>

      <Grid container spacing={3}>
        {/* Shifting Type */}
        <Grid item xs={12}>
          <FormControl>
            <FormLabel>Shifting Type</FormLabel>
            <RadioGroup
              row
              value={shiftingType}
              onChange={(e) => setShiftingType(e.target.value)}
            >
              <FormControlLabel
                value="ward"
                control={<Radio />}
                label="Ward Shifting"
              />
              <FormControlLabel
                value="bed"
                control={<Radio />}
                label="Bed Shifting"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} container spacing={3}>
          {/* Shift From */}
          <Grid item xs={6}>
            <Typography variant="h6">Shift From</Typography>
            <Typography variant="body1">
              Ward<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              name="ward"
              value={shiftFrom.ward}
              onChange={handleInputChange(setShiftFrom)}
              fullWidth
            />
            <Typography variant="body1">Room</Typography>
            <TextField
              name="room"
              value={shiftFrom.room}
              onChange={handleInputChange(setShiftFrom)}
              fullWidth
              className="mt-2"
            />
            <Typography variant="body1">Bed</Typography>
            <TextField
              name="bed"
              value={shiftFrom.bed}
              onChange={handleInputChange(setShiftFrom)}
              fullWidth
              className="mt-2"
            />
          </Grid>

          {/* Shift To */}
          <Grid item xs={6}>
            <Typography variant="h6">Shift To</Typography>
            <Typography variant="body1">
              Ward<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              name="ward"
              value={shiftTo.ward}
              onChange={handleInputChange(setShiftTo)}
              fullWidth
            />
            <Typography variant="body1">Room</Typography>
            <TextField
              name="room"
              value={shiftTo.room}
              onChange={handleInputChange(setShiftTo)}
              fullWidth
              className="mt-2"
            />
            <Typography variant="body1">
              Bed<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              label=""
              name="bed"
              value={shiftTo.bed}
              onChange={handleInputChange(setShiftTo)}
              fullWidth
              className="mt-2"
            />
            <Typography variant="body1">
              Specialty<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              label=""
              name="specialty"
              value={shiftTo.specialty}
              onChange={handleInputChange(setShiftTo)}
              fullWidth
              className="mt-2"
            />
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1">
            Ordered By<span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            label=""
            value={orderedBy}
            onChange={(e) => setOrderedBy(e.target.value)}
            fullWidth
          />
          <FormControl fullWidth className="mt-4">
            <Typography variant="body1">Remarks</Typography>
            <TextareaAutosize
              minRows={5}
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              style={{ width: "100%" }}
            />
          </FormControl>
        </Grid>

        {/* Save Button */}
        <Grid item xs={12} className="d-flex justify-content-center mt-3">
          <MDButton
            sx={{
              marginRight: 1,
              backgroundColor: "#1976d2",
              "&:hover": { backgroundColor: "#115293" },
            }}
            variant="contained"
            color="primary"
            size="medium"
            onClick={handleSubmit}
          >
            Save
          </MDButton>
        </Grid>
      </Grid>

      {/* Shifting History DataTable */}
      <Grid container spacing={3} className="mt-4">
        <Grid item xs={12}>
          <Typography variant="h6">Shifting History</Typography>
          <DataTable
            table={{ columns, rows: data }}
            entriesPerPage={{ defaultValue: 5, entries: [5, 10, 15] }}
            canSearch
            showTotalEntries
            isSorted
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WardBedShifting;
