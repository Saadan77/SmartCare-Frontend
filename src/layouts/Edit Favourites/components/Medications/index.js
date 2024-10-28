import React from "react";

import { TextField, Typography, Grid, Box } from "@mui/material";
import MDButton from "components/MDButton";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import AddedMedicationsData from "./components/Added Medications/data";
import ExistingMedicationsData from "./components/Existing Medications/data";

function EditFavoriteMedications() {
  const { columns: AddedMedicationsColumns, rows: AddedMedicationsRows } = AddedMedicationsData();
  const { columns: ExistingMedicationsColumns, rows: ExistingMedicationsRows } =
    ExistingMedicationsData();

  return (
    <>
      <Box>
        <Typography sx={{ marginTop: 1 }} style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Edit Favorite Medications</p>
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
          <Box className="flex items-center">
            <p htmlFor="FavouriteName" className="flex text-xs items-center">
              Favourite Name:<span className="text-red-600 text-base mx-2">*</span>
            </p>
            <p className="text-xs ml-2 font-semibold">Lab</p>
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
            <p htmlFor="MedicationsType" className="text-xs mb-2">
              Medications Type:
            </p>

            {/* Select Menu */}
            <select
              id="MedicationsType"
              name="MedicationsType"
              //   value={patient.MedicationsType}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.MedicationsType ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value="Select Entitlement">Select Medications Type</option>
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
              Medications:<span className="text-red-600 text-base mx-2">*</span>
            </p>
            <TextField variant="outlined" fullWidth />
          </Box>
        </Grid>

        <Grid item xs={3}>
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
        <Typography sx={{ marginTop: 2 }} style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Added Medications</p>
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item sm={12}>
          <DataTable
            table={{ columns: AddedMedicationsColumns, rows: AddedMedicationsRows }}
            showTotalEntries={true}
            isSorted={true}
            noEndBorder
            entriesPerPage={false}
          />
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex justify-center">
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
              UPDATE
            </button>
          </MDButton>
        </Grid>

        <Grid item sx={{ paddingLeft: "1px !important" }}>
          <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
            <span className="text-xs">Back</span>
          </MDButton>
        </Grid>
      </Grid>

      <Box>
        <Typography sx={{ marginTop: 1 }} style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Existing Medications</p>
        </Typography>
      </Box>

      <Grid container sx={{ marginTop: 1 }}>
        <Grid item sm={12}>
          <DataTable
            table={{ columns: ExistingMedicationsColumns, rows: ExistingMedicationsRows }}
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

export default EditFavoriteMedications;
