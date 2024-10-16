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
import { PatientProvider } from "context/Patient Context";

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
