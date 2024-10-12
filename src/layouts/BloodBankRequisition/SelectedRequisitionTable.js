import React, { useMemo } from "react";
import { Box, Typography, Paper } from "@mui/material";
import DataTable from "../../examples/Tables/DataTable"; 
import MDButton from "../../components/MDButton";

const SelectedRequisitionTable = () => {
  // Sample data; you can replace this with dynamic data as needed.
  const requisitions = [
    // Sample requisition data
    {
      productName: "Product 1",
      unitRequired: 5,
      bloodQuantity: "A+",
      requiredDateTime: "2024-10-15 10:00 AM",
      requiredDonor: "Donor 1",
    },
    {
      productName: "Product 2",
      unitRequired: 10,
      bloodQuantity: "B+",
      requiredDateTime: "2024-10-20 12:00 PM",
      requiredDonor: "Donor 2",
    },
    // Add more requisition data as needed
  ];

  // Define columns for the DataTable
  const columns = useMemo(
    () => [
      {
        Header: "Product Name",
        accessor: "productName", // accessor is the "key" in the data
      },
      {
        Header: "Unit Required",
        accessor: "unitRequired",
      },
      {
        Header: "Blood Quantity",
        accessor: "bloodQuantity",
      },
      {
        Header: "Required Date / Time",
        accessor: "requiredDateTime",
      },
      {
        Header: "Required Donor",
        accessor: "requiredDonor",
      },
      {
        Header: "Edit",
        accessor: "edit", // You can customize this if you have a specific edit handler
        Cell: () => (
          <MDButton variant="contained" color="primary">Edit</MDButton> // Replace this with your actual edit logic or component
        ),
      },
      {
        Header: "Delete",
        accessor: "delete", // You can customize this if you have a specific delete handler
        Cell: () => (
          <MDButton variant="outlined" color="error">Delete</MDButton> // Replace with your actual delete logic or component
        ),
      },
    ],
    []
  );

  return (
    <Box mb={4}>
      <Typography variant="h6">Selected Requisition(s)</Typography>
      <Paper style={{ marginTop: "16px" }}>
        <DataTable
          entriesPerPage={{ defaultValue: 5, entries: [5, 10, 15, 20, 25] }}
          canSearch
          showTotalEntries
          table={{
            columns,
            rows: requisitions,
          }}
          pagination={{ variant: "gradient", color: "info" }}
          isSorted
        />
      </Paper>
    </Box>
  );
};

export default SelectedRequisitionTable;
