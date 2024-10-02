import { Typography, Box, TextField, Grid } from "@mui/material";

import DataTable from "examples/Tables/DataTable";
import data from "./data";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MDButton from "components/MDButton";

const ItemStockReport = () => {
  const { columns, rows } = data();

  return (
    <>
      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Item Stock Report</p>
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
              Select Organization Unit: <span className="text-xs text-gray-500">Pharmacy</span>
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
          {/* Select Menu */}
          <select
            id="consumable"
            name="consumable"
            //   value={patient.consumable}
            //   onChange={handleInputChange}
            required
            //   className={`block w-full h-8 border ${
            //     errors.consumable ? "border-red-500" : "border-gray-300"
            //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          >
            <option value="Consumable">Consumable</option>
          </select>
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
            <p htmlFor="itemType" className="flex flex-row text-xs items-center">
              Item Type:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <select
              id="itemType"
              name="itemType"
              //   value={patient.itemType}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.itemType ? "border-red-500" : "border-gray-300"
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
            <p htmlFor="batchNo" className="flex flex-row text-xs items-center">
              Batch No:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <select
              id="batchNo"
              name="batchNo"
              //   value={patient.batchNo}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.batchNo ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value=""></option>
            </select>
          </div>
        </Grid>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid
            item
            xs={6}
            sm={3}
            sx={{
              paddingTop: "5px !important",
            }}
          >
            <Box>
              <DatePicker
                renderInput={(params) => (
                  <TextField name="" required {...params} fullWidth variant="outlined" />
                )}
              />
            </Box>
          </Grid>
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid item xs={6} sm={3}>
            <Box>
              <DatePicker
                renderInput={(params) => (
                  <TextField name="" required {...params} fullWidth variant="outlined" />
                )}
              />
            </Box>
          </Grid>
        </LocalizationProvider>
      </Grid>

      <Grid className="flex justify-end" container spacing={2} sx={{ marginTop: 1 }}>
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
              Search
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
              Clear
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
              Cancel
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
              Genrate report
            </button>
          </MDButton>
        </Grid>
      </Grid>

      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Search Record</p>
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DataTable
            table={{ columns, rows }}
            showTotalEntries={false}
            isSorted={true}
            noEndBorder
            entriesPerPage={false}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ItemStockReport;
