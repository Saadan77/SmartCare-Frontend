import { Typography, Box, Grid, TextField } from "@mui/material";

import DataTable from "examples/Tables/DataTable";
import data from "../Manage Organization Unit Shift/data";
import employeeData from "./data";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MDButton from "components/MDButton";

const ManageEmployeeDutyRoster = () => {
  const { columns, rows } = data();
  const { columns: employeeColumns, rows: employeeRows } = employeeData();

  return (
    <div>
      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Manage Employee Duty Roster</p>
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: 1 }} className="flex items-end">
        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <Box>
            <p className="font-semibold text-xs mb-2">
              Organization Unit: <span className="text-xs text-gray-500">Dr. John Smith</span>
            </p>
          </Box>
        </Grid>

        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <div>
            {/* Label */}
            <p htmlFor="organizationType" className="flex flex-row text-xs items-center">
              Organization Type:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <select
              id="organizationType"
              name="organizationType"
              //   value={patient.organizationType}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.organizationType ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value=""></option>
            </select>
          </div>
        </Grid>

        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <div>
            {/* Label */}
            <p htmlFor="organizationNature" className="flex flex-row text-xs items-center">
              Organization Nature:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <select
              id="organizationNature"
              name="organizationNature"
              //   value={patient.organizationNature}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.organizationNature ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value=""></option>
            </select>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        <Grid item xs={12}>
          <DataTable
            table={{ columns, rows }}
            showTotalEntries={true}
            isSorted={true}
            noEndBorder
            entriesPerPage={false}
          />
        </Grid>
      </Grid>

      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Duty Details</p>
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: 1 }} className="flex items-end">
        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <Box>
            <p className="font-semibold text-xs mb-2">
              Duty Organization Unit: <span className="text-xs text-gray-500">Medical OPD</span>
            </p>
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
          <div>
            {/* Label */}
            <p htmlFor="shiftType" className="text-xs mb-2">
              Shift Type:
            </p>

            {/* Select Menu */}
            <select
              id="shiftType"
              name="shiftType"
              //   value={patient.shiftType}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.shiftType ? "border-red-500" : "border-gray-300"
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
            Shift Name:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          {/* Select Menu */}
          <select
            id="shiftName"
            name="shiftName"
            //   value={patient.shiftName}
            //   onChange={handleInputChange}
            required
            //   className={`block w-full h-8 border ${
            //     errors.shiftName ? "border-red-500" : "border-gray-300"
            //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          >
            <option value=""></option>
          </select>
          {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
        </Grid>

        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <Box>
            <p className="font-semibold text-xs mb-2">
              Shift Time: <span className="text-xs text-gray-500">08:30 AM - 05:30 PM</span>
            </p>
          </Box>
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
              <p className="flex flex-row text-xs items-center">
                Start Date:<span className="text-red-600 text-base mx-2">*</span>
              </p>
              <DatePicker
                renderInput={(params) => (
                  <TextField name="startDate" required {...params} fullWidth variant="outlined" />
                )}
              />
            </Box>
          </Grid>
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* End Date */}
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
                End Date:<span className="text-red-600 text-base mx-2">*</span>
              </p>
              <DatePicker
                renderInput={(params) => (
                  <TextField name="endDateTime" required {...params} fullWidth variant="outlined" />
                )}
              />
            </Box>
          </Grid>
        </LocalizationProvider>

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
              SHOW
            </button>
          </MDButton>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 1 }}>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Employess</p>
        </Typography>
      </Box>

      <Grid sx={{ marginTop: 1 }} container spacing={2}>
        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <p className="flex text-xs items-center">
            Employee:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          {/* Select Menu */}
          <select
            id="employee"
            name="employee"
            //   value={patient.employee}
            //   onChange={handleInputChange}
            required
            //   className={`block w-full h-8 border ${
            //     errors.employee ? "border-red-500" : "border-gray-300"
            //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          >
            <option value=""></option>
          </select>
          {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
        </Grid>

        <Grid item xs={12}>
          <DataTable
            table={{ columns: employeeColumns, rows: employeeRows }}
            showTotalEntries={false}
            isSorted={true}
            noEndBorder
            entriesPerPage={false}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ManageEmployeeDutyRoster;
