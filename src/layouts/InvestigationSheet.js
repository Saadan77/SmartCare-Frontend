import React, { useState, useMemo } from "react";
import { Checkbox, Button, TextField, Box, Typography } from "@mui/material";
import DataTable from "../examples/Tables/DataTable"; 

const InvestigationSheet = () => {
  const [investigations, setInvestigations] = useState([
    {
      dateTime: "11-Apr-2018, 12:04 PM",
      investigation: "Complete Blood Count",
      prescribedBy: "DR. INTERACTIVE GROUP",
      acknowledgment: {
        by: "PANZY GULNAZ",
        dateTime: "11-Apr-2018, 12:04 PM",
      },
      status: "Generated",
      remarks: "",
      viewReport: "View Report",
      viewImage: "View Image",
      isChecked: false,
    },
    {
      dateTime: "17-Mar-2018, 06:12 PM",
      investigation: "HbAg",
      prescribedBy: "DR. MAZARMA",
      acknowledgment: {
        by: "PANZY GULNAZ",
        dateTime: "17-Mar-2018, 06:11 PM",
      },
      status: "Report Delivered",
      remarks: "",
      viewReport: "View Report",
      viewImage: "View Image",
      isChecked: false,
    },
    {
      dateTime: "17-Mar-2018, 06:12 PM",
      investigation: "Anti-HCV",
      prescribedBy: "DR. MAZARMA",
      acknowledgment: {
        by: "PANZY GULNAZ",
        dateTime: "17-Mar-2018, 06:11 PM",
      },
      status: "Report Delivered",
      remarks: "",
      viewReport: "View Report",
      viewImage: "View Image",
      isChecked: false,
    },
  ]);

  // Define columns for the DataTable
  const columns = useMemo(
    () => [
      {
        Header: "Select",
        accessor: "isChecked",
        Cell: ({ row: { index }, value }) => (
          <Checkbox
            checked={value}
            onChange={() => handleCheckboxChange(index)}
          />
        ),
      },
      {
        Header: "Prescribed Date/Time",
        accessor: "dateTime",
      },
      {
        Header: "Investigation",
        accessor: "investigation",
      },
      {
        Header: "Prescribed By",
        accessor: "prescribedBy",
      },
      {
        Header: "Acknowledged By",
        accessor: "acknowledgment.by",
      },
      {
        Header: "Acknowledgment Date / Time",
        accessor: "acknowledgment.dateTime",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Remarks",
        accessor: "remarks",
        Cell: ({ row: { index }, value }) => (
          <TextField
            fullWidth
            variant="outlined"
            multiline
            minRows={3}
            value={value}
            onChange={(e) => handleRemarksChange(index, e.target.value)}
          />
        ),
      },
      {
        Header: "View Report",
        accessor: "viewReport",
        Cell: ({ value }) => (
          <Button variant="contained" color="primary">
            {value}
          </Button>
        ),
      },
      {
        Header: "View Image",
        accessor: "viewImage",
        Cell: ({ value }) => (
          <Button variant="contained" color="primary">
            {value}
          </Button>
        ),
      },
    ],
    []
  );

  const handleRemarksChange = (index, value) => {
    const updatedInvestigations = investigations.map((inv, i) => {
      if (i === index) {
        return { ...inv, remarks: value };
      }
      return inv;
    });
    setInvestigations(updatedInvestigations);
  };

  const handleCheckboxChange = (index) => {
    const updatedInvestigations = investigations.map((inv, i) => {
      if (i === index) {
        return { ...inv, isChecked: !inv.isChecked };
      }
      return inv;
    });
    setInvestigations(updatedInvestigations);
  };

  // Convert investigations to data suitable for DataTable
  const data = useMemo(() => investigations, [investigations]);

  return (
    <Box>
      <Typography variant="h6">Investigation Sheet</Typography>
      <DataTable
        table={{ columns, rows: data }}
        entriesPerPage={{ defaultValue: 5, entries: [5, 10, 15] }}
        canSearch={true}
        showTotalEntries={true}
        pagination={{ variant: "gradient", color: "info" }}
        isSorted={true}
      />
    </Box>
  );
};

export default InvestigationSheet;
