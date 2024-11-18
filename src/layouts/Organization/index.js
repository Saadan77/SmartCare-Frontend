/* eslint-disable prettier/prettier */
/* prettier-ignore-end-of-line */
import React, { useState } from "react";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { Container, Grid, Paper } from "@mui/material";

// import AddHospital from "./components/Add Hospital";
// import AddDepartment from "./components/Add Department";
// import AddSubDepartment from "./components/Add Sub Department";
// import AddWard from "./components/Add Ward";
// import AddRoom from "./components/Add Room";
// import AddBed from "./components/Add Bed";
import ManageOrganization from "./components/Manage Organization";
import ManageStandardOrganization from "./components/Manage Standard Organization";
import UpdateOrganization from "./components/Update Organization";

function Organization() {
  const [activeTab, setActiveTab] = useState("manageStandardOrganization");

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Container
        sx={{
          maxWidth: "100% !important",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
          marginLeft: "0 !important",
          marginRight: "0 !important",
        }}
      >
        <Paper
          elevation={3}
          sx={{ padding: 2, marginTop: 3, position: "relative" }}
          className="h-full"
        >
          <nav className="w-full mb-3">
            <Grid container sx={{ marginTop: 2 }} className="text-center">
              {/* Navigation Links */}
              {[
                // "addHospital",
                // "addDepartment",
                // "addSubDepartment",
                // "addWard",
                // "addRoom",
                // "addBed",
                "manageStandardOrganization",
                "manageOrganization",
                "updateOrganization",
              ].map((tab, index) => (
                <Grid
                  item
                  xs={4}
                  key={index}
                  onClick={() => handleActiveTab(tab)}
                  className={`cursor-pointer ${activeTab === tab ? "text-[#1694c4]" : ""}`}
                >
                  <div className="border border-gray-300 group h-10 relative">
                    <button className={`font-semibold text-xs relative`}>
                      {
                        tab
                          .replace(/([A-Z])/g, " $1") // Insert space before capital letters
                          .trim() // Remove leading/trailing spaces
                          .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
                      }
                    </button>
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                        activeTab === tab ? "scale-x-100" : "scale-x-0"
                      } transition-transform duration-300`}
                    ></span>
                  </div>
                </Grid>
              ))}
            </Grid>
          </nav>
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={12}>
              {activeTab === "manageOrganization" && <ManageOrganization />}
              {activeTab === "manageStandardOrganization" && <ManageStandardOrganization />}
              {activeTab === "updateOrganization" && <UpdateOrganization />}
              {/* {activeTab === "addHospital" && <AddHospital />}
              {activeTab === "addDepartment" && <AddDepartment />}
              {activeTab === "addSubDepartment" && <AddSubDepartment />}
              {activeTab === "addWard" && <AddWard />}
              {activeTab === "addRoom" && <AddRoom />}
              {activeTab === "addBed" && <AddBed />} */}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </DashboardLayout>
  );
}

export default Organization;
