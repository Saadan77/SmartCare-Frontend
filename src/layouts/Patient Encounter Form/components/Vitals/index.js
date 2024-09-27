import { Typography, Box, Grid, TextField } from "@mui/material";
import MDButton from "components/MDButton";

const Vitals = () => {
  return (
    <div>
      {/* Add Vitals Section */}
      <Box
        sx={{
          marginTop: 2,
        }}
      >
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Add Vitals</p>
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        {/* Pulse */}
        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <Box>
            <p className="text-xs mb-2">Pulse/Heart:</p>
            <div className="flex items-center">
              <TextField
                variant="outlined"
                name="pulse"
                // value={emergencyCase.pulse}
                // onChange={handleInputChange}
                // error={!!errors.pulse}
                // helperText={errors.pulse}
              />
              <p className="text-sm ml-2">pm</p>
            </div>
          </Box>
        </Grid>

        {/* Blood Pressure */}
        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <Box>
            <p className="text-xs mb-2">Blood Pressure:</p>
            <div className="flex items-center">
              <TextField
                variant="outlined"
                name="bloodPressure"
                // value={emergencyCase.bloodPressure}
                // onChange={handleInputChange}
                // error={!!errors.bloodPressure}
                // helperText={errors.bloodPressure}
              />
              <p className="text-sm ml-2">mmHg</p>
            </div>
          </Box>
        </Grid>

        {/* Respiratory Rate */}
        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <Box>
            <p className="text-xs mb-2">Respiratory Rate:</p>
            <div className="flex items-center">
              <TextField
                variant="outlined"
                name="respiratoryRate"
                // value={emergencyCase.respiratoryRate}
                // onChange={handleInputChange}
                // error={!!errors.respiratoryRate}
                // helperText={errors.respiratoryRate}
              />
              <p className="text-sm ml-2">pm</p>
            </div>
          </Box>
        </Grid>

        {/* Oxygen Saturation */}
        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <Box>
            <p className="text-xs mb-2">Oxygen Saturation:</p>
            <TextField
              variant="outlined"
              name="oxygenSaturation"
              // value={emergencyCase.oxygenSaturation}
              // onChange={handleInputChange}
              // error={!!errors.oxygenSaturation}
              // helperText={errors.oxygenSaturation}
            />
          </Box>
        </Grid>

        {/* Temperature */}
        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <Box>
            <p className="text-xs mb-2">Temperature:</p>
            <div className="flex items-center">
              <TextField
                variant="outlined"
                name="temperature"
                // value={emergencyCase.temperature}
                // onChange={handleInputChange}
                // error={!!errors.temperature}
                // helperText={errors.temperature}
              />
              <p className="text-sm ml-2">C</p>
            </div>
          </Box>
        </Grid>

        {/* Pain Level */}
        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <Box>
            <p className="text-xs mb-2">Pain Level:</p>
            <TextField
              variant="outlined"
              name="painLevel"
              // value={emergencyCase.painLevel}
              // onChange={handleInputChange}
              // error={!!errors.painLevel}
              // helperText={errors.painLevel}
            />
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
            <p className="text-xs mb-2">Level of Consciousness:</p>
            <TextField
              variant="outlined"
              name="levelOfConsciousness"
              // value={emergencyCase.levelOfConsciousness}
              // onChange={handleInputChange}
              // error={!!errors.levelOfConsciousness}
              // helperText={errors.levelOfConsciousness}
            />
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
            <p className="text-xs mb-2">Capillary Refill Time:</p>
            <div className="flex items-center">
              <TextField
                variant="outlined"
                name="capillaryRefillTime"
                // value={emergencyCase.capillaryRefillTime}
                // onChange={handleInputChange}
                // error={!!errors.capillaryRefillTime}
                // helperText={errors.capillaryRefillTime}
              />
              <p className="text-sm ml-2">sec</p>
            </div>
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
            <p className="text-xs mb-2">Blood Glucose Level:</p>
            <div className="flex items-center">
              <TextField
                variant="outlined"
                name="bloodGlucoseLevel"
                // value={emergencyCase.bloodGlucoseLevel}
                // onChange={handleInputChange}
                // error={!!errors.bloodGlucoseLevel}
                // helperText={errors.bloodGlucoseLevel}
              />
              <p className="text-sm ml-2">mg/dl</p>
            </div>
          </Box>
        </Grid>

        <Grid
          className="flex justify-end"
          container
          spacing={1}
          sx={{ marginTop: 1, marginLeft: 1 }}
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
                Show Chart
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
                Request E-Vitals
              </button>
            </MDButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Vitals;
