/* eslint-disable prettier/prettier */
/* prettier-ignore-end-of-line */
import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { TextField, Container, Typography, Grid, Paper, Box } from "@mui/material";
import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";

import data from "./data.js";
import organizationData from "./organizationData/index.js";
import appointments from "./appointments/index.js";

export default function UpdateOrganization() {
  const { columns, rows } = data();
  const { OColumns, ORows } = organizationData();
  const { AColumns, ARows } = appointments();
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
            <MDButton
              variant="gradient"
              style={{
                borderRadius: 0,
                minHeight: 0,
                backgroundColor: "#3DA35D",
                color: "White",
              }}
            >
              <button type="submit" className="text-xs">
                View Hierarchy
              </button>
            </MDButton>
          </Box>

          <Box className="bg-blue-500 text-white px-2 font-semibold mb-4">Organization Unit</Box>

          <div className="grid grid-cols-1 lg:grid-cols-3 items-center w-full gap-10">
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

          <Box className="px-2 font-bold text-sm mt-10">
            Selected Organization Unit:{" "}
            <span className="font-normal">Interactive Group Hospital, IAC, Gynea</span>
          </Box>

          <Box className="flex items-center justify-center gap-4 mt-5">
            <MDButton
              variant="gradient"
              style={{
                borderRadius: 0,
                minHeight: 0,
                backgroundColor: "#3b82f6",
                color: "White",
              }}
            >
              <button type="submit" className="text-xs">
                View Details
              </button>
            </MDButton>
            <MDButton
              variant="gradient"
              style={{
                borderRadius: 0,
                minHeight: 0,
                backgroundColor: "#3b82f6",
                color: "White",
              }}
            >
              <button type="submit" className="text-xs">
                Associate Appointments
              </button>
            </MDButton>
          </Box>

          <Box className="font-semibold text-sm mt-5">Associate Appointment</Box>

          <Box className=" bg-blue-500 text-white px-2 font-semibold mb-4 mt-5">Appointments</Box>

          <Box className="flex items-center gap-2 mb-5">
            <label htmlFor="units" className="text-xs block">
              Appointment Category: <span className="text-red-600">*</span>
            </label>
            <select
              id="units"
              name="units"
              className="block w-44 h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">General Staff</option>
            </select>
          </Box>
          <DataTable
            table={{ columns: AColumns, rows: ARows }}
            showTotalEntries={true}
            isSorted={true}
            noEndBorder
            entriesPerPage={false}
            className="my-5"
          />

          <Box className="bg-slate-950 py-1 flex items-center justify-center">
            <MDButton
              variant="gradient"
              style={{
                borderRadius: 0,
                minHeight: 0,
                backgroundColor: "#334155",
                color: "White",
              }}
            >
              <button type="submit" className="text-xs">
                CANCEL
              </button>
            </MDButton>
          </Box>
          </div>
  );
}
