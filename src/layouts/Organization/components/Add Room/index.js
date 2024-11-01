/* eslint-disable prettier/prettier */
/* prettier-ignore-end-of-line */
import { Typography, Box, Grid, TextField, MenuItem } from "@mui/material";
import data from "./data";
import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";

const AddRoom = () => {
  const { columns, rows } = data();

  return (
    <div>
      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Add Room</p>
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: 1, alignItems: "center" }}>
        <Grid item xs={4}>
          <p className="text-xs mb-2">Ward Name:<span className="text-red-600 text-base mx-2">*</span></p>
          <TextField select variant="outlined" fullWidth name="wardName"  sx={{ 
              '& .MuiInputBase-root': {
                height: '34px', // Same height as standard outlined TextField
                paddingRight: '0px', // Adjust padding for consistency with text fields
              }
            }}>
            {/* Options for wards */}
            <MenuItem value="1">Ward 1</MenuItem>
            <MenuItem value="2">Ward 2</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <p className="text-xs mb-2">Room Number:<span className="text-red-600 text-base mx-2">*</span></p>
          <TextField variant="outlined" fullWidth name="roomNumber" />
        </Grid>


        <Grid item xs={4}>
          <p className="text-xs mb-2">Room Type:</p>
          <TextField select variant="outlined" fullWidth name="roomType"  sx={{ 
              '& .MuiInputBase-root': {
                height: '34px', // Same height as standard outlined TextField
                paddingRight: '0px', // Adjust padding for consistency with text fields
              }
            }}>
            {/* Options for room types */}
            <MenuItem value="Private Room">Private Room</MenuItem>
            <MenuItem value="Deluxe Room">Deluxe Room</MenuItem>
            <MenuItem value="VIP">VIP</MenuItem>
            <MenuItem value="Suite Room">Suite Room</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ marginTop: 1 }} className="flex justify-end gap-1">
        <Grid item>
          <MDButton variant="gradient" style={{ backgroundColor: "#1694c4", color: "White", borderRadius: 0, minHeight: 0 }}>
            <button type="submit" className="text-xs">SAVE</button>
          </MDButton>
        </Grid>
        <Grid item sx={{ paddingLeft: "1px !important" }}>
          <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
            <button className="text-xs">CANCEL</button>
          </MDButton>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 2 }}>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Searched Rooms</p>
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DataTable table={{ columns, rows }} showTotalEntries={true} isSorted={true} noEndBorder />
        </Grid>
      </Grid>
    </div>
  );
};

export default AddRoom;
