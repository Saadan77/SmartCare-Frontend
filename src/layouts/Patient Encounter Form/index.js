import React, { useState } from "react";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { Container, Typography, Grid, Paper, Box } from "@mui/material";

import Vitals from "./components/Vitals";
import Diagnosis from "./components/Diagnosis";
import Investigation from "./components/Investigation";
import Procedure from "./components/Procedure";
import Medication from "./components/Medication";
import Advice from "./components/Advice";
import AddLeave from "./components/Add Leave";
import NextVisit from "./components/Next Visit - Follow Up";
import Admit from "./components/Admit";
import ResusRecord from "./components/Resus Record";
import GlasgowComaScale from "./components/Glasgow Coma Scale";
import OperationTheater from "./components/OT";

function PatientEncounterFrom() {
  const [activeTab, setActiveTab] = useState("examination");

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
          <Box>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Patient Information</p>
            </Typography>
          </Box>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
            <Grid
              item
              xs={6}
              sm={12}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="font-semibold text-xs mb-2">
                  Patient Name: <span className="text-xs text-gray-500">John Smith</span>
                </p>
              </Box>
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
              <Box>
                <p className="flex flex-row text-xs font-semibold items-center mb-2">
                  MR No:<p className="font-normal mx-2 text-sky-600">00001-27-09-2024</p>
                </p>
              </Box>
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
              <Box>
                <p className="flex flex-row text-xs font-semibold items-center mb-2">
                  Gender:<p className="font-normal text-gray-600 text-xs mx-2">Male</p>
                </p>
              </Box>
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
              <Box>
                <p className="flex flex-row text-xs font-semibold items-center mb-2">
                  DOB:<p className="font-normal text-gray-600 text-xs mx-2">12/09/2001</p>
                </p>
              </Box>
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
              <Box>
                <p className="flex flex-row text-xs font-semibold items-center mb-2">
                  Age:<p className="font-normal text-gray-600 text-xs mx-2">22 years 09 months</p>
                </p>
              </Box>
            </Grid>
          </Grid>

          <section id="nav">
            <nav className="w-full mb-3">
              <div>
                <div className="flex items-center">
                  <Grid container sx={{ marginTop: 2 }} className="text-center">
                    {/* Navigation Links */}
                    <Grid
                      item
                      sm={2}
                      onClick={() => handleActiveTab("examination")}
                      className={`cursor-pointer ${
                        activeTab === "examination" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#examination" className={`font-semibold text-xs relative`}>
                          Examination
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "examination" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={2}
                      onClick={() => handleActiveTab("vitals")}
                      className={`cursor-pointer ${activeTab === "vitals" ? "text-[#1694c4]" : ""}`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#vitals" className={`font-semibold text-xs relative`}>
                          Vitals
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "vitals" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={2}
                      onClick={() => handleActiveTab("diagnosis")}
                      className={`cursor-pointer ${
                        activeTab === "diagnosis" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#diagnosis" className={`font-semibold text-xs relative`}>
                          Diagnosis
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "diagnosis" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={2}
                      onClick={() => handleActiveTab("investigation")}
                      className={`cursor-pointer ${
                        activeTab === "investigation" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#investigation" className={`font-semibold text-xs relative`}>
                          Investigation
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "investigation" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={2}
                      onClick={() => handleActiveTab("procedure")}
                      className={`cursor-pointer ${
                        activeTab === "procedure" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#procedure" className={`font-semibold text-xs relative`}>
                          Procedure
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "procedure" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={2}
                      onClick={() => handleActiveTab("medication")}
                      className={`cursor-pointer ${
                        activeTab === "medication" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#medication" className={`font-semibold text-xs relative`}>
                          Medication
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "medication" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={2}
                      onClick={() => handleActiveTab("advice")}
                      className={`cursor-pointer ${activeTab === "advice" ? "text-[#1694c4]" : ""}`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#advice" className={`font-semibold text-xs relative`}>
                          Advice
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "advice" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={2}
                      onClick={() => handleActiveTab("addLeave")}
                      className={`cursor-pointer ${
                        activeTab === "addLeave" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#addLeave" className={`font-semibold text-xs relative`}>
                          Add Leave
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "addLeave" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={2}
                      onClick={() => handleActiveTab("Referral")}
                      className={`cursor-pointer ${
                        activeTab === "Referral" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#Referral" className={`font-semibold text-xs relative`}>
                          Referral
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "Referral" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={2}
                      onClick={() => handleActiveTab("nextVisit")}
                      className={`cursor-pointer ${
                        activeTab === "nextVisit" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#nextVisit" className={`font-semibold text-xs relative`}>
                          Next Visit/ Follow Up
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "nextVisit" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={2}
                      onClick={() => handleActiveTab("admit")}
                      className={`cursor-pointer ${activeTab === "admit" ? "text-[#1694c4]" : ""}`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#admit" className={`font-semibold text-xs relative`}>
                          Admit
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "admit" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={2}
                      onClick={() => handleActiveTab("disposal")}
                      className={`cursor-pointer ${
                        activeTab === "disposal" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#disposal" className={`font-semibold text-xs relative`}>
                          Disposal
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "disposal" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={2}
                      onClick={() => handleActiveTab("resusRecord")}
                      className={`cursor-pointer ${
                        activeTab === "resusRecord" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#resusRecord" className={`font-semibold text-xs relative`}>
                          Resus Record
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "resusRecord" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={2}
                      onClick={() => handleActiveTab("glasgowComaScale")}
                      className={`cursor-pointer ${
                        activeTab === "glasgowComaScale" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#glasgowComaScale" className={`font-semibold text-xs relative`}>
                          Glasgow Coma Scale
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "glasgowComaScale" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      sm={2}
                      onClick={() => handleActiveTab("operationTheater")}
                      className={`cursor-pointer ${
                        activeTab === "operationTheater" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#operationTheater" className={`font-semibold text-xs relative`}>
                          OT
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "operationTheater" ? "scale-x-100" : "scale-x-0"
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
            {activeTab === "vitals" && (
              <>
                <Grid item sm={12}>
                  <Vitals />
                </Grid>
              </>
            )}

            {activeTab === "diagnosis" && (
              <>
                <Grid item sm={12}>
                  <Diagnosis />
                </Grid>
              </>
            )}

            {activeTab === "investigation" && (
              <>
                <Grid item sm={12}>
                  <Investigation />
                </Grid>
              </>
            )}

            {activeTab === "procedure" && (
              <>
                <Grid item sm={12}>
                  <Procedure />
                </Grid>
              </>
            )}

            {activeTab === "medication" && (
              <>
                <Grid item sm={12}>
                  <Medication />
                </Grid>
              </>
            )}

            {activeTab === "advice" && (
              <>
                <Grid item sm={12}>
                  <Advice />
                </Grid>
              </>
            )}

            {activeTab === "addLeave" && (
              <>
                <Grid item sm={12}>
                  <AddLeave />
                </Grid>
              </>
            )}

            {activeTab === "nextVisit" && (
              <>
                <Grid item sm={12}>
                  <NextVisit />
                </Grid>
              </>
            )}

            {activeTab === "admit" && (
              <>
                <Grid item sm={12}>
                  <Admit />
                </Grid>
              </>
            )}

            {activeTab === "disposal" && (
              <>
                <Grid item sm={12}></Grid>
              </>
            )}

            {activeTab === "resusRecord" && (
              <>
                <Grid item sm={12}>
                  <ResusRecord />
                </Grid>
              </>
            )}

            {activeTab === "glasgowComaScale" && (
              <>
                <Grid item sm={12}>
                  <GlasgowComaScale />
                </Grid>
              </>
            )}

            {activeTab === "operationTheater" && (
              <>
                <Grid item sm={12}>
                  <OperationTheater />
                </Grid>
              </>
            )}
          </Grid>
        </Paper>
      </Container>
    </DashboardLayout>
  );
}

export default PatientEncounterFrom;
