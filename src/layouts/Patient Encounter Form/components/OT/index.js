import { Box, Grid, TextField, Typography } from "@mui/material";
import MDButton from "components/MDButton";
import DataTable from "examples/Tables/DataTable";
import data from "./data";
import procedureData from "./data/Procedure";
import preOpData from "./data/Pre Op Data";

const OperationTheater = () => {
  const { columns, rows } = data();
  const { columns: procedureColumns, rows: procedureRows } = procedureData();
  const { columns: preOpColumns, rows: preOpRows } = preOpData();
  return (
    <div>
      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Surgery Status</p>
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

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Add Procedure</p>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Add Pre-Op Orders</p>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item sm={6} className="flex items-end">
          <Grid
            item
            sm={4}
            sx={{
              paddingTop: "5px !important",
            }}
          >
            <div>
              {/* Label */}
              <p htmlFor="subGroup" className="flex flex-row text-xs items-center">
                Sub Group:<span className="text-red-600 text-base mx-2">*</span>
              </p>

              {/* Select Menu */}
              <div className="flex items-center">
                <select
                  id="subGroup"
                  name="subGroup"
                  //   value={patient.subGroup}
                  //   onChange={handleInputChange}
                  required
                  //   className={`block w-full h-8 border ${
                  //     errors.subGroup ? "border-red-500" : "border-gray-300"
                  //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                >
                  <option value=""></option>
                </select>
              </div>
            </div>
          </Grid>

          <Grid
            item
            sm={4}
            sx={{
              paddingTop: "5px !important",
            }}
          >
            <div>
              {/* Label */}
              <p htmlFor="procedure" className="flex flex-row text-xs items-center">
                Procedure:<span className="text-red-600 text-base mx-2">*</span>
              </p>

              {/* Select Menu */}
              <div className="flex items-center">
                <select
                  id="procedure"
                  name="procedure"
                  //   value={patient.procedure}
                  //   onChange={handleInputChange}
                  required
                  //   className={`block w-full h-8 border ${
                  //     errors.procedure ? "border-red-500" : "border-gray-300"
                  //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                >
                  <option value=""></option>
                </select>
              </div>
            </div>
          </Grid>

          <Grid item sm={4}>
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

        <Grid item sm={6} className="flex items-end">
          <Grid
            item
            sm={4}
            sx={{
              paddingTop: "5px !important",
            }}
          >
            <div>
              {/* Label */}
              <p htmlFor="preOpOrders" className="flex flex-row text-xs items-center">
                Pre-Op Orders:<span className="text-red-600 text-base mx-2">*</span>
              </p>

              <TextField
                variant="outlined"
                name="preOpOrders"
                fullWidth
                // value={emergencyCase.preOpOrders}
                // onChange={handleInputChange}
                // error={!!errors.preOpOrders}
                // helperText={errors.preOpOrders}
              />
            </div>
          </Grid>

          <Grid item sm={2} className="pl-2">
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
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        <Grid item sm={6}>
          <DataTable
            table={{ columns: procedureColumns, rows: procedureRows }}
            showTotalEntries={false}
            isSorted={true}
            noEndBorder
            entriesPerPage={false}
          />
        </Grid>
        <Grid item xs={6}>
          <DataTable
            table={{ columns: preOpColumns, rows: preOpRows }}
            showTotalEntries={false}
            isSorted={true}
            noEndBorder
            entriesPerPage={false}
          />
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 2 }}>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Add Physician Order</p>
        </Typography>
      </Box>

      <Grid container spacing={2} className="flex items-end">
        <Grid item xs={8} sm={6}>
          <div>
            <p className="flex items-center text-xs">
              Physicians Order:<span className="text-red-600 text-base mx-2">*</span>
            </p>
            <TextField
              variant="outlined"
              name="pyhsiciansOrder"
              fullWidth
              // value={emergencyCase.pyhsiciansOrder}
              // onChange={handleInputChange}
              // error={!!errors.pyhsiciansOrder}
              // helperText={errors.pyhsiciansOrder}
            />
          </div>
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
              Add
            </button>
          </MDButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default OperationTheater;
