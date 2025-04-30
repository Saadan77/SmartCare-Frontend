import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import "./index.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { MaterialUIControllerProvider } from "context";
import { PatientProvider } from "context/Patient Context";
import { GroupProvider } from "context/Group Context/Add Group";
import { SubGroupProvider } from "context/Group Context/Add SubGroup";
import { ServiceProvider } from "context/Group Context/Add Service";
import { ClientProvider } from "context/Add Client/addClientContext";
import { EmployeeProvider } from "context/Employee/Add Employee/addEmployeeContext";
import { StandardOrganizationsProvider } from "context/Organizations/Manage Standard Organization/manageStandardOrganizationContext";
import { AppointmentsProvider } from "context/Appointment/appointmentContext";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <MaterialUIControllerProvider>
          <PatientProvider>
            <GroupProvider>
              <SubGroupProvider>
                <ServiceProvider>
                  <ClientProvider>
                    <EmployeeProvider>
                      <StandardOrganizationsProvider>
                        <AppointmentsProvider>
                          <App />
                        </AppointmentsProvider>
                      </StandardOrganizationsProvider>
                    </EmployeeProvider>
                  </ClientProvider>
                </ServiceProvider>
              </SubGroupProvider>
            </GroupProvider>
          </PatientProvider>
        </MaterialUIControllerProvider>
      </BrowserRouter>
    </DndProvider>
  </React.StrictMode>
);
