import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import DataTable from "../examples/Tables/DataTable";
import MDButton from "../components/MDButton";

export default function PostOpOrderTable() {
  // Placeholder for post-op orders data (you can fetch this data dynamically)
  const [rows, setRows] = useState([
    {
      dateTime: "2024-10-11 10:00",
      consultant: "Dr. Smith",
      postOpOrder: "Monitor vitals every hour",
      completedBy: "Nurse Jane",
    },
    {
      dateTime: "2024-10-11 11:00",
      consultant: "Dr. Doe",
      postOpOrder: "Administer pain relief",
      completedBy: "Nurse John",
    },
    // Add more sample data as needed
  ]);

  const columns = [
    {
      Header: "Date/Time",
      accessor: "dateTime",
    },
    {
      Header: "Consultant",
      accessor: "consultant",
    },
    {
      Header: "Post-Op Order",
      accessor: "postOpOrder",
    },
    {
      Header: "Completed By",
      accessor: "completedBy",
    },
  ];

  return (
    <Box>
      <Typography variant="h6">Post-Op Orders</Typography>
      <Paper>
        <DataTable
          entriesPerPage={{ defaultValue: 10 }}
          canSearch
          showTotalEntries
          table={{ columns, rows }}
          pagination={{ variant: "gradient", color: "info" }}
          isSorted
        />
      </Paper>
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
