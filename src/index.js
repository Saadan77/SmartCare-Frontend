import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import "./index.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";
import { PatientProvider } from "context/Patient Context";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <MaterialUIControllerProvider>
          <PatientProvider>
            <App />
          </PatientProvider>
        </MaterialUIControllerProvider>
      </BrowserRouter>
    </DndProvider>
  </React.StrictMode>
);
