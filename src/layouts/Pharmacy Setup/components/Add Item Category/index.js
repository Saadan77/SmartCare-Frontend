import { Typography, Box, Grid, TextField } from "@mui/material";

// import data from "./data";
// import DataTable from "examples/Tables/DataTable";

import MDButton from "components/MDButton";

const AddItemCategory = () => {
  //   const { columns, rows } = data();

  return (
    <div>
      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Add Item Category</p>
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
              Item Category:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            <TextField variant="outlined" fullWidth name="generic" />
          </div>
        </Grid>

        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <div>
            {/* Label */}
            <p htmlFor="abbreviation" className="flex flex-row text-xs items-center">
              Abbreviation:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            <TextField variant="outlined" fullWidth name="abbreviation" />
          </div>
        </Grid>

        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <div>
            {/* Label */}
            <p htmlFor="alternative" className="text-xs mb-2">
              Alternative:
            </p>

            <TextField variant="outlined" fullWidth name="alternative" />
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
          <p className="text-base text-[#42424a] font-semibold mr-2">Searched Items Category</p>
        </Typography>
      </Box>

      <Grid container sx={{ marginTop: 1 }}>
        <Grid
          item
          xs={12}
          sx={{ padding: "5px !important" }}
          className="flex justify-center items-center border border-gray-300"
        >
          <p className="text-xs font-medium">No record found</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddItemCategory;
