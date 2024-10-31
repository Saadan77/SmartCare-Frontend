/* eslint-disable prettier/prettier */
/* prettier-ignore-end-of-line */
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import data from "./data.js/index.js";
import organizationData from "./organizationData/index.js";

import { TextField, Container, Typography, Grid, Paper, Box } from "@mui/material";

import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";

export default function ManageOrganization() {
  const { columns, rows } = data();
  const { OColumns, ORows } = organizationData();
  return (
    <div>
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
            <button className="bg-green-600 text-sm font-bold text-white px-2 py-3 rounded-lg">
              View Hierarchy
            </button>
          </Box>

          <div className="w-full bg-blue-900 text-white px-2 py-1 mb-4">
            <h4>Organization Unit</h4>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
            {[
              { id: "unit", label: "Organization Unit", required: true },
              { id: "type", label: "Organization Type", required: true },
              { id: "nature", label: "Organization Nature", required: true },
              { id: "speciality", label: "Speciality", required: false },
              { id: "region", label: "Region", required: false },
              { id: "category", label: "Category", required: false },
              { id: "discount", label: "Discount %", required: false },
            ].map(({ id, label, required }) => (
              <div className="flex gap-2 items-center" key={id}>
                <label htmlFor={id} className="text-xs block font-semibold w-1/2 text-right">
                  {label}: {required && <span className="text-red-600">*</span>}
                </label>
                <select
                  id={id}
                  name={id}
                  className="border h-8 w-44 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">salman</option>
                </select>
              </div>
            ))}
          </div>

          <div className="w-full bg-blue-900 text-white px-2 py-1 mt-4 mb-4">
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
              <div className="flex items-center gap-8">
                <p>Root Node:</p>
                <p>IAC</p>
              </div>
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
                    <option value="">salman</option>
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
                    <option value="">salman</option>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Organization Unit Detail */}
            <div className="space-y-4 md:col-span-1">
              <div className="bg-blue-900 text-white px-4 py-2">
                <h4 className="text-lg font-semibold">Organization Unit Detail</h4>
              </div>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6} className="flex gap-4 items-center">
                  <label htmlFor="display name" className="text-sm w-1/3 text-right">
                    Display Name: <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="display name"
                    name="display name"
                    readOnly
                    placeholder="Gynae OPD"
                    className="bg-gray-600 rounded-lg px-2 py-1 placeholder:text-lg placeholder:text-white text-white w-2/3"
                  />
                </Grid>

                <Grid item xs={12} md={6} className="flex gap-4 items-center">
                  <label htmlFor="phone one" className="text-sm w-1/3 text-right">
                    Phone 1: <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone one"
                    name="phone one"
                    className="bg-gray-600 rounded-lg px-2 py-1 placeholder:text-lg placeholder:text-white text-white w-2/3"
                  />
                </Grid>

                <Grid item xs={12} md={6} className="flex gap-4 items-center">
                  <label htmlFor="phone two" className="text-sm w-1/3 text-right">
                    Phone 2:
                  </label>
                  <input
                    type="text"
                    id="phone two"
                    name="phone two"
                    className="bg-gray-600 rounded-lg px-2 py-1 placeholder:text-lg placeholder:text-white text-white w-2/3"
                  />
                </Grid>

                <Grid item xs={12} md={6} className="flex gap-4 items-center">
                  <label htmlFor="fax" className="text-sm w-1/3 text-right">
                    Fax:
                  </label>
                  <input
                    type="text"
                    id="fax"
                    name="fax"
                    className="bg-gray-600 rounded-lg px-2 py-1 placeholder:text-lg placeholder:text-white text-white w-2/3"
                  />
                </Grid>

                <Grid item xs={12} md={6} className="flex gap-4 items-center">
                  <label htmlFor="email" className="text-sm w-1/3 text-right">
                    Email:
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="bg-gray-600 rounded-lg px-2 py-1 placeholder:text-lg placeholder:text-white text-white w-2/3"
                  />
                </Grid>

                {/* Updated Grid Item for Traveling Time and Hours */}
                <Grid item xs={12} md={6} className="flex items-start">
                  <Box className="flex w-full items-start justify-between">
                    <div className="flex items-center w-1/2">
                      <label htmlFor="days" className="text-sm w-1/2 text-right mr-2">
                        Traveling Time:
                      </label>
                      <input
                        type="text"
                        id="days"
                        name="days"
                        className="bg-gray-600 rounded-lg px-2 py-1 placeholder:text-lg placeholder:text-white text-white w-full"
                      />
                      <p className="text-sm ml-2">Days</p>
                    </div>
                    <div className="flex items-center w-1/2">
                      <label htmlFor="hour" className="text-sm w-1/2 text-right mr-2">
                        Hours:
                      </label>
                      <select
                        id="hour"
                        name="hour"
                        className="h-8 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option value="">0</option>
                        {/* Additional options can be added here */}
                      </select>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </div>

            {/* Address Detail */}
            <div className="space-y-4 md:col-span-1">
              <div className="bg-blue-900 text-white px-4 py-2">
                <h4 className="text-lg font-semibold">Address Detail</h4>
              </div>

              <Grid container spacing={2}>
                {/* First Row: Country and Province */}
                <Grid item xs={12} md={6} className="flex gap-4 items-center">
                  <label htmlFor="country" className="text-sm w-1/3 text-right">
                    Country: <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-full"
                  >
                    <option value="">Select Country</option>
                    {/* Add options for countries here */}
                  </select>
                </Grid>

                <Grid item xs={12} md={6} className="flex gap-4 items-center">
                  <label htmlFor="province" className="text-sm w-1/3 text-right">
                    Province: <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="province"
                    name="province"
                    className="h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-full"
                  >
                    <option value="">Select Province</option>
                    {/* Add options for provinces here */}
                  </select>
                </Grid>

                {/* Second Row: District and City */}
                <Grid item xs={12} md={6} className="flex gap-4 items-center">
                  <label htmlFor="district" className="text-sm w-1/3 text-right">
                    District: <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="district"
                    name="district"
                    className="h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-full"
                  >
                    <option value="">Select District</option>
                    {/* Add options for districts here */}
                  </select>
                </Grid>

                <Grid item xs={12} md={6} className="flex gap-4 items-center">
                  <label htmlFor="city" className="text-sm w-1/3 text-right">
                    City: <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="city"
                    name="city"
                    className="h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-full"
                  >
                    <option value="">Select City</option>
                    {/* Add options for cities here */}
                  </select>
                </Grid>

                {/* Address Field */}
                <Grid item xs={12} className="flex gap-4 items-center">
                  <label htmlFor="address" className="text-sm w-1/3 text-right">
                    Address: <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="bg-gray-600 rounded-lg px-2 py-1 placeholder:text-lg placeholder:text-white text-white w-full"
                    placeholder="Enter Address"
                  />
                </Grid>
              </Grid>
            </div>
          </div>

          <Grid container sx={{ marginTop: 10, }} className="flex w-full justify-center bg-gray-800 items-center py-4">
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
            <Grid item sx={{ paddingLeft: "1px !important"}}>
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
