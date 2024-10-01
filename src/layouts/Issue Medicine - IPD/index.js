import React from "react";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { Container, Typography, Grid, Paper, Box } from "@mui/material";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";
import issueMedicinesData from "./data/Medicine Issue";

// Data
import data from "./data";

import MDButton from "components/MDButton";

function IssueMedicine() {
  const { columns, rows } = data();
  const { columns: issueMedicinesColumns, rows: issueMedicinesRows } = issueMedicinesData();

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
          <Box>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">
                Issue Medicine Patient Wise
              </p>
            </Typography>
          </Box>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
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
                <p htmlFor="ward" className="flex flex-row text-xs items-center">
                  Ward:<span className="text-red-600 text-base mx-2">*</span>
                </p>

                {/* Select Menu */}
                <div className="flex items-center">
                  <select
                    id="ward"
                    name="ward"
                    //   value={patient.ward}
                    //   onChange={handleInputChange}
                    required
                    //   className={`block w-full h-8 border ${
                    //     errors.ward ? "border-red-500" : "border-gray-300"
                    //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                    className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  >
                    <option value="Emergency Ward">Emergency Ward</option>
                  </select>
                  {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
                </div>
              </div>
            </Grid>
          </Grid>

          <Box>
            <Typography sx={{ marginTop: 1 }} style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">
                Recommeded Patients List
              </p>
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            <Grid item sm={12}>
              <DataTable
                table={{ columns, rows }}
                showTotalEntries={false}
                isSorted={true}
                noEndBorder
                entriesPerPage={false}
              />
            </Grid>
          </Grid>

          <Box>
            <Typography sx={{ marginTop: 1 }} style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Patient Information</p>
            </Typography>
          </Box>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
            <Grid
              item
              xs={6}
              sm={2}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box className="flex">
                <p className="text-xs font-semibold mr-2">MR No: </p>
                <p className="text-xs">00001-01-10-2024</p>
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={2}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box className="flex">
                <p className="text-xs font-semibold mr-2">Patient Name:</p>
                <p className="text-xs">John Smith</p>
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={2}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="flex flex-row text-xs font-semibold items-center">
                  Gender:<p className="font-normal text-gray-600 text-xs mx-2">Male</p>
                </p>
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={2}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="flex flex-row text-xs font-semibold items-center">
                  DOB:<p className="font-normal text-gray-600 text-xs mx-2">12/09/2001</p>
                </p>
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={2}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="flex flex-row text-xs font-semibold items-center">
                  Age:<p className="font-normal text-gray-600 text-xs mx-2">22 years 09 months</p>
                </p>
              </Box>
            </Grid>
          </Grid>

          <Box>
            <Typography sx={{ marginTop: 2 }} style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Issue Medicines</p>
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            <Grid item xs={12}>
              <Box className="flex">
                <p className="text-xs font-semibold mr-2">Requisition No.:</p>
                <p className="text-xs">REQ-1231231</p>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <DataTable
                table={{ columns: issueMedicinesColumns, rows: issueMedicinesRows }}
                showTotalEntries={false}
                isSorted={true}
                noEndBorder
                entriesPerPage={false}
              />
            </Grid>
          </Grid>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex justify-end">
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
                  SEARCH
                </button>
              </MDButton>
            </Grid>

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

export default IssueMedicine;
