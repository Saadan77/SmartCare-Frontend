import React, { useMemo } from "react";
import { Box, Checkbox, Typography } from "@mui/material";
import DataTable from "../examples/Tables/DataTable";
import MDButton from "../components/MDButton";

function DietHistoryTable() {
  const rows = useMemo(
    () => [
      {
        date: "15-Mar-2018",
        time: "Breakfast",
        type: "High protein - C",
        remarks: "",
        acknowledged: "",
        completed: true,
      },
      {
        date: "15-Mar-2018",
        time: "Dinner",
        type: "Ordinary - O",
        remarks: "",
        acknowledged: "",
        completed: true,
      },
      {
        date: "15-Mar-2018",
        time: "Lunch",
        type: "Ordinary - O",
        remarks: "",
        acknowledged: "",
        completed: true,
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Diet Date",
        accessor: "date",
      },
      {
        Header: "Diet Time",
        accessor: "time",
      },
      {
        Header: "Diet Type",
        accessor: "type",
      },
      {
        Header: "Remarks",
        accessor: "remarks",
      },
      {
        Header: "Acknowledged by",
        accessor: "acknowledged",
      },
      {
        Header: "Completed",
        accessor: "completed",
        Cell: ({ value }) => <Checkbox checked={value} />,
      },
    ],
    []
  );

  return (
    <Box>
      <Typography variant="h6">Diet History</Typography>
      {/* Use the DataTable component here */}
      <DataTable
        table={{ columns, rows }}
        entriesPerPage={{ defaultValue: 10, entries: [5, 10, 15, 20, 25] }}
        canSearch={true}
        showTotalEntries={true}
        pagination={{ variant: "gradient", color: "info" }}
      />
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

export default DietHistoryTable;
