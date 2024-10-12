import React, { useState, useMemo } from "react";
import { Box, Typography, Paper } from "@mui/material";
import PatientRequisitionDetails from "./PatientRequisitionDetails";
import RequestedProductDetails from "./RequestedProductDetails";
import SelectedRequisitionTable from "./SelectedRequisitionTable";
import SpecimenDetails from "./SpecimenDetails";
import DataTable from "../../examples/Tables/DataTable"; 

const FormPage = () => {
  // Sample data for the DataTable
  const columns = useMemo(
    () => [
      { Header: "Transfusion Date", accessor: "transfusionDate" },
      { Header: "Observed Reaction", accessor: "observedReaction" },
      { Header: "Possible Cause", accessor: "possibleCause" },
      { Header: "Remarks", accessor: "remarks" },
    ],
    []
  );

  const data = useMemo(
    () => [
      // Replace with your actual data
      {
        transfusionDate: "2024-01-01",
        observedReaction: "None",
        possibleCause: "N/A",
        remarks: "All good",
      },
      {
        transfusionDate: "2024-01-02",
        observedReaction: "Mild fever",
        possibleCause: "Allergy",
        remarks: "Monitor closely",
      },
      // Add more data as needed
    ],
    []
  );

  return (
    <Box>
      <Box mb={4}>
        <Typography variant="h6">Transfusion History</Typography>
        {/* Replace existing table with DataTable */}
        <DataTable
          table={{ columns, rows: data }} // Pass the table prop
          entriesPerPage={{ defaultValue: 10, entries: [5, 10, 15, 20, 25] }}
          canSearch={true}
          showTotalEntries={true}
          pagination={{ variant: "gradient", color: "info" }}
          isSorted={true}
        />
      </Box>

      <PatientRequisitionDetails />
      <RequestedProductDetails />
      <SelectedRequisitionTable />
      <SpecimenDetails />
    </Box>
  );
};

export default FormPage;
