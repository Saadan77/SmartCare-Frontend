import { Typography, Box, Grid } from "@mui/material";

// import data from "./data";
import DataTable from "examples/Tables/DataTable";
import data from "./data";

const ManageOrganizationUnitShift = () => {
  const { columns, rows } = data();

  return (
    <div>
      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Manage Shift Type</p>
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
    </div>
  );
};

export default ManageOrganizationUnitShift;
