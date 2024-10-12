import React from "react";
import {
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  Typography,
  FormControlLabel,
} from "@mui/material";

const PatientRequisitionDetails = () => {
  return (
    <Box mb={4}>
      <Typography variant="h6">Patient and Requisition Details</Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              Blood Group<span style={{ color: "red" }}>*</span>
            </Typography>
            <FormControl fullWidth margin="normal">
              <Select defaultValue="A+">
                <MenuItem value="A+">A+</MenuItem>
                <MenuItem value="B+">B+</MenuItem>
                <MenuItem value="O+">O+</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="body1">Diagnosis</Typography>
            <TextField fullWidth margin="normal" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControlLabel control={<Checkbox />} label="Any Pregnancy" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControlLabel control={<Checkbox />} label="Any Miscarriage" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              Requesting Org Unit<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField fullWidth margin="normal" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="body1">Transfusion Place</Typography>
            <FormControl fullWidth margin="normal">
              <Select defaultValue="Gynae Obs Ward">
                <MenuItem value="Gynae Obs Ward">Gynae Obs Ward</MenuItem>
                <MenuItem value="Other Ward">Other Ward</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body1">Referring Consultant</Typography>
            <TextField fullWidth margin="normal" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PatientRequisitionDetails;
