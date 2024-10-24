import React, { useState } from "react";

import { Typography, Box, Container, Paper, Grid, TextField } from "@mui/material";

import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import DetailsOfSurgicalProceduresData from "./components/Details of Surgical Procedures/data";
import CourseDuringHospialStayData from "./components/Course During Hospial Stay/data";
import InvestigationsData from "./components/Investigation/data";
import ExternalReferralsData from "./components/Selected External Referrals/data";
import BabyDetailsData from "./components/Baby Details/data";

function DischargeSummary() {
  const { columns: DetailsOfSurgicalProceduresColumns, rows: DetailsOfSurgicalProceduresRows } =
    DetailsOfSurgicalProceduresData();

  const { columns: CourseDuringHospialStayColumns, rows: CourseDuringHospialStayRows } =
    CourseDuringHospialStayData();

  const { columns: InvestigationsColumns, rows: InvestigationsRows } = InvestigationsData();

  const { columns: ExternalReferralsColumns, rows: ExternalReferralsRows } =
    ExternalReferralsData();

  const { columns: BabyDetailsColumns, rows: BabyDetailsRows } = BabyDetailsData();

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
          <Box sx={{ marginTop: 1 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Patient Information</p>
            </Typography>
          </Box>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
            <Grid
              item
              xs={12}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="font-semibold text-xs mb-2">
                  MR No.: <span className="text-xs text-gray-500">00001-01-10-2024</span>
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
                  Patient Name: <span className="text-xs text-gray-500">John Smith</span>
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
                <p className="flex flex-row text-xs font-semibold items-center mb-2">
                  Gender:<p className="font-normal text-gray-600 text-xs mx-2">Male</p>
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
                <p className="flex flex-row text-xs font-semibold items-center mb-2">
                  DOB:<p className="font-normal text-gray-600 text-xs mx-2">12/09/2001</p>
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
                <p className="flex flex-row text-xs font-semibold items-center mb-2">
                  Age:<p className="font-normal text-gray-600 text-xs mx-2">22 years 09 months</p>
                </p>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Diagnosis</p>
            </Typography>
          </Box>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
            <Grid
              item
              xs={12}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">
                Associated Diagnosis/Alerts
              </p>
            </Typography>
          </Box>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
            <Grid
              item
              xs={12}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">
                Details of Surgical Procedures
              </p>
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DataTable
                table={{
                  columns: DetailsOfSurgicalProceduresColumns,
                  rows: DetailsOfSurgicalProceduresRows,
                }}
                showTotalEntries={true}
                isSorted={true}
                noEndBorder
                entriesPerPage={false}
              />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Condition on Arrival</p>
            </Typography>
          </Box>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
            <Grid
              item
              xs={12}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <p className="text-xs mb-2">Present Complaints:</p>
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Clinical Findings</p>
            </Typography>
          </Box>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
            <Grid
              item
              xs={12}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">
                Course During Hospital Stay
              </p>
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DataTable
                table={{
                  columns: CourseDuringHospialStayColumns,
                  rows: CourseDuringHospialStayRows,
                }}
                showTotalEntries={true}
                isSorted={true}
                noEndBorder
                entriesPerPage={false}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <p className="text-xs mb-2">Progress Notes:</p>
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Investigation</p>
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DataTable
                table={{
                  columns: InvestigationsColumns,
                  rows: InvestigationsRows,
                }}
                showTotalEntries={true}
                isSorted={true}
                noEndBorder
                entriesPerPage={false}
              />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Investigation Remarks</p>
            </Typography>
          </Box>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
            <Grid
              item
              xs={12}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <p className="text-xs mb-2">Investigation Remarks:</p>
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">
                Selected External Referrals
              </p>
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DataTable
                table={{
                  columns: ExternalReferralsColumns,
                  rows: ExternalReferralsRows,
                }}
                showTotalEntries={true}
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
                  PREVIEW REFERRAL DETAIL
                </button>
              </MDButton>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Advice On Discharge</p>
            </Typography>
          </Box>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
            <Grid
              item
              xs={12}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <p className="text-xs mb-2">Advice On Discharge:</p>
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Wound Description</p>
            </Typography>
          </Box>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
            <Grid
              item
              xs={12}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <p className="text-xs mb-2">Wound Description:</p>
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Discharge Details</p>
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
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
                <p htmlFor="DischargeType" className="flex text-xs items-center">
                  Discharge Type:<span className="text-red-600 text-base mx-2">*</span>
                </p>

                {/* Select Menu */}
                <select
                  id="DischargeType"
                  name="DischargeType"
                  //   value={patient.DischargeType}
                  //   onChange={handleInputChange}
                  required
                  //   className={`block w-full h-8 border ${
                  //     errors.DischargeType ? "border-red-500" : "border-gray-300"
                  //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                >
                  <option value="Home">Home</option>
                </select>
                {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
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
              <div>
                {/* Label */}
                <p htmlFor="NextVisit" className="text-xs mb-2">
                  Next Visit:
                </p>

                {/* Select Menu */}
                <select
                  id="NextVisit"
                  name="NextVisit"
                  //   value={patient.NextVisit}
                  //   onChange={handleInputChange}
                  className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                >
                  <option value=""></option>
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
              <div>
                {/* Label */}
                <p htmlFor="Purpose" className="text-xs mb-2">
                  Purpose:
                </p>

                {/* Select Menu */}
                <select
                  id="Purpose"
                  name="Purpose"
                  //   value={patient.Purpose}
                  //   onChange={handleInputChange}
                  className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                >
                  <option value=""></option>
                </select>
              </div>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Baby Details</p>
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DataTable
                table={{ columns: BabyDetailsColumns, rows: BabyDetailsRows }}
                showTotalEntries={true}
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
                  SAVE
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

export default DischargeSummary;
