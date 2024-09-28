import { Box, Grid, TextField } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const NextVisit = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* Next Visit */}
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
                Next Visit:<span className="text-red-600 text-base mx-2">*</span>
              </p>
              <DatePicker
                renderInput={(params) => (
                  <TextField name="nextVisit" required {...params} fullWidth variant="outlined" />
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
            <p htmlFor="purpose" className="flex flex-row text-xs items-center">
              Purpose:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="purpose"
                name="purpose"
                //   value={patient.purpose}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.purpose ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="Follow Up">Follow Up</option>
                <option value="Procedure">Procedure</option>
              </select>
              {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
            </div>
          </div>
        </Grid>

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
            <p htmlFor="nextVisit" className="text-xs mb-2">
              Next Visit Time:
            </p>

            <div className="flex">
              {/* Select Menu */}
              <select
                id="nextVisitHour"
                name="nextVisitHour"
                //   value={patient.nextVisitHour}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.nextVisitHour ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="0">0</option>
              </select>

              {/* Select Menu */}
              <select
                id="nextVisitMin"
                name="nextVisitMin"
                //   value={patient.nextVisitMin}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.nextVisitMin ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="0">0</option>
              </select>
            </div>
            {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NextVisit;
