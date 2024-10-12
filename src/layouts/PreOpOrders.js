import React, { useMemo } from "react";
import { Box, Typography, Paper, Checkbox } from "@mui/material";
import DataTable from "../examples/Tables/DataTable";
import MDButton from "../components/MDButton";

const preOpOrders = [
  {
    date: "11-Apr-2018, 12:11 PM",
    consultant: "DR. INTERACTIVE GROUP",
    order: "npo",
    completed: true,
    completedBy: "17-Mar-2018, 18:10 By null",
  },
  {
    date: "17-Mar-2018, 03:49 PM",
    consultant: "DR. KISHORE KUMAR PANJWANI",
    order: "Arrange whole blood as per requirement",
    completed: true,
    completedBy: "17-Mar-2018, 18:10 By null",
  },
  {
    date: "17-Mar-2018, 01:49 PM",
    consultant: "DR. KISHORE KUMAR PANJWANI",
    order: "Prepare the patient for surgery",
    completed: false,
    completedBy: "17-Mar-2018, 18:10 By null",
  },
  {
    date: "17-Mar-2018, 03:45 PM",
    consultant: "DR. KISHORE KUMAR PANJWANI",
    order: "Keep NPO at least six hours before surgery",
    completed: false,
    completedBy: "17-Mar-2018, 18:10 By null",
  },
  {
    date: "17-Mar-2018, 05:15 PM",
    consultant: "DR. Moazzama",
    order: "NPO 12 Mid Night",
    completed: false,
    completedBy: "17-Mar-2018, 18:10 By null",
  },
];

const PreOpOrders = () => {
  // Define columns for the DataTable
  const columns = useMemo(
    () => [
      {
        Header: "Date/Time",
        accessor: "date", 
      },
      {
        Header: "Consultant",
        accessor: "consultant",
      },
      {
        Header: "Pre-Op Order",
        accessor: "order",
      },
      {
        Header: "Completed By",
        accessor: "completedBy",
      },
      {
        Header: "Completed",
        accessor: "completed",
        Cell: ({ value }) => <Checkbox checked={value} />,
      },
    ],
    []
  );

  // Prepare the table data
  const tableData = useMemo(() => preOpOrders, []);

  return (
    <Box>
      <Typography variant="h6">Pre-Op Orders</Typography>
      <Paper>
        <DataTable
          table={{ columns, rows: tableData }}
          entriesPerPage={{ defaultValue: 5, entries: [5, 10, 15, 20, 25] }}
          canSearch={true}
          showTotalEntries={true}
          pagination={{ variant: "gradient", color: "info" }}
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
};

export default PreOpOrders;
