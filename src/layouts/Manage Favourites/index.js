import React, { useState } from "react";

import { Typography, Box, Container, Paper, Grid, TextField } from "@mui/material";

import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import FavouritesData from "./data";

function ManageFavourites() {
  const { columns: FavouritesColumns, rows: FavouritesRows } = FavouritesData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Container
        sx={{
          maxWidth: "100% !important",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
          marginLeft: "0 !important",
          marginRight: "0 !important",
        }}
      >
        <Paper
          elevation={3}
          sx={{ padding: 2, marginTop: 3, position: "relative" }}
          className="h-full"
        >
          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Manage Favorites</p>
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="font-semibold text-xs mb-2">
                  Organization Unit:{" "}
                  <span className="text-xs text-gray-500">Medical / General OPD</span>
                </p>
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="font-semibold text-xs mb-2">
                  Doctor: <span className="text-xs text-gray-500">Dr. John Smith</span>
                </p>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                paddingTop: "5px !important",
              }}
            >
              <div>
                {/* Label */}
                <p htmlFor="FavoriteCategory" className="flex text-xs items-center">
                  Favorite Category:<span className="text-red-600 text-base mx-2">*</span>
                </p>

                {/* Select Menu */}
                <select
                  id="FavoriteCategory"
                  name="FavoriteCategory"
                  //   value={patient.FavoriteCategory}
                  //   onChange={handleInputChange}
                  className={`block h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                >
                  <option value="Favourite Diagnosis">Favourite Diagnosis</option>
                  <option value="Favourite Investigation">Favourite Investigation</option>
                  <option value="Favourite Procedure">Favourite Procedure</option>
                  <option value="Favourite Medication">Favourite Medication</option>
                  <option value="Favourite Advice">Favourite Advice</option>
                  <option value="Pre-Op Order">Pre-Op Order</option>
                  <option value="Post-Op Order">Post-Op Order</option>
                </select>
              </div>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Existing Favorites</p>
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DataTable
                table={{ columns: FavouritesColumns, rows: FavouritesRows }}
                showTotalEntries={true}
                isSorted={true}
                noEndBorder
                entriesPerPage={false}
              />
            </Grid>
          </Grid>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex justify-end">
            <Grid item sx={{ paddingLeft: "1px !important" }}>
              <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
                <span className="text-xs">Cancel</span>
              </MDButton>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </DashboardLayout>
  );
}

export default ManageFavourites;
