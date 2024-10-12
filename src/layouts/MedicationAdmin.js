import React, { useState, useEffect, useMemo } from "react";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Box,
  Checkbox,
  Typography,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import DataTable from "../examples/Tables/DataTable";
import MDButton from "../components/MDButton";

const MedicationAdmin = () => {
  const [date, setDate] = useState("2016-04-11T13:04");
  const [selectedConsumption, setSelectedConsumption] = useState("Patient");
  const [selectedTrolley, setSelectedTrolley] = useState("");
  const [medication, setMedication] = useState({
    name: "Calpol 100 ml Syrup",
    specialInstruction: "Night",
    frequency: "24 Hourly",
    dosage: "",
    reorder: false,
    administeredDosage: "",
    stock: 10,
  });

  const [data, setData] = useState([medication]);

  // Update dosage based on selected consumption
  useEffect(() => {
    if (selectedConsumption === "Ward") {
      setMedication((prevMedication) => ({
        ...prevMedication,
        dosage: 1.0,
      }));
    } else {
      setMedication((prevMedication) => ({
        ...prevMedication,
        dosage: "",
      }));
    }
  }, [selectedConsumption]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedication({
      ...medication,
      [name]: value,
    });
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSave = () => {
    const dosageToAdminister = parseInt(medication.administeredDosage, 10);

    if (!dosageToAdminister || dosageToAdminister <= 0) {
      alert("Please enter a valid dosage.");
      return;
    }

    setData([...data, { ...medication }]);
    console.log("Data saved", { ...medication });
    alert("Medication administered successfully.");
  };

  // Columns for DataTable
  const columns = useMemo(
    () => [
      { Header: "Medicine Name", accessor: "name" },
      { Header: "Special Instruction", accessor: "specialInstruction" },
      { Header: "Frequency", accessor: "frequency" },
      {
        Header: "Dosage",
        accessor: "dosage",
        Cell: ({ row }) => (
          <TextField
            type="number"
            name="dosage"
            value={row.original.dosage}
            onChange={(e) => handleInputChange(e)}
          />
        ),
      },
      {
        Header: "Reorder",
        accessor: "reorder",
        Cell: ({ row }) => (
          <Checkbox
            name="reorder"
            checked={row.original.reorder}
            onChange={(e) => handleInputChange(e)}
          />
        ),
      },
      {
        Header: "Administered Dosage",
        accessor: "administeredDosage",
        Cell: ({ row }) => (
          <TextField
            type="number"
            name="administeredDosage"
            value={row.original.administeredDosage}
            onChange={(e) => handleInputChange(e)}
          />
        ),
      },
    ],
    [data]
  );

  return (
    <Box>
      <Typography variant="h6">Medication Administration</Typography>

      {/* Radio button group for selecting consumption type */}
      <FormControl component="fieldset">
        <RadioGroup
          row
          name="consumption"
          value={selectedConsumption}
          onChange={(e) => setSelectedConsumption(e.target.value)}
        >
          <FormControlLabel
            value="Patient"
            control={<Radio />}
            label="Patient Consumption"
          />
          <FormControlLabel
            value="Ward"
            control={<Radio />}
            label="Ward Consumption"
          />
          <FormControlLabel
            value="Trolley"
            control={<Radio />}
            label="Trolley Consumption"
          />
        </RadioGroup>
      </FormControl>

      <br />

      {/* Date picker */}
      <Typography variant="body1">
        Date<span style={{ color: "red" }}>*</span>
      </Typography>
      <TextField
        label="MM/DD/YYYY"
        type="datetime-local"
        value={date}
        onChange={handleDateChange}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ width: "250px" }}
      />

      {/* Trolley Dropdown */}
      {selectedConsumption === "Trolley" && (
        <FormControl
          margin="normal"
          sx={{ width: "250px", marginLeft: "16px" }}
        >
          <InputLabel>Trolley</InputLabel>
          <Select
            value={selectedTrolley}
            onChange={(e) => setSelectedTrolley(e.target.value)}
          >
            <MenuItem value="">Select Trolley</MenuItem>
            <MenuItem value="Trolley 1">Trolley 1</MenuItem>
            <MenuItem value="Trolley 2">Trolley 2</MenuItem>
            <MenuItem value="Trolley 3">Trolley 3</MenuItem>
          </Select>
        </FormControl>
      )}

      {/* Medication Table using DataTable */}
      <DataTable
        entriesPerPage={{ defaultValue: 5, entries: [5, 10, 15, 20] }}
        canSearch={true}
        showTotalEntries={true}
        isSorted={true}
        noEndBorder={false}
        table={{ columns, rows: data }}
        pagination={{ variant: "contained", color: "primary" }}
      />

      {/* Save button */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
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
    </Box>
  );
};

export default MedicationAdmin;
