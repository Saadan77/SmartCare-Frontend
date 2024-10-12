import React, { useState, useMemo } from "react";
import { Checkbox, Box, Typography } from "@mui/material";
import DataTable from "../examples/Tables/DataTable"; 

const PhysicianOrderTable = () => {
  // Initial physician orders
  const initialOrders = [
    {
      dateTime: "11-Apr-2018, 12:40 PM",
      doctor: "DR. INTERACTIVE GROUP",
      order:
        "Check Blood Pressure in Morning and at Night.\nTake Vitals Temperature",
      compliedBy: "",
      complied: false,
    },
    {
      dateTime: "15-Mar-2018, 05:40 PM",
      doctor: "DR. Moazzama",
      order: "Keep 2 whole blood arranged",
      compliedBy: "",
      complied: false,
    },
    {
      dateTime: "15-Mar-2018, 12:39 PM",
      doctor: "DR. Nureen Bodar",
      order: "Vitals\nFRC/FHS\nContinue same treatment",
      compliedBy: "",
      complied: false,
    },
  ];

  const [physicianOrders, setPhysicianOrders] = useState(initialOrders);

  // Function to update compliance status
  const handleComplianceChange = (index) => {
    const updatedOrders = physicianOrders.map((order, i) => {
      if (i === index) {
        return {
          ...order,
          complied: true, // mark as complied
          compliedBy: "ROUTH EDESON", // assuming it's complied by the logged-in user
        };
      }
      return order;
    });
    setPhysicianOrders(updatedOrders);
  };

  // Columns definition for DataTable
  const columns = useMemo(
    () => [
      { Header: "Date/Time", accessor: "dateTime" },
      { Header: "Doctor", accessor: "doctor" },
      {
        Header: "Physician Order",
        accessor: "order",
        Cell: ({ value }) => <Box sx={{ whiteSpace: "pre-wrap" }}>{value}</Box>,
      },
      {
        Header: "Complied By",
        accessor: "compliedBy",
        Cell: ({ value }) => (value ? value : "Pending"),
      },
      {
        Header: "Compliance Status",
        accessor: "complied",
        Cell: ({ row }) => (
          <Checkbox
            checked={row.original.complied}
            disabled={row.original.complied} // Disable checkbox if complied
            onChange={() => handleComplianceChange(row.index)}
          />
        ),
      },
    ],
    []
  );

  // Data for DataTable
  const data = useMemo(() => physicianOrders, [physicianOrders]);

  return (
    <Box>
      <Typography variant="h6">Physician Orders</Typography>
      <DataTable
        entriesPerPage={{ defaultValue: 5, entries: [5, 10, 15, 20] }}
        canSearch={true}
        showTotalEntries={true}
        table={{ columns, rows: data }}
        pagination={{ variant: "contained", color: "primary" }}
        isSorted={true}
        noEndBorder={false}
      />
    </Box>
  );
};

export default PhysicianOrderTable;
