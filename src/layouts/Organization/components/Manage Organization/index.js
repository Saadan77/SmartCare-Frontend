import organizationData from "./organizationData/index.js";
import data from "./data.js/index.js";

import { TextField, Typography, Grid, Box } from "@mui/material";

import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";

import React, { useContext, useState, useEffect } from "react";

import { StandardOrganizationsContext } from "context/Organizations/Manage Standard Organization/manageStandardOrganizationContext.js";
import { getOrganizationTypes } from "services/Organizations/Manage Organization/manageOrganizationServices.js";
import { getOrganizationNatures } from "services/Organizations/Manage Organization/manageOrganizationServices.js";
import { getOrganizationRegions } from "services/Organizations/Manage Organization/manageOrganizationServices.js";
import { getOrganizationSpeciality } from "services/Organizations/Manage Organization/manageOrganizationServices.js";
import { getOrganizationCategory } from "services/Organizations/Manage Organization/manageOrganizationServices.js";
import { insertOrganization } from "services/Organizations/Manage Organization/manageOrganizationServices.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ManageOrganization() {
  const { StandardOrganizations } = useContext(StandardOrganizationsContext);

  const [organizationTypes, setOrganizationTypes] = useState([]);
  const [OrganizationNatures, setOrganizationNatures] = useState([]);
  const [Speciality, setSpeciality] = useState([]);
  const [Regions, setRegions] = useState([]);
  // const [Category, setCategory] = useState([]);

  const [organization, setOrganization] = useState({
    organizationUnitID: "",
    organizationTypeID: "",
    organizationNatureID: "",
    regionID: "",
    // categoryID: "",
    specialtyID: "",
    // parentOrganizationID: "",
    // discountPercentage: 0,
    displayName: "",
    phone1: "",
    phone2: "",
    fax: "",
    email: "",
    travelingTimeDays: 0,
    travelingTimeHours: 0,
    country: "",
    province: "",
    district: "",
    city: "",
    // address: "",
    createdBy: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrganization((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the insertOrganization API
      await insertOrganization(organization);

      // Handle the success response, e.g., show a success message
      console.log("Organization successfully added:", organization);

      // Optionally, reset the form after successful submission
      setOrganization({
        organizationUnitID: "",
        organizationTypeID: "",
        organizationNatureID: "",
        regionID: "",
        specialtyID: "",
        displayName: "",
        phone1: "",
        phone2: "",
        fax: "",
        email: "",
        travelingTimeDays: 0,
        travelingTimeHours: 0,
        country: "",
        province: "",
        district: "",
        city: "",
        createdBy: 1,
      });

      toast.success("Organization added successfully");
    } catch (error) {
      console.error("Error inserting organization:", error);
      toast.error("Failed to add organization.");
    }
  };

  useEffect(() => {
    console.log("Organization Units:", StandardOrganizations);
    const fetchOrganizationTypes = async () => {
      try {
        const data = await getOrganizationTypes();
        setOrganizationTypes(data);
        console.log("Organization types: ", data);
      } catch (err) {
        console.log("Error fetching organization types: ", err);
      }
    };

    const fetchOrganizationNature = async () => {
      try {
        const data = await getOrganizationNatures();
        setOrganizationNatures(data);
      } catch (err) {
        console.log("Error fetching Organization Nature: ", err);
      }
    };

    const fetchSpeciality = async () => {
      try {
        const data = await getOrganizationSpeciality();
        setSpeciality(data);
      } catch (err) {
        console.log("Error fetching Organization Speciality: ", err);
      }
    };

    const fetchRegions = async () => {
      try {
        const data = await getOrganizationRegions();
        setRegions(data);
      } catch (err) {
        console.log("Error fetching Organization Regions: ", err);
      }
    };

    // const fetchCategory = async () => {
    //   try {
    //     const data = await getOrganizationCategory();
    //     setCategory(data);
    //   } catch (err) {
    //     console.log("Error fetching Organization Category: ", err);
    //   }
    // };

    fetchOrganizationTypes();
    fetchOrganizationNature();
    fetchSpeciality();
    fetchRegions();
    // fetchCategory();
  }, []);

  const { columns, rows } = data();
  const { OColumns, ORows } = organizationData();

  return (
    <div>
      <ToastContainer />
      <Box className="flex flex-row items-center gap-4 mb-4">
        <label htmlFor="units" className="text-xs block">
          Select Units: <span className="text-red-600">*</span>
        </label>
        <select
          id="units"
          name="units"
          className="block w-[250px] h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value=""></option>
        </select>
        <button className="bg-green-600 text-sm font-bold text-white px-2 py-2 rounded-lg">
          View Hierarchy
        </button>
      </Box>

      <div className="w-full text-white px-2 py-1 mb-4 bg-[#1769aa]">
        <h4>Organization Unit</h4>
      </div>

      <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
            paddingBottom: "5px !important",
          }}
        >
          <div>
            {/* Label */}
            <p className="flex flex-row text-xs items-center">
              Organization Unit:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <select
              name="organizationUnitID"
              value={organization.organizationUnitID}
              onChange={handleInputChange}
              className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select Organization Unit</option>
              {StandardOrganizations.map((StandardOrganization) => (
                <option
                  key={StandardOrganization["StandardOrganizationID"]}
                  value={StandardOrganization["StandardOrganizationID"]}
                >
                  {StandardOrganization["Name"]}
                </option>
              ))}
            </select>
          </div>
        </Grid>

        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
            paddingBottom: "5px !important",
          }}
        >
          <div>
            {/* Label */}
            <p className="flex flex-row text-xs items-center">
              Organization Type:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <select
              name="organizationTypeID"
              value={organization.organizationTypeID}
              onChange={handleInputChange}
              className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select Organization Type</option>
              {organizationTypes.map((organizationType) => (
                <option
                  key={organizationType["SetupLookupParentID"]}
                  value={organizationType["SetupLookupChildID"]}
                >
                  {organizationType["LookupValue"]}
                </option>
              ))}
            </select>
          </div>
        </Grid>

        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
            paddingBottom: "5px !important",
          }}
        >
          <div>
            {/* Label */}
            <p className="flex flex-row text-xs items-center">
              Organization Nature:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <select
              name="organizationNatureID"
              value={organization.organizationNatureID}
              onChange={handleInputChange}
              className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select Organization Nature</option>
              {OrganizationNatures.map((OrganizationNature) => (
                <option
                  key={OrganizationNature["SetupLookupParentID"]}
                  value={OrganizationNature["SetupLookupChildID"]}
                >
                  {OrganizationNature["LookupValue"]}
                </option>
              ))}
            </select>
          </div>
        </Grid>

        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
            paddingBottom: "5px !important",
          }}
        >
          <div>
            {/* Label */}
            <p className="flex flex-row text-xs items-center">
              Speciality:<span className="text-red-600 text-base mx-2">*</span>
            </p>

            {/* Select Menu */}
            <select
              name="specialtyID"
              value={organization.specialtyID}
              onChange={handleInputChange}
              className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select Speciality</option>
              {Speciality.map((Specialities) => (
                <option
                  key={Specialities["SetupLookupParentID"]}
                  value={Specialities["SetupLookupChildID"]}
                >
                  {Specialities["LookupValue"]}
                </option>
              ))}
            </select>
          </div>
        </Grid>

        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
            paddingBottom: "5px !important",
          }}
        >
          <div>
            {/* Label */}
            <p className="text-xs mb-2">Region:</p>

            {/* Select Menu */}
            <select
              name="regionID"
              value={organization.regionID}
              onChange={handleInputChange}
              className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select Region</option>
              {Regions.map((Region) => (
                <option key={Region["SetupLookupParentID"]} value={Region["SetupLookupChildID"]}>
                  {Region["LookupValue"]}
                </option>
              ))}
            </select>
          </div>
        </Grid>

        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
            paddingBottom: "5px !important",
          }}
        >
          <div>
            {/* Label */}
            <p className="text-xs mb-2">Category:</p>

            {/* Select Menu */}
            <select
              name="Category"
              // value={organization.OrganizationUnitID}
              // onChange={handleInputChange}
              className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value=""></option>
            </select>
          </div>
        </Grid>
      </Grid>

      <div className="w-full bg-[#1769aa] text-white px-2 py-1 mt-4 mb-4">
        <h4>Parent Unit</h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10">
        <div className="lg:col-span-1 gap-4">
          <h4 className="text-sm font-semibold">
            Organization Unit: <span className="text-red-600">*</span>
          </h4>
          <DataTable
            table={{ columns: OColumns, rows: ORows }}
            showTotalEntries={true}
            isSorted={true}
            noEndBorder
            entriesPerPage={false}
          />
          <p className="text-sm">
            Total Record (s) found: <span className="text-red-600 font-semibold"> ( 2 ) </span>{" "}
          </p>
        </div>

        <div className="lg:col-span-2 space-y-5 px-10">
          <h4 className="text-sm flex">
            <p className="font-semibold mr-2">Root Node:</p>
            <p>IAC</p>
          </h4>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex items-center gap-4">
              <label htmlFor="parent type" className="text-xs block">
                Organizational Type:
              </label>
              <select
                id="parent type"
                name="parent type"
                className="block w-44 h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value=""></option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <label htmlFor="parent nature" className="text-xs block">
                Organization Nature:
              </label>
              <select
                id="parent nature"
                name="parent nature"
                className="block w-44 h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value=""></option>
              </select>
            </div>
          </div>
          <div>
            <DataTable
              table={{ columns: columns, rows: rows }}
              showTotalEntries={true}
              isSorted={true}
              noEndBorder
              entriesPerPage={false}
            />
          </div>
          <p className="text-sm">
            Total Record (s) found: <span className="text-red-600 font-semibold"> ( 2 ) </span>{" "}
          </p>
        </div>
      </div>

      <p className="mt-32 mb-4 text-sm font-bold">Selected Parent Unit: </p>

      <Grid container spacing={2} alignItems="flex-start">
        {/* Organization Unit Detail Section */}
        <Grid item xs={6}>
          <Box sx={{ backgroundColor: "#1769aa", padding: 1, color: "white", mb: 2 }}>
            <Typography variant="subtitle1" className="text-white">
              Organization Unit Detail
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p className="text-xs mb-2">Display Name:</p>
              <TextField
                variant="outlined"
                fullWidth
                name="displayName"
                value={organization.displayName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <p className="text-xs mb-2">Phone 1:</p>
              <TextField
                variant="outlined"
                fullWidth
                name="phone1"
                value={organization.phone1}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <p className="text-xs mb-2">Phone 2:</p>
              <TextField
                variant="outlined"
                fullWidth
                name="phone2"
                value={organization.phone2}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <p className="text-xs mb-2">Fax:</p>
              <TextField
                variant="outlined"
                fullWidth
                name="fax"
                value={organization.fax}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <p className="text-xs mb-2">Email:</p>
              <TextField
                variant="outlined"
                fullWidth
                name="email"
                value={organization.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <p className="flex text-xs items-center">
                Traveling Time:<span className="text-red-600 text-base mx-2">*</span>
              </p>
              <div className="flex items-center">
                <TextField
                  variant="outlined"
                  fullWidth
                  name="travelingTimeDays"
                  value={organization.travelingTimeDays}
                  onChange={handleInputChange}
                />
                <p className="text-xs mx-2">Day(s)</p>
                {/* Select Menu */}
                <select
                  name="travelingTimeHours"
                  value={organization.travelingTimeHours}
                  onChange={handleInputChange}
                  required
                  //   className={`block w-full h-8 border ${
                  //     errors.Hours ? "border-red-500" : "border-gray-300"
                  //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                >
                  <option value="0">0</option>
                </select>
                <p className="text-xs">Hours(s)</p>
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* Address Details Section */}
        <Grid item xs={6}>
          <Box sx={{ backgroundColor: "#1769aa", padding: 1, color: "white", mb: 2 }}>
            <Typography variant="subtitle1" className="text-white">
              Address Detail
            </Typography>
          </Box>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <p className="flex flex-row text-xs items-center">
                Country:<span className="text-red-600 text-base mx-2">*</span>
              </p>
              {/* Select Menu */}
              <select
                name="country"
                value={organization.country}
                onChange={handleInputChange}
                className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select a country</option>
                <option value="Pakistan">Pakistan</option>
              </select>
            </Grid>
            <Grid item xs={6}>
              <p className="text-xs mb-2">Province:</p>
              <select
                name="province"
                value={organization.province}
                onChange={handleInputChange}
                className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select a Province</option>
                <option value="Pakistan">Pakistan</option>
              </select>
            </Grid>
            <Grid item xs={6}>
              <p className="text-xs mb-2">District:</p>
              <select
                name="district"
                value={organization.district}
                onChange={handleInputChange}
                className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select a District</option>
                <option value="Pakistan">Pakistan</option>
              </select>
            </Grid>
            <Grid item xs={6}>
              <p className="text-xs mb-2">City:</p>
              <select
                name="city"
                value={organization.city}
                onChange={handleInputChange}
                className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select a City</option>
                <option value="Pakistan">Pakistan</option>
              </select>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{ marginTop: 10 }}
        className="flex w-full justify-center bg-gray-800 items-center py-4"
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
            onClick={handleSubmit}
          >
            <button type="submit" className="text-xs">
              SAVE
            </button>
          </MDButton>
        </Grid>
        <Grid item sx={{ paddingLeft: "1px !important" }}>
          <MDButton
            sx={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}
            variant="gradient"
          >
            <span className="text-xs">Save & Associate Appointment</span>
          </MDButton>
        </Grid>
        <Grid item sx={{ paddingLeft: "1px !important" }}>
          <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
            <span className="text-xs">Cancel</span>
          </MDButton>
        </Grid>
      </Grid>
    </div>
  );
}
