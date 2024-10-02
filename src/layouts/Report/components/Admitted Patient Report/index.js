import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { TextField, Typography, Grid, Box } from "@mui/material";
import MDButton from "components/MDButton";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import data from "./data";

function AdmittedPatientReport() {
  const { columns, rows } = data();

  return (
    <>
      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Admitted Patient Report</p>
        </Typography>
      </Box>

      <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* From */}
          <Grid
            item
            xs={6}
            sm={3}
            sx={{
              paddingTop: "5px !important",
            }}
          >
            <Box>
              <p className="flex flex-row text-xs items-center mb-2">
                From:<span className="text-red-600 text-base mx-2">*</span>
              </p>
              <DatePicker
                renderInput={(params) => (
                  <TextField name="from" required {...params} fullWidth variant="outlined" />
                )}
              />
            </Box>
          </Grid>
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* To */}
          <Grid
            item
            xs={6}
            sm={3}
            sx={{
              paddingTop: "5px !important",
            }}
          >
            <Box>
              <p className="flex flex-row text-xs items-center mb-2">
                To:<span className="text-red-600 text-base mx-2">*</span>
              </p>
              <DatePicker
                renderInput={(params) => (
                  <TextField name="to" required {...params} fullWidth variant="outlined" />
                )}
              />
            </Box>
          </Grid>
        </LocalizationProvider>

        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <Box>
            <p className="text-xs mb-2">MR No:</p>
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
          <Box>
            <p className="text-xs mb-2">Patient First Name:</p>
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
          <Box>
            <p className="text-xs mb-2">Middle Name:</p>
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
          <Box>
            <p className="text-xs mb-2">Last Name:</p>
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
            <p htmlFor="entitlement" className="text-xs mb-2">
              Entitlement:
            </p>

            {/* Select Menu */}
            <select
              id="entitlement"
              name="entitlement"
              //   value={patient.entitlement}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.entitlement ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value="Select Entitlement">Select Entitlement</option>
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
            <p htmlFor="employer" className="text-xs mb-2">
              Employer:
            </p>

            {/* Select Menu */}
            <select
              id="employer"
              name="employer"
              //   value={patient.employer}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.employer ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value="Select Employer">Select Entitlement</option>
            </select>
          </div>
        </Grid>
      </Grid>

      <Grid className="flex justify-end" container spacing={1} sx={{ marginTop: 1, marginLeft: 1 }}>
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
        <Grid item>
          <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
            <span className="text-xs">Clear</span>
          </MDButton>
        </Grid>
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
              CLEAR
            </button>
          </MDButton>
        </Grid>
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
              CANCEL
            </button>
          </MDButton>
        </Grid>
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
              PRINT
            </button>
          </MDButton>
        </Grid>
      </Grid>

      <Box>
        <Typography sx={{ marginTop: 1 }} style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">
            Searched Admitted Patients Reports
          </p>
        </Typography>
      </Box>

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
    </>
  );
}

export default AdmittedPatientReport;
