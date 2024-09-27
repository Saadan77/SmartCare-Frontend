import { Typography, Box, Grid, TextField, Icon } from "@mui/material";
import MDButton from "components/MDButton";
import data from "./data";
import DataTable from "examples/Tables/DataTable";

const Diagnosis = () => {
  const { columns, rows } = data();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item className="flex items-center">
          <Icon>chevron_right</Icon>
          <p className="text-base text-sky-600">Show history</p>
        </Grid>
        <Grid item className="flex items-center">
          <Icon>chevron_right</Icon>
          <p className="text-base text-sky-600">Show favorites</p>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        <Grid item xs={6} className="flex">
          <p className="flex text-xs items-center mr-2" style={{ minWidth: "100px" }}>
            Diagnosis:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          <TextField
            variant="outlined"
            name="remarks"
            fullWidth
            readOnly
            value="Fever with heart involvment"
            // value={emergencyCase.remarks}
            // onChange={handleInputChange}
            // error={!!errors.remarks}
            // helperText={errors.remarks}
          />
        </Grid>
        <Grid item xs={12} className="flex">
          <p className="text-xs" style={{ minWidth: "100px" }}>
            Chapter:
          </p>
          <p className="text-xs text-gray-500 ml-2">Certain infectious diseases</p>
        </Grid>
        <Grid item xs={6} className="flex items-center">
          <p className="text-xs mr-2" style={{ minWidth: "100px" }}>
            Remarks:{" "}
          </p>
          <TextField
            variant="outlined"
            name="remarks"
            fullWidth
            // value={emergencyCase.remarks}
            // onChange={handleInputChange}
            // error={!!errors.remarks}
            // helperText={errors.remarks}
          />
        </Grid>
      </Grid>
      <Grid
        className="flex justify-end"
        container
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
              Add
            </button>
          </MDButton>
        </Grid>
      </Grid>

      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Selected Diagnosis</p>
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
    </div>
  );
};

export default Diagnosis;
