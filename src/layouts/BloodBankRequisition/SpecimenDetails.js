import React from "react";
import {
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import MDButton from "../../components/MDButton";

const SpecimenDetails = () => {
  return (
    <Box mb={4}>
      <Typography variant="h6">Specimen Details</Typography>
      <Box>
        <Grid container spacing={2}>
          {/* Specimen Received Checkbox */}
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Specimen Received"
            />
          </Grid>

          {/* Specimen Taken By Select Dropdown */}
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth margin="normal">
              <Typography variant="body1">Specimen Taken By</Typography>
              <Select defaultValue="Nurse">
                <MenuItem value="Nurse">Nurse</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Technician">Technician</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Is Donor Available Checkbox */}
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Is Donor Available?"
            />
          </Grid>

          {/* Forward To Select Dropdown */}
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth margin="normal">
              <Typography variant="body1">Forward To</Typography>
              <Select defaultValue="Administrator">
                <MenuItem value="Administrator">Administrator</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Nurse">Nurse</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Remarks TextField */}
          <Grid item xs={4}>
            <Typography variant="body1">Remarks</Typography>
            <TextField fullWidth multiline rows={3} margin="normal" />
          </Grid>

          {/* Save Button */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" mt={2}>
              <MDButton
                sx={{
                  marginRight: 1,
                  backgroundColor: "#1976d2",
                  "&:hover": { backgroundColor: "#115293" },
                }}
                variant="contained"
                color="primary"
                size="medium"
              >
                Save
              </MDButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SpecimenDetails;
