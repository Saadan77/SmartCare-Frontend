import React, { useState } from "react";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { Container, Grid, Paper } from "@mui/material";

import AddGeneric from "./components/Add Generic";
import AddItemCategory from "./components/Add Item Category";
import AddItemType from "./components/Add Item Type";
import AddUnit from "./components/Add Unit";
import AddItem from "./components/Add Item";

function PharmacySetup() {
  const [activeTab, setActiveTab] = useState("addGeneric");

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
                      onClick={() => handleActiveTab("addGeneric")}
                      className={`cursor-pointer ${
                        activeTab === "addGeneric" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#addGeneric" className={`font-semibold text-xs relative`}>
                          Add Generic
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "addGeneric" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={2}
                      onClick={() => handleActiveTab("addItemCategory")}
                      className={`cursor-pointer ${
                        activeTab === "addItemCategory" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#addItemCategory" className={`font-semibold text-xs relative`}>
                          Add Item Category
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "addItemCategory" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={2}
                      onClick={() => handleActiveTab("addItemType")}
                      className={`cursor-pointer ${
                        activeTab === "addItemType" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#addItemType" className={`font-semibold text-xs relative`}>
                          Add Item Type
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "addItemType" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={2}
                      onClick={() => handleActiveTab("addItem")}
                      className={`cursor-pointer ${
                        activeTab === "addItem" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#addItem" className={`font-semibold text-xs relative`}>
                          Add Item
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "addItem" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={2}
                      onClick={() => handleActiveTab("addUnit")}
                      className={`cursor-pointer ${
                        activeTab === "addUnit" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#addUnit" className={`font-semibold text-xs relative`}>
                          Add Unit
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "addUnit" ? "scale-x-100" : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={3}
                      onClick={() => handleActiveTab(" manageOrganizationUnitItems")}
                      className={`cursor-pointer ${
                        activeTab === " manageOrganizationUnitItems" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a
                          href="# manageOrganizationUnitItems"
                          className={`font-semibold text-xs relative`}
                        >
                          Manage Organization Unit Items
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === " manageOrganizationUnitItems"
                              ? "scale-x-100"
                              : "scale-x-0"
                          } transition-transform duration-300`}
                        ></span>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={2}
                      onClick={() => handleActiveTab("goodsReceivedNote")}
                      className={`cursor-pointer ${
                        activeTab === "goodsReceivedNote" ? "text-[#1694c4]" : ""
                      }`}
                    >
                      <div className="border border-gray-300 group h-10 relative">
                        <a href="#goodsReceivedNote" className={`font-semibold text-xs relative`}>
                          Goods Received Note
                        </a>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1694c4] transform ${
                            activeTab === "goodsReceivedNote" ? "scale-x-100" : "scale-x-0"
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
              {activeTab === "addGeneric" && (
                <>
                  <AddGeneric />
                </>
              )}

              {activeTab === "addItemCategory" && (
                <>
                  <AddItemCategory />
                </>
              )}

              {activeTab === "addItemType" && (
                <>
                  <AddItemType />
                </>
              )}

              {activeTab === "addItem" && (
                <>
                  <AddItem />
                </>
              )}

              {activeTab === "addUnit" && (
                <>
                  <AddUnit />
                </>
              )}

              {/* {activeTab === "manageOrganizationUnitItems" && (
                <>
                  <AdmittedPatientReport />
                </>
              )}

              {activeTab === "goodsReceivedNote" && (
                <>
                  <AdmittedPatientReport />
                </>
              )} */}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </DashboardLayout>
  );
}

export default PharmacySetup;
