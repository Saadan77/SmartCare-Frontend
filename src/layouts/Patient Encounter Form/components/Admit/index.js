import { Box, Grid, Icon, TextField, Typography } from "@mui/material";
import MDButton from "components/MDButton";
import DataTable from "examples/Tables/DataTable";
import data from "./data";

const Admit = () => {
  const { columns, rows } = data();
  return (
    <div>
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
            <p htmlFor="ward" className="flex flex-row text-xs items-center">
              Ward:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="ward"
                name="ward"
                //   value={patient.ward}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.ward ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="Female Medical Ward">Female Medical Ward</option>
                <option value="Male Medical Ward">Male Medical Ward</option>
              </select>
              {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
            </div>
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
            <p htmlFor="room" className="text-xs mb-2">
              Room:
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="room"
                name="room"
                //   value={patient.room}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.room ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="Room 01">Room 01</option>
                <option value="Room 02">Room 02</option>
              </select>
              {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
            </div>
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
            <p htmlFor="bed" className="text-xs mb-2">
              Bed:
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="bed"
                name="bed"
                //   value={patient.bed}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.bed ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="Bed 01">Bed 01</option>
                <option value="Bed 02">Bed 02</option>
              </select>
              {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
            </div>
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
            <p htmlFor="speciality" className="text-xs mb-2">
              Speciality:
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="speciality"
                name="speciality"
                //   value={patient.speciality}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.speciality ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="Medical">Medical</option>
              </select>
              {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
            </div>
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
            <p htmlFor="recommededDuration" className="text-xs mb-2">
              Recommeded Duration:
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <TextField
                variant="outlined"
                name="recommended"
                fullWidth
                // value={emergencyCase.recommended}
                // onChange={handleInputChange}
                // error={!!errors.recommended}
                // helperText={errors.recommended}
              />
              <select
                id="recommededDuration"
                name="recommededDuration"
                //   value={patient.recommededDuration}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.recommededDuration ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`ml-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="Days">Days</option>
                <option value="Weeks">Weeks</option>
              </select>
              {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
            </div>
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
            <p htmlFor="patientCondition" className="text-xs mb-2">
              Patient Condition:
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="patientCondition"
                name="patientCondition"
                //   value={patient.patientCondition}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.patientCondition ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="Normal">Normal</option>
              </select>
              {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
            </div>
          </div>
        </Grid>

        <Grid item className="flex items-center">
          <Icon>chevron_right</Icon>
          <p className="text-base text-sky-600">Show favorites</p>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 1 }}>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Add Physician Order</p>
        </Typography>

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

        <Box>
          <Typography style={{ fontWeight: "bold" }} gutterBottom>
            <p className="text-base text-[#42424a] font-semibold mr-2">
              Current Admission Physicians Order
            </p>
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
      </Box>
    </div>
  );
};

export default Admit;
