import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import DataTable from "../../examples/Tables/DataTable"; 

const VitalsTable = () => {
  const dummyVitals = [
    {
      pulse: 72,
      bpSystolic: 120,
      bpDiastolic: 80,
      temperature: 98.6,
      respirationRate: 16,
      height: 170,
      weight: 70,
      spo2: 98,
      bmi: 24.2,
      bsf: 90,
    },
    {
      pulse: 85,
      bpSystolic: 130,
      bpDiastolic: 85,
      temperature: 99.1,
      respirationRate: 18,
      height: 160,
      weight: 60,
      spo2: 97,
      bmi: 23.4,
      bsf: 110,
    },
    {
      pulse: 60,
      bpSystolic: 115,
      bpDiastolic: 75,
      temperature: 98.4,
      respirationRate: 14,
      height: 175,
      weight: 75,
      spo2: 99,
      bmi: 24.5,
      bsf: 95,
    },
  ];

  // Define columns for DataTable
  const columns = useMemo(
    () => [
      {
        Header: "Date/Time",
        accessor: "dateTime",
        Cell: () => new Date().toLocaleString(),
      },
      {
        Header: "Pulse (bpm)",
        accessor: "pulse",
      },
      {
        Header: "BP (Sys/Dia)",
        accessor: "bp",
        Cell: ({ row }) =>
          `${row.original.bpSystolic}/${row.original.bpDiastolic}`,
      },
      {
        Header: "Temperature (°F)",
        accessor: "temperature",
      },
      {
        Header: "Respiration Rate (min)",
        accessor: "respirationRate",
      },
      {
        Header: "Height (cm)",
        accessor: "height",
      },
      {
        Header: "Weight (kg)",
        accessor: "weight",
      },
      {
        Header: "SPO2 (%)",
        accessor: "spo2",
      },
      {
        Header: "BMI (kg/m²)",
        accessor: "bmi",
      },
      {
        Header: "BSF (mg/dL)",
        accessor: "bsf",
      },
      {
        Header: "Vitals Taken By",
        accessor: "takenBy",
        Cell: () => "DR. INTERACTIVE",
      },
    ],
    []
  );

  // Prepare data to include takenBy
  const data = useMemo(
    () =>
      dummyVitals.map((vital) => ({
        ...vital,
        takenBy: "DR. INTERACTIVE", // static value for now
      })),
    []
  );

  return (
    <Box>
      <Typography variant="h6" className="mt-4">
        Vitals
      </Typography>
      <DataTable
        table={{ columns, rows: data }}
        entriesPerPage={{ defaultValue: 10 }}
        canSearch={true}
        showTotalEntries={true}
        pagination={{ variant: "gradient", color: "info" }}
        isSorted={true}
      />
    </Box>
  );
};

export default VitalsTable;
