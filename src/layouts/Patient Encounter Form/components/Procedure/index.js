import { Typography, Box, Grid, TextField, Icon } from "@mui/material";
import MDButton from "components/MDButton";
import data from "./data";
import DataTable from "examples/Tables/DataTable";

const Procedure = () => {
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
            <p htmlFor="procedureType" className="text-xs mb-2">
              Procedure Type:
            </p>

            {/* Select Menu */}
            <select
              id="procedureType"
              name="procedureType"
              //   value={patient.procedureType}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.procedureType ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value=""></option>
            </select>
            {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
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
          <div>
            {/* Label */}
            <p htmlFor="organizationUnit" className="text-xs mb-2">
              Organization Unit:
            </p>

            {/* Select Menu */}
            <select
              id="organizationUnit"
              name="organizationUnit"
              //   value={patient.organizationUnit}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.organizationUnit ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value=""></option>
            </select>
            {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
          </div>
        </Grid>

        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <p className="flex text-xs items-center">
            Procedure:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          <TextField
            variant="outlined"
            name="procedure"
            fullWidth
            readOnly
            value="Burn Shave"
            // value={emergencyCase.procedure}
            // onChange={handleInputChange}
            // error={!!errors.procedure}
            // helperText={errors.procedure}
          />
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
            <p htmlFor="priority" className="flex flex-row text-xs items-center">
              Priority:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <select
              id="priority"
              name="priority"
              //   value={patient.priority}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.priority ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value=""></option>
            </select>
            {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
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
          <div>
            {/* Label */}
            <p htmlFor="frequency" className="flex flex-row text-xs items-center">
              Frequency:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <select
              id="frequency"
              name="frequency"
              //   value={patient.frequency}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.frequency ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value=""></option>
            </select>
            {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
          </div>
        </Grid>

        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <p className="flex text-xs items-center">
            Duration:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          <TextField
            variant="outlined"
            name="duration"
            fullWidth
            readOnly
            // value={emergencyCase.duration}
            // onChange={handleInputChange}
            // error={!!errors.duration}
            // helperText={errors.duration}
          />
        </Grid>

        <Grid item xs={8}>
          <p className="text-xs mb-2">Special Instructions:</p>
          <TextField
            variant="outlined"
            name="specialInstructions"
            fullWidth
            // value={emergencyCase.specialInstructions}
            // onChange={handleInputChange}
            // error={!!errors.specialInstructions}
            // helperText={errors.specialInstructions}
          />
        </Grid>

        <Grid item className="flex items-center">
          <Icon>chevron_right</Icon>
          <p className="text-xs text-sky-600">Show Favorite Remarks</p>
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
          <p className="text-base text-[#42424a] font-semibold mr-2">Selected Procedures</p>
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

export default Procedure;
