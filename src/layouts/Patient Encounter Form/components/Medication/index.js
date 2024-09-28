import { Typography, Box, Grid, TextField, Icon } from "@mui/material";
import MDButton from "components/MDButton";
import data from "./data";
import DataTable from "examples/Tables/DataTable";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Medication = () => {
  const { columns, rows } = data();

  return (
    <div>
      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Add Medication</p>
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item className="flex items-center">
          <Icon>chevron_right</Icon>
          <p className="text-base text-sky-600">Show history</p>
        </Grid>
        <Grid item className="flex items-center">
          <Icon>chevron_right</Icon>
          <p className="text-base text-sky-600">Show favorites</p>
        </Grid>
        <Grid item className="flex items-center">
          <Icon>chevron_right</Icon>
          <p className="text-base text-sky-600">Show Ongoing Medication</p>
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
            <p htmlFor="pharmacy" className="text-xs mb-2">
              Pharmacy:
            </p>

            {/* Select Menu */}
            <select
              id="pharmacy"
              name="pharmacy"
              //   value={patient.pharmacy}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.pharmacy ? "border-red-500" : "border-gray-300"
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
            <p htmlFor="items" className="text-xs mb-2">
              Items:
            </p>

            {/* Select Menu */}
            <select
              id="items"
              name="items"
              //   value={patient.items}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.items ? "border-red-500" : "border-gray-300"
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
            Medicine:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          <TextField
            variant="outlined"
            name="Medicine"
            fullWidth
            readOnly
            value="Panadol"
            // value={emergencyCase.Medicine}
            // onChange={handleInputChange}
            // error={!!errors.Medicine}
            // helperText={errors.Medicine}
          />
        </Grid>

        <Grid item sx={{ marginTop: 1 }}>
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
              Alternate
            </button>
          </MDButton>
        </Grid>

        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <p className="flex text-xs items-center">
            Dosage:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          <div className="flex items-center">
            <TextField
              variant="outlined"
              name="Medicine"
              readOnly
              value="1.0 + 1.0"
              // value={emergencyCase.Medicine}
              // onChange={handleInputChange}
              // error={!!errors.Medicine}
              // helperText={errors.Medicine}
            />
            {/* Select Menu */}
            <select
              id="items"
              name="items"
              //   value="Table Spoon"
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.items ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`ml-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value="Table Spoon">Table Spoon</option>
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
          <div>
            {/* Label */}
            <p htmlFor="frequency" className="flex flex-row text-xs items-center">
              Frequency:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="frequency"
                name="frequency"
                //   value={patient.frequency}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.frequency ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="12 hourly">12 hourly</option>
              </select>
              {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}

              <TextField
                variant="outlined"
                // name="Medicine"
                readOnly
                value="1"
                // value={emergencyCase.Medicine}
                // onChange={handleInputChange}
                // error={!!errors.Medicine}
                // helperText={errors.Medicine}
              />
              <p>.</p>
              <TextField
                variant="outlined"
                // name="Medicine"
                readOnly
                value="1"
                // value={emergencyCase.Medicine}
                // onChange={handleInputChange}
                // error={!!errors.Medicine}
                // helperText={errors.Medicine}
              />
            </div>
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

        <Grid item xs={3} sx={{ paddingTop: "5px !important" }}>
          <p className="text-xs mb-2">Route:</p>
          <TextField
            variant="outlined"
            name="route"
            fullWidth
            // value={emergencyCase.route}
            // onChange={handleInputChange}
            // error={!!errors.route}
            // helperText={errors.route}
          />
        </Grid>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* Start Date */}
          <Grid
            item
            xs={6}
            sm={3}
            sx={{
              paddingTop: "5px !important",
            }}
          >
            <Box>
              <p className="flex flex-row text-xs items-center mb-2">
                Start Date:<span className="text-red-600 text-base mx-2">*</span>
              </p>
              <DatePicker
                renderInput={(params) => (
                  <TextField name="dob" required {...params} fullWidth variant="outlined" />
                )}
              />
            </Box>
          </Grid>
        </LocalizationProvider>

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
          <p className="text-base text-[#42424a] font-semibold mr-2">Selected Medications</p>
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

export default Medication;
