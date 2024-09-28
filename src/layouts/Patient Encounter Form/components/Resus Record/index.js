import { Box, Grid, Icon, TextField, Typography } from "@mui/material";
import MDButton from "components/MDButton";
import DataTable from "examples/Tables/DataTable";
import data from "./data";

const ResusRecord = () => {
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
            <p htmlFor="oxygen" className="flex flex-row text-xs items-center">
              Oxygen:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="oxygen"
                name="oxygen"
                //   value={patient.oxygen}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.oxygen ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="Intubation">Intubation</option>
              </select>
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
            <p htmlFor="noOfInjections" className="text-xs mb-2">
              No of injections(1:10,000):
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <TextField
                variant="outlined"
                name="noOfInjections"
                fullWidth
                // value={emergencyCase.noOfInjections}
                // onChange={handleInputChange}
                // error={!!errors.noOfInjections}
                // helperText={errors.noOfInjections}
              />
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
            <p htmlFor="cpdDuration" className="text-xs mb-2">
              CPR Duration:
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <TextField
                variant="outlined"
                name="cprDuration"
                fullWidth
                // value={emergencyCase.cprDuration}
                // onChange={handleInputChange}
                // error={!!errors.cprDuration}
                // helperText={errors.cprDuration}
              />
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
            <p htmlFor="dose" className="text-xs mb-2">
              Dose(mg):
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <TextField
                variant="outlined"
                name="dose"
                fullWidth
                // value={emergencyCase.dose}
                // onChange={handleInputChange}
                // error={!!errors.dose}
                // helperText={errors.dose}
              />
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
            <p htmlFor="cpdDuration" className="text-xs mb-2">
              No of CPR Cycles:
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <TextField
                variant="outlined"
                name="cprCycles"
                fullWidth
                // value={emergencyCase.cprCycles}
                // onChange={handleInputChange}
                // error={!!errors.cprCycles}
                // helperText={errors.cprCycles}
              />
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
            <p htmlFor="rosc" className="text-xs mb-2">
              ROSC:
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="rosc"
                name="rosc"
                //   value={patient.rosc}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.rosc ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="rosc 01">rosc 01</option>
              </select>
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
            <p htmlFor="roscAchievedIn" className="text-xs mb-2">
              ROSC Achieved In:
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="roscAchievedIn"
                name="roscAchievedIn"
                //   value={patient.roscAchievedIn}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.roscAchievedIn ? "border-red-500" : "border-gray-300"
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
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <div>
            {/* Label */}
            <p htmlFor="cardioVersion" className="text-xs mb-2">
              Cardio Version:
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="cardioVersion"
                name="cardioVersion"
                //   value={patient.cardioVersion}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.cardioVersion ? "border-red-500" : "border-gray-300"
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
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <div>
            {/* Label */}
            <p htmlFor="defribillation" className="text-xs mb-2">
              Patient Condition:
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="defribillation"
                name="defribillation"
                //   value={patient.defribillation}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.defribillation ? "border-red-500" : "border-gray-300"
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
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <div>
            {/* Label */}
            <p htmlFor="nonInvasiveVentillation" className="text-xs mb-2">
              Non Invasive Ventillation:
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="nonInvasiveVentillation"
                name="nonInvasiveVentillation"
                //   value={patient.nonInvasiveVentillation}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.nonInvasiveVentillation ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value=""></option>
              </select>

              <p htmlFor="nonInvasiveVentillationStartTime" className="text-xs mb-2">
                Start Time:
              </p>

              <TextField
                variant="outlined"
                name="nonInvasiveVentillationStartTime"
                fullWidth
                // value={emergencyCase.nonInvasiveVentillationStartTime}
                // onChange={handleInputChange}
                // error={!!errors.nonInvasiveVentillationStartTime}
                // helperText={errors.nonInvasiveVentillationStartTime}
              />
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
            <p htmlFor="instropes" className="text-xs mb-2">
              Instropes:
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="instropes"
                name="instropes"
                //   value={patient.instropes}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.instropes ? "border-red-500" : "border-gray-300"
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
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <div>
            {/* Label */}
            <p htmlFor="dose" className="text-xs mb-2">
              Dose in(kg):
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="dose"
                name="dose"
                //   value={patient.dose}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.dose ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value=""></option>
              </select>

              <p htmlFor="doseStartTime" className="text-xs mb-2">
                Start Time:
              </p>

              <TextField
                variant="outlined"
                name="doseStartTime"
                fullWidth
                // value={emergencyCase.doseStartTime}
                // onChange={handleInputChange}
                // error={!!errors.doseStartTime}
                // helperText={errors.doseStartTime}
              />
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
            <p htmlFor="comments" className="text-xs mb-2">
              Comments:
            </p>

            {/* Select Menu */}
            <TextField
              variant="outlined"
              name="comments"
              fullWidth
              // value={emergencyCase.comments}
              // onChange={handleInputChange}
              // error={!!errors.comments}
              // helperText={errors.comments}
            />
          </div>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 1 }}>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Resus Record(s)</p>
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

export default ResusRecord;
