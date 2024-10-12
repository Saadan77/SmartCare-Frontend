import React, { useState } from "react";
import { MenuItem, Select, Box, Typography } from "@mui/material";
import DataTable from "../examples/Tables/DataTable";
import MDButton from "../components/MDButton";

function GlasgowComaScale() {
  const [eyeResponse, setEyeResponse] = useState(2);
  const [verbalResponse, setVerbalResponse] = useState(4);
  const [motorResponse, setMotorResponse] = useState(6);
  const [score, setScore] = useState(null);
  const [records, setRecords] = useState([]);

  const eyeOptions = [
    { label: "No eye opening", value: 1 },
    { label: "Opens to pain, not applied", value: 2 },
    { label: "Opens to verbal command", value: 3 },
    { label: "Opens spontaneously", value: 4 },
  ];

  const verbalOptions = [
    { label: "No verbal response", value: 1 },
    { label: "Incomprehensible sounds", value: 2 },
    { label: "Inappropriate words", value: 3 },
    { label: "Confused conversation", value: 4 },
    { label: "Oriented", value: 5 },
  ];

  const motorOptions = [
    { label: "No motor response", value: 1 },
    { label: "Abnormal extension to pain", value: 2 },
    { label: "Abnormal flexion to pain", value: 3 },
    { label: "Withdraws from pain", value: 4 },
    { label: "Purposeful movement to painful stimulus", value: 5 },
    { label: "Obeys commands for movement", value: 6 },
  ];

  const calculateScore = () => {
    const totalScore = eyeResponse + verbalResponse + motorResponse;
    const currentDateTime = new Date().toLocaleString();

    const newRecord = {
      dateTime: currentDateTime,
      score: totalScore,
    };

    setRecords([...records, newRecord]);
    setScore(totalScore);
  };

  // Define columns for DataTable
  const columns = [
    {
      Header: "Date / Time",
      accessor: "dateTime",
    },
    {
      Header: "Score",
      accessor: "score",
    },
  ];

  const tableData = {
    columns,
    rows: records,
  };

  return (
    <Box>
      <Box
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
          justifyContent: "space-between",
        }}
      >
        {/* Eye Response */}
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <label style={{ marginRight: "10px" }}>Eye Opening Response</label>
          <Select
            value={eyeResponse}
            onChange={(e) => setEyeResponse(e.target.value)}
          >
            {eyeOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* Verbal Response */}
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <label style={{ marginRight: "10px" }}>Verbal Response</label>
          <Select
            value={verbalResponse}
            onChange={(e) => setVerbalResponse(e.target.value)}
          >
            {verbalOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* Motor Response */}
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <label style={{ marginRight: "10px" }}>Motor Response</label>
          <Select
            value={motorResponse}
            onChange={(e) => setMotorResponse(e.target.value)}
          >
            {motorOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" marginTop="20px">
        <MDButton
          sx={{
            marginRight: 1,
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#115293" },
          }}
          variant="contained"
          color="primary"
          size="medium"
          onClick={calculateScore}
        >
          Save
        </MDButton>
      </Box>

      {score !== null && (
        <Box style={{ marginTop: "20px" }}>
          <Typography variant="h6">GCS Score: {score}</Typography>
        </Box>
      )}

      {/* Display the history of saved records using DataTable */}
      <DataTable
        entriesPerPage={{ defaultValue: 5 }}
        canSearch
        showTotalEntries
        table={tableData}
        pagination={{ variant: "gradient", color: "info" }}
      />
    </Box>
  );
}

export default GlasgowComaScale;
