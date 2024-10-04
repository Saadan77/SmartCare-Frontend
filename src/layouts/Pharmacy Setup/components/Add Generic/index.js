import { Typography, Box, Grid, TextField } from "@mui/material";

import data from "./data";
import DataTable from "examples/Tables/DataTable";

import MDButton from "components/MDButton";

const AddGeneric = () => {
  const { columns, rows } = data();

  return (
    <div>
      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Add Generic</p>
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <div>
            {/* Label */}
            <p htmlFor="generic" className="flex flex-row text-xs items-center">
              Generic:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            <TextField variant="outlined" fullWidth name="generic" />
            {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
          </div>
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

      <Box sx={{ marginTop: 2 }}>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Generic</p>
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DataTable
            table={{ columns, rows }}
            showTotalEntries={true}
            isSorted={true}
            noEndBorder
            entriesPerPage={false}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AddGeneric;
