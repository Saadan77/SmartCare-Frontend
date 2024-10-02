import React, { useState } from "react";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { Container, Grid, Paper } from "@mui/material";

import MDButton from "components/MDButton";

import ItemExpirationReport from "./components/Item Expiration Report";
import ItemStockReport from "./components/Item Stock Report";
import AdmittedPatientReport from "./components/Admitted Patient Report";
import DischargePatientReport from "./components/Discharge Patient Report";
import DailyAdmissionAndDischargeReport from "./components/Daily Admission and Discharge Report";

function Report() {
  const [activeTab, setActiveTab] = useState("itemExpirationReport");

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
                      xs={2}
                      onClick={() => handleActiveTab("itemExpirationReport")}
                      className={`cursor-pointer ${
                        activeTab === "itemExpirationReport" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a
                          href="#itemExpirationReport"
                          className={`font-semibold text-xs relative`}
                        >
                          Item Expiration Report
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "itemExpirationReport" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={2}
                      onClick={() => handleActiveTab("itemStockReport")}
                      className={`cursor-pointer ${
                        activeTab === "itemStockReport" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#itemStockReport" className={`font-semibold text-xs relative`}>
                          Item Stock Report
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "itemStockReport" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={3}
                      onClick={() => handleActiveTab("dailyAdmissionAndDischargeReport")}
                      className={`cursor-pointer ${
                        activeTab === "dailyAdmissionAndDischargeReport" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a
                          href="#dailyAdmissionAndDischargeReport"
                          className={`font-semibold text-xs relative`}
                        >
                          Daily Admission and Discharge Report
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "dailyAdmissionAndDischargeReport"
                              ? "scale-x-100"
                              : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={3}
                      onClick={() => handleActiveTab("dischargePatientReport")}
                      className={`cursor-pointer ${
                        activeTab === "dischargePatientReport" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a
                          href="#dischargePatientReport"
                          className={`font-semibold text-xs relative`}
                        >
                          Discharge Patient Report
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "dischargePatientReport" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={2}
                      onClick={() => handleActiveTab("admittedPatientReport")}
                      className={`cursor-pointer ${
                        activeTab === "admittedPatientReport" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a
                          href="#admittedPatientReport"
                          className={`font-semibold text-xs relative`}
                        >
                          Admitted Patient Report
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "admittedPatientReport" ? "scale-x-100" : "scale-x-0"
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
              {activeTab === "itemExpirationReport" && (
                <>
                  <ItemExpirationReport />
                </>
              )}

              {activeTab === "itemStockReport" && (
                <>
                  <ItemStockReport />
                </>
              )}

              {activeTab === "dailyAdmissionAndDischargeReport" && (
                <>
                  <DailyAdmissionAndDischargeReport />
                </>
              )}

              {activeTab === "dischargePatientReport" && (
                <>
                  <DischargePatientReport />
                </>
              )}

              {activeTab === "admittedPatientReport" && (
                <>
                  <AdmittedPatientReport />
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

export default Report;
