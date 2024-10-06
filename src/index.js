/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import "./index.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";
import { TokenProvider } from "layouts/authentication/sign-in/token";
import { PatientProvider } from "services/Patient";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <MaterialUIControllerProvider>
          <TokenProvider>
            <PatientProvider>
              <App />
            </PatientProvider>
          </TokenProvider>
        </MaterialUIControllerProvider>
      </BrowserRouter>
    </DndProvider>
  </React.StrictMode>
);
