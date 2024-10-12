import React from "react";
import {
  Box,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import MDButton from "../../components/MDButton";

const RequestedProductDetails = () => {
  return (
    <Box mb={4}>
      <Typography variant="h6">Requested Product Details</Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth margin="normal">
              <Typography variant="body1">
                Blood Product<span style={{ color: "red" }}>*</span>
              </Typography>
              <Select defaultValue="Platelets">
                <MenuItem value="Platelets">Platelets</MenuItem>
                <MenuItem value="Plasma">Plasma</MenuItem>
                <MenuItem value="RBC">RBC</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1">
              Unit Required<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              type="number"
              defaultValue={1}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1">
              Blood Quantity (ml)<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              type="number"
              defaultValue={450}
              fullWidth
              margin="normal"
            />
          </Grid>

          <Grid item xs={6} sm={4}>
            <Typography variant="body1">
              Required Date<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              type="datetime-local"
              defaultValue="2018-04-12T18:00"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1">Required Donors</Typography>
            <TextField
              type="number"
              defaultValue={1}
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>

        <Grid container justifyContent="center" spacing={2} marginTop={2}>
          <Grid item>
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
          </Grid>
          <Grid item>
            <MDButton
              sx={{
                marginRight: 1,
                backgroundColor: "#e0e0e0",
                color: "black",
                "&:hover": { backgroundColor: "#bdbdbd" },
              }}
              variant="contained"
              size="medium"
            >
              Cancel
            </MDButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RequestedProductDetails;
