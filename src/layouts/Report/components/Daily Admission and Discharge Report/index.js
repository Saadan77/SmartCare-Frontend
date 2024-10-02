import React from "react";

import { Typography, Grid, Box } from "@mui/material";
import MDButton from "components/MDButton";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import data from "./data";

function DailyAdmissionAndDischargeReport() {
  const { columns, rows } = data();

  return (
    <>
      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">
            Daily Admission and Discharge Report
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
          <Box>
            <p className="font-semibold text-xs">
              Date: <span className="text-xs text-gray-500 ml-2">01-10-2024</span>
            </p>
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

      <Grid className="flex justify-end" container spacing={1} sx={{ marginTop: 1 }}>
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
          <p className="text-base text-[#42424a] font-semibold mr-2">Searched Records</p>
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

export default DailyAdmissionAndDischargeReport;
