import React, { useState } from "react";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { Container, Grid, Paper } from "@mui/material";

import ManageShiftType from "./Manage Shift Type";
import MDButton from "components/MDButton";
import ManageOrganizationUnitShift from "./Manage Organization Unit Shift";
import ManageEmployeeDutyRoster from "./Manage Employee Duty Roster";

function DutyRoster() {
  const [activeTab, setActiveTab] = useState("manageShiftType");

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
          <section id="nav">
            <nav className="w-full mb-3">
              <div>
                <div className="flex items-center">
                  <Grid container sx={{ marginTop: 2 }} className="text-center">
                    {/* Navigation Links */}
                    <Grid
                      item
                      xs={4}
                      onClick={() => handleActiveTab("manageShiftType")}
                      className={`cursor-pointer ${
                        activeTab === "manageShiftType" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#manageShiftType" className={`font-semibold text-xs relative`}>
                          Manage Shift Type
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "manageShiftType" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={4}
                      onClick={() => handleActiveTab("manageOrganizationUnitShift")}
                      className={`cursor-pointer ${
                        activeTab === "manageOrganizationUnitShift" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a
                          href="#manageOrganizationUnitShift"
                          className={`font-semibold text-xs relative`}
                        >
                          Manage Organization Unit Shift
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "manageOrganizationUnitShift"
                              ? "scale-x-100"
                              : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={4}
                      onClick={() => handleActiveTab("manageEmployeeDutyRoster")}
                      className={`cursor-pointer ${
                        activeTab === "manageEmployeeDutyRoster" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a
                          href="#manageEmployeeDutyRoster"
                          className={`font-semibold text-xs relative`}
                        >
                          Manage Employee Duty Roster
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "manageEmployeeDutyRoster" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </nav>
          </section>

          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={12}>
              {activeTab === "manageShiftType" && (
                <>
                  <ManageShiftType />
                </>
              )}

              {activeTab === "manageOrganizationUnitShift" && (
                <>
                  <ManageOrganizationUnitShift />
                </>
              )}

              {activeTab === "manageEmployeeDutyRoster" && (
                <>
                  <ManageEmployeeDutyRoster />
                </>
              )}
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
        </Paper>
      </Container>
    </DashboardLayout>
  );
}

export default DutyRoster;
