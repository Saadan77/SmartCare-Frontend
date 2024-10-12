import React, { useState, useMemo } from "react";
import { Box, Typography, Button, Checkbox } from "@mui/material";
import DataTable from "../examples/Tables/DataTable";
import MDButton from "../components/MDButton";

const Consultation = () => {
  // Initial Consultation Requests
  const [consultationRequests, setConsultationRequests] = useState([
    {
      dateTime: "17-Mar-2018, 11:00 AM",
      calledBy: "Dr. Hazzamra",
      unit: "Anesthesia",
      doctor: "Dr. Kishore Kumar",
      checked: false,
    },
    {
      dateTime: "10-Mar-2018, 09:00 AM",
      calledBy: "Dr. Naureen Bodar",
      unit: "DID Male",
      doctor: "Dr. Umar Muhammad",
      checked: false,
    },
  ]);

  const [consultationHistory, setConsultationHistory] = useState([]);

  // Function to handle confirmation of a doctor visit
  const handleConfirmVisit = (index) => {
    const updatedRequests = [...consultationRequests];
    const confirmedRequest = { ...updatedRequests[index], checked: true };

    // Remove the request from consultationRequests
    updatedRequests.splice(index, 1);

    // Move the confirmed request to consultationHistory
    setConsultationHistory([...consultationHistory, confirmedRequest]);
    setConsultationRequests(updatedRequests);
  };

  // Dummy save functionality for the Save button
  const handleSave = () => {
    console.log("Consultation requests saved successfully!");
  };

  // Columns definition for consultation requests
  const requestColumns = useMemo(
    () => [
      { Header: "Consultation Date / Time", accessor: "dateTime" },
      { Header: "Called By", accessor: "calledBy" },
      { Header: "Call to Organization Unit", accessor: "unit" },
      { Header: "Call to Doctor", accessor: "doctor" },
      {
        Header: "Confirm Visit",
        accessor: "checked",
        Cell: ({ row }) => (
          <Checkbox
            checked={row.original.checked}
            onChange={() => handleConfirmVisit(row.index)}
          />
        ),
      },
    ],
    []
  );

  // Columns definition for consultation history
  const historyColumns = useMemo(
    () => [
      { Header: "Consultation Date / Time", accessor: "dateTime" },
      { Header: "Called By", accessor: "calledBy" },
      { Header: "Call to Organization Unit", accessor: "unit" },
      { Header: "Call to Doctor", accessor: "doctor" },
      {
        Header: "Attended Date / Time",
        accessor: "attendedDateTime",
        Cell: () => new Date().toLocaleString(), // Set current date/time when moving to history
      },
    ],
    []
  );

  // Data for DataTable - consultation requests
  const requestData = useMemo(
    () => consultationRequests,
    [consultationRequests]
  );

  // Data for DataTable - consultation history
  const historyData = useMemo(() => consultationHistory, [consultationHistory]);

  return (
    <Box>
      <Typography variant="h6">Request for Consultation</Typography>

      <DataTable
        entriesPerPage={{ defaultValue: 5, entries: [5, 10, 15] }}
        canSearch={false}
        showTotalEntries={true}
        table={{ columns: requestColumns, rows: requestData }}
        pagination={{ variant: "contained", color: "primary" }}
        isSorted={true}
        noEndBorder={false}
      />

      <Box style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
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

      <Typography variant="h6">Doctor Call History</Typography>

      <DataTable
        entriesPerPage={{ defaultValue: 5, entries: [5, 10, 15] }}
        canSearch={false}
        showTotalEntries={true}
        table={{ columns: historyColumns, rows: historyData }}
        pagination={{ variant: "contained", color: "primary" }}
        isSorted={true}
        noEndBorder={false}
      />
    </Box>
  );
};

export default Consultation;
