import React, { useState } from "react";

import { Box, Grid, TextField, Typography, Checkbox, FormControlLabel } from "@mui/material";
import MDButton from "components/MDButton";
import DataTable from "examples/Tables/DataTable";
import data from "./data";
import procedureData from "./data/Procedure";
import preOpData from "./data/Pre Op Data";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const OperationTheater = () => {
  const { columns, rows } = data();
  const { columns: procedureColumns, rows: procedureRows } = procedureData();
  const { columns: preOpColumns, rows: preOpRows } = preOpData();

  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

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

      <Box sx={{ marginTop: 1 }}>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Recomendation Details</p>
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: 1 }} className="flex items-end">
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
            <p className="text-xs mb-2">Speciality:</p>

            <TextField
              variant="outlined"
              name="speciality"
              fullWidth
              // value={emergencyCase.speciality}
              // onChange={handleInputChange}
              // error={!!errors.speciality}
              // helperText={errors.speciality}
            />
          </div>
        </Grid>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* Operation Date */}
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
                Operation Date:<span className="text-red-600 text-base mx-2">*</span>
              </p>
              <DatePicker
                onChange={(newDate) => handleDateChange(newDate)}
                renderInput={(params) => (
                  <TextField
                    name="opDate"
                    required
                    // value={patient.opDate}
                    // onChange={handleInputChange}
                    // {...params}
                    // fullWidth
                    // variant="outlined"
                    // error={!!errors.opDate}
                    // helperText={errors.opDate}
                  />
                )}
              />
              {/* {errors.opDate && <p className="text-red-500 text-xs mt-1">{errors.opDate}</p>} */}
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
            <p className="text-xs text-semibold mb-2">Consultant:</p>
            <p className="text-xs">DR. JOHN SMITH</p>
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
            <p className="flex items-center text-xs text-semibold mb-2">Diagnosis:</p>
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

            <p className="flex flex-row text-xs items-center">
              OT Room:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="otRoom"
                name="otRoom"
                //   value={patient.otRoom}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.otRoom ? "border-red-500" : "border-gray-300"
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
            <p htmlFor="bloodProduct" className="text-xs mb-2">
              Blood Product:
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="bloodProduct"
                name="bloodProduct"
                //   value={patient.bloodProduct}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.bloodProduct ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value=""></option>
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

            <p className="flex flex-row text-xs items-center">
              Anesthesia Type:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="anesthesiaType"
                name="anesthesiaType"
                //   value={patient.anesthesiaType}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.anesthesiaType ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                {" "}
                <option value=""></option>
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

            <p className="flex flex-row text-xs items-center">
              Anesthesist:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="anesthesist"
                name="anesthesist"
                //   value={patient.anesthesist}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.anesthesist ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="DR. INtERACTIVE GROUP">DR. INtERACTIVE GROUP</option>
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
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleCheckboxChange} color="primary" />}
            label="Blood Required"
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
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleCheckboxChange} color="primary" />}
            label="Pre Assessment"
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
            <p htmlFor="quantityUnit" className="text-xs mb-2">
              Quantity Unit:
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <TextField
                variant="outlined"
                name="quantityUnit"
                fullWidth
                // value={emergencyCase.quantityUnit}
                // onChange={handleInputChange}
                // error={!!errors.quantityUnit}
                // helperText={errors.quantityUnit}
              />
              <p className="text-xs ml-2">Unit</p>
              {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
            </div>
          </div>
        </Grid>

        <Grid item xs={8} sm={6}>
          <div>
            <p className="flex items-center text-xs">
              Special Instructions:<span className="text-red-600 text-base mx-2">*</span>
            </p>
            <TextField
              variant="outlined"
              name="specialInstructions"
              fullWidth
              // value={emergencyCase.specialInstructions}
              // onChange={handleInputChange}
              // error={!!errors.specialInstructions}
              // helperText={errors.specialInstructions}
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
              Done
            </button>
          </MDButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default OperationTheater;
