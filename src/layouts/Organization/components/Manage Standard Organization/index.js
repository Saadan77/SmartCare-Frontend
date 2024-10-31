/* eslint-disable prettier/prettier */
/* prettier-ignore-end-of-line */
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import data from "./data";

import { TextField, Container, Typography, Grid, Paper, Box } from "@mui/material";

import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";

export default function ManageStandardOrganization() {
  const { columns, rows } = data();
  return (
    <div>
          <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
              Manage Standard Organization
          </Typography>
          </Box>

          <Grid
            container
            sx={{ marginTop: 1 }}
            spacing={2}
            className="flex flex-col lg:flex-row items-center lg:gap-32"
          >
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              sx={{ paddingTop: "5px !important", paddingBottom: "5px !important" }}
            >
              <label htmlFor="organization" className="text-xs mb-2 block">
                Standard Organization
              </label>
              <select
                id="organization"
                name="organization"
                className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value=""></option>
              </select>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              sx={{ paddingTop: "5px !important", paddingBottom: "5px !important" }}
            >
              <label htmlFor="description" className="text-xs mb-2 block">
                Description
              </label>
              <TextField
                id="description"
                name="description"
                multiline
                rows={4}
                variant="outlined"
                placeholder="Specify Description"
                fullWidth
                sx={{
                  "& .MuiInputBase-input": {
                    paddingTop: "12px",
                    paddingBottom: "12px",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            <Grid item sm={12}>
              <DataTable
                table={{ columns, rows }}
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
            <Grid item sx={{ paddingLeft: "1px !important", marginRight: "5px !important" }}>
              <MDButton
                sx={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}
                variant="gradient"
              >
                <span className="text-xs">Update</span>
              </MDButton>
            </Grid>
            <Grid item sx={{ paddingLeft: "1px !important" }}>
              <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
                <span className="text-xs">Cancel</span>
              </MDButton>
            </Grid>
          </Grid>
        </div>
  );
}
