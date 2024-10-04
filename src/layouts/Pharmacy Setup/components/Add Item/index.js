import {
  Typography,
  Box,
  Grid,
  TextField,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import data from "./data";
import dosageTypeData from "./components/Dosage Type/data";
import DataTable from "examples/Tables/DataTable";

import MDButton from "components/MDButton";

const AddItem = () => {
  const { columns, rows } = data();
  const { columns: dosageTypeColumns, rows: dosageTypeRows } = dosageTypeData();

  return (
    <div>
      <Box>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Add Item</p>
        </Typography>
      </Box>

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
            <p htmlFor="itemCategory" className="flex flex-row text-xs items-center">
              Item Category:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="itemCategory"
                name="itemCategory"
                //   value={patient.itemCategory}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.itemCategory ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="Medicines">Medicines</option>
              </select>
              {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
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
          <div>
            {/* Label */}
            <p htmlFor="itemType" className="flex flex-row text-xs items-center">
              Item Type:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="itemType"
                name="itemType"
                //   value={patient.itemType}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.itemType ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="Consumable">Consumable</option>
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
            <p htmlFor="itemName" className="flex flex-row text-xs items-center">
              Item Name:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            <TextField variant="outlined" name="itemName" />
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
            <p htmlFor="generic" className="flex flex-row text-xs items-center">
              Generic:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                name="generic"
                //   value={patient.generic}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.generic ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="Medicines">Medicines</option>
              </select>
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
          <div>
            {/* Label */}
            <p htmlFor="abbreviation" className="flex flex-row text-xs items-center">
              Abbreviation:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            <TextField variant="outlined" fullWidth name="abbreviation" />
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
            <p htmlFor="manufacturer" className="flex flex-row text-xs items-center">
              Manufacturer:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="manufacturer"
                name="manufacturer"
                //   value={patient.manufacturer}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.manufacturer ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="PPL Manufacturer">PPL Manufacturer</option>
              </select>
              {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
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
          <div>
            {/* Label */}
            <p htmlFor="potency" className="text-xs mb-2">
              Potency:
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <TextField variant="outlined" name="potency" />
              <select
                id="potency"
                name="potency"
                //   value={patient.potency}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.potency ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`ml-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value=""></option>
              </select>
              {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
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
          <div>
            {/* Label */}
            <p className="text-xs mb-2">Weight / Volume:</p>

            {/* Select Menu */}
            <div className="flex items-center">
              <TextField variant="outlined" name="weight" />
              <select
                id="volume"
                name="volume"
                //   value={patient.volume}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.volume ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`ml-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value=""></option>
              </select>
              {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
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
          <div>
            {/* Label */}
            <p htmlFor="accountingUnit" className="flex flex-row text-xs items-center">
              Accounting Unt:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            <TextField variant="outlined" fullWidth name="accountingUnit" />
          </div>
        </Grid>

        <Grid
          item
          xs={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <p className="flex text-xs items-center mr-2">
            Attributes:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="controlDurgs"
                control={<Checkbox />}
                label="Control Drugs"
                labelPlacement="end"
              />
              <FormControlLabel
                value="expiryItem"
                control={<Checkbox />}
                label="Expiry Item"
                labelPlacement="end"
              />
            </FormGroup>
          </FormControl>
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
            <p htmlFor="itemNature" className="flex flex-row text-xs items-center">
              Item Nature:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <div className="flex items-center">
              <select
                id="itemNature"
                name="itemNature"
                //   value={patient.itemNature}
                //   onChange={handleInputChange}
                required
                //   className={`block w-full h-8 border ${
                //     errors.itemNature ? "border-red-500" : "border-gray-300"
                //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="NIF">NIF</option>
              </select>
              {/* {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>} */}
            </div>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <p className="flex text-xs items-center mr-2">
            Dosage Type:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          <DataTable
            table={{ columns: dosageTypeColumns, rows: dosageTypeRows }}
            showTotalEntries={true}
            isSorted={true}
            noEndBorder
            entriesPerPage={false}
          />
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex justify-end">
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
              SAVE
            </button>
          </MDButton>
        </Grid>

        <Grid item sx={{ paddingLeft: "1px !important" }}>
          <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
            <span className="text-xs">Cancel</span>
          </MDButton>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 2 }}>
        <Typography style={{ fontWeight: "bold" }} gutterBottom>
          <p className="text-base text-[#42424a] font-semibold mr-2">Items</p>
        </Typography>
      </Box>

      <Grid container spacing={2}>
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

export default AddItem;
