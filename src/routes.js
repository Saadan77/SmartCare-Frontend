import Dashboard from "layouts/dashboard";
import PatientRegistration from "layouts/PatientRegistration";
import Billing from "layouts/billing";
import EmergencyCase from "layouts/emergency";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import PatientTable from "layouts/dashboard/patientTable";

// @mui icons
import Icon from "@mui/material/Icon";

import EmergencyCasesTable from "layouts/dashboard/emergencyTable";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
    collapse: [
      {
        name: "Patients",
        key: "patients",
        route: "/dashboard/patients",
        icon: <Icon fontSize="small">attribution</Icon>,
        component: <PatientTable />,
      },
      {
        name: "Emergency Cases",
        key: "emergency-cases",
        icon: <Icon fontSize="small">medication</Icon>,
        route: "/dashboard/emergency-cases",
        component: <EmergencyCasesTable />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Patient Registeration",
    key: "register",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/register",
    component: <PatientRegistration />,
  },
  {
    type: "collapse",
    name: "Emergency Case",
    key: "emergency",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/emergency",
    component: <EmergencyCase />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Inventory",
    key: "inventory",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/inventory",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "User",
    key: "user",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/user",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
