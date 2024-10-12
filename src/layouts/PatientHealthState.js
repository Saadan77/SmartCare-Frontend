import React, { useMemo } from "react";
import { Box, Typography, Button, Paper, TableContainer } from "@mui/material";
import DataTable from "../examples/Tables/DataTable";
import MDButton from "../components/MDButton";

export default function PatientHealthState() {
  // Sample data to represent patient health records
  const rows = useMemo(
    () => [
      {
        from: "2024-01-01",
        to: "2024-01-15",
        condition: "Flu",
        doctor: "Dr. Smith",
        remarks: "Rest and hydration.",
      },
      {
        from: "2024-02-01",
        to: "2024-02-10",
        condition: "Check-up",
        doctor: "Dr. Jones",
        remarks: "All clear.",
      },
      // Add more rows as necessary
    ],
    []
  );

  const columns = useMemo(
    () => [
      { Header: "From", accessor: "from" },
      { Header: "To", accessor: "to" },
      { Header: "Condition", accessor: "condition" },
      { Header: "Doctor", accessor: "doctor" },
      { Header: "Remarks", accessor: "remarks" },
    ],
    []
  );

  return (
    <Box>
      <Typography variant="h6">SIL/VGIS History</Typography>
      <TableContainer component={Paper}>
        <DataTable
          table={{
            columns,
            rows,
          }}
          entriesPerPage={{ defaultValue: 10, entries: [5, 10, 15, 20, 25] }}
          canSearch={true}
          showTotalEntries={true}
          pagination={{ variant: "gradient", color: "info" }}
          isSorted={true}
          noEndBorder={false}
        />
      </TableContainer>
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
        >
          Save
        </MDButton>
      </Box>
    </Box>
  );
}
