import React from "react";

import { TextField, Typography, Grid, Box } from "@mui/material";
import MDButton from "components/MDButton";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import InvestigationsData from "./data";

function FavoriteInvestigations() {
  const { columns: InvestigationsColumns, rows: InvestigationsRows } = InvestigationsData();

  return (
    <>
      <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <Box>
            <p htmlFor="FavouriteName" className="flex flex-row text-xs items-center">
              Favourite Name:<span className="text-red-600 text-base mx-2">*</span>
            </p>
            <TextField variant="outlined" fullWidth />
          </Box>
        </Grid>

        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <div>
            {/* Label */}
            <p htmlFor="InvestigationsType" className="text-xs mb-2">
              Investigations Type:
            </p>

            {/* Select Menu */}
            <select
              id="InvestigationsType"
              name="InvestigationsType"
              //   value={patient.InvestigationsType}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.InvestigationsType ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value="Select Entitlement">Select Investigations Type</option>
            </select>
          </div>
        </Grid>

        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <Box>
            <p htmlFor="FavouriteName" className="flex flex-row text-xs items-center">
              Investigations:<span className="text-red-600 text-base mx-2">*</span>
            </p>
            <TextField variant="outlined" fullWidth />
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        className="flex justify-end"
        spacing={1}
        sx={{ marginTop: 1, marginRight: 1 }}
      >
        <Grid item>
          <MDButton
            variant="gradient"
            style={{
              borderRadius: 0,
              minHeight: 0,
              backgroundColor: "#1694c4",
              color: "White",
            }}
          >
            <button type="submit" className="text-xs">
              ADD
            </button>
          </MDButton>
        </Grid>
      </Grid>

      <Box>
        <Typography sx={{ marginTop: 1 }} style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Selected Investigations</p>
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        <Grid item sm={12}>
          <DataTable
            table={{ columns: InvestigationsColumns, rows: InvestigationsRows }}
            showTotalEntries={true}
            isSorted={true}
            noEndBorder
            entriesPerPage={false}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default FavoriteInvestigations;
