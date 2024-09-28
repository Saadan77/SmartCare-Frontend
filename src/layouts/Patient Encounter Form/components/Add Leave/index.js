import { Typography, Box, Grid, TextField, Icon } from "@mui/material";
import MDButton from "components/MDButton";
import data from "./data";
import DataTable from "examples/Tables/DataTable";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const AddLeave = () => {
  const { columns, rows } = data();

  return (
    <div>
      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Add Leave</p>
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
            <p htmlFor="leaveType" className="flex flex-row text-xs items-center">
              Leave Type:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="leaveType"
                name="leaveType"
                //   value={patient.leaveType}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.leaveType ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value=""></option>
              </select>
              {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
            </div>
          </div>
        </Grid>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* From Date/Time */}
          <Grid
            item
            xs={6}
            sm={3}
            sx={{
              paddingTop: "5px !important",
            }}
          >
            <Box>
              <p className="flex flex-row text-xs items-center">
                From Date/Time:<span className="text-red-600 text-base mx-2">*</span>
              </p>
              <DatePicker
                renderInput={(params) => (
                  <TextField
                    name="fromDateTime"
                    required
                    {...params}
                    fullWidth
                    variant="outlined"
                  />
                )}
              />
            </Box>
          </Grid>
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* To Date/Time */}
          <Grid
            item
            xs={6}
            sm={3}
            sx={{
              paddingTop: "5px !important",
            }}
          >
            <Box>
              <p className="flex flex-row text-xs items-center">
                To Date/Time:<span className="text-red-600 text-base mx-2">*</span>
              </p>
              <DatePicker
                renderInput={(params) => (
                  <TextField name="toDateTime" required {...params} fullWidth variant="outlined" />
                )}
              />
            </Box>
          </Grid>
        </LocalizationProvider>

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
            <p htmlFor="leaveCategory" className="text-xs mb-2">
              Leave Category:
            </p>

            {/* Select Menu */}
            <select
              id="leaveCategory"
              name="leaveCategory"
              //   value={patient.leaveCategory}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.leaveCategory ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value="Full Day">Full Day</option>
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
            <p htmlFor="admissionType" className="text-xs mb-2">
              Admission Type:
            </p>

            {/* Select Menu */}
            <select
              id="admissionType"
              name="admissionType"
              //   value={patient.admissionType}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.admissionType ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value=""></option>
            </select>
            {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
          </div>
        </Grid>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* Admission Date */}
          <Grid
            item
            xs={6}
            sm={3}
            sx={{
              paddingTop: "5px !important",
            }}
          >
            <Box>
              <p className="flex flex-row text-xs items-center">
                Admission Date:<span className="text-red-600 text-base mx-2">*</span>
              </p>
              <DatePicker
                renderInput={(params) => (
                  <TextField
                    name="admissionDate"
                    required
                    {...params}
                    fullWidth
                    variant="outlined"
                  />
                )}
              />
            </Box>
          </Grid>
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* Discharge Date */}
          <Grid
            item
            xs={6}
            sm={3}
            sx={{
              paddingTop: "5px !important",
            }}
          >
            <Box>
              <p className="flex flex-row text-xs items-center">
                Discharge Date:<span className="text-red-600 text-base mx-2">*</span>
              </p>
              <DatePicker
                renderInput={(params) => (
                  <TextField
                    name="dischargeDate"
                    required
                    {...params}
                    fullWidth
                    variant="outlined"
                  />
                )}
              />
            </Box>
          </Grid>
        </LocalizationProvider>

        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <p className="flex text-xs items-center">
            Reason:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          <div className="flex items-center">
            <TextField
              variant="outlined"
              name="reason"
              fullWidth
              // value={emergencyCase.reason}
              // onChange={handleInputChange}
              // error={!!errors.reason}
              // helperText={errors.reason}
            />
          </div>
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
          <p className="text-base text-[#42424a] font-semibold mr-2">Leave History</p>
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

export default AddLeave;
