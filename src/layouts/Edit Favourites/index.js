import React, { useState } from "react";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { Container, Grid, Paper } from "@mui/material";

import MDButton from "components/MDButton";

import EditFavoriteDiagnosis from "./components/Diagnosis";
import EditFavoriteInvestigations from "./components/Investigation";
import EditFavoriteProcedures from "./components/Procedures";
import EditFavoriteMedications from "./components/Medications";
import EditFavoriteAdvice from "./components/Advice";
import EditFavoritePreOpOrders from "./components/Pre-Op Order";
import EditFavoritePostOpOrders from "./components/Post-Op Order";

function EditFavourites() {
  const [activeTab, setActiveTab] = useState("Diagnosis");

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
                      onClick={() => handleActiveTab("Diagnosis")}
                      className={`cursor-pointer ${
                        activeTab === "Diagnosis" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#Diagnosis" className={`font-semibold text-xs relative`}>
                          Diagnosis
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "Diagnosis" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={2}
                      onClick={() => handleActiveTab("Investigations")}
                      className={`cursor-pointer ${
                        activeTab === "Investigations" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#Investigations" className={`font-semibold text-xs relative`}>
                          Investigations
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "Investigations" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={2}
                      onClick={() => handleActiveTab("Procedures")}
                      className={`cursor-pointer ${
                        activeTab === "Procedures" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#Procedures" className={`font-semibold text-xs relative`}>
                          Procedures
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "Procedures" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={2}
                      onClick={() => handleActiveTab("Medications")}
                      className={`cursor-pointer ${
                        activeTab === "Medications" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#Medications" className={`font-semibold text-xs relative`}>
                          Medications
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "Medications" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={2}
                      onClick={() => handleActiveTab("Advice")}
                      className={`cursor-pointer ${activeTab === "Advice" ? "text-[#1694c4]" : ""}`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#Advice" className={`font-semibold text-xs relative`}>
                          Advice
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "Advice" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={2}
                      onClick={() => handleActiveTab("PreOpOrder")}
                      className={`cursor-pointer ${
                        activeTab === "PreOpOrder" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#PreOpOrder" className={`font-semibold text-xs relative`}>
                          Pre-Op Order
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "PreOpOrder" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={2}
                      onClick={() => handleActiveTab("PostOpOrder")}
                      className={`cursor-pointer ${
                        activeTab === "PostOpOrder" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#PostOpOrder" className={`font-semibold text-xs relative`}>
                          Post-Op Order
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "PostOpOrder" ? "scale-x-100" : "scale-x-0"
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
              {activeTab === "Diagnosis" && (
                <>
                  <EditFavoriteDiagnosis />
                </>
              )}

              {activeTab === "Investigations" && (
                <>
                  <EditFavoriteInvestigations />
                </>
              )}

              {activeTab === "Procedures" && (
                <>
                  <EditFavoriteProcedures />
                </>
              )}

              {activeTab === "Medications" && (
                <>
                  <EditFavoriteMedications />
                </>
              )}

              {activeTab === "Advice" && (
                <>
                  <EditFavoriteAdvice />
                </>
              )}

              {activeTab === "PreOpOrder" && (
                <>
                  <EditFavoritePreOpOrders />
                </>
              )}

              {activeTab === "PostOpOrder" && (
                <>
                  <EditFavoritePostOpOrders />
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

export default EditFavourites;
