import Dashboard from "layouts/dashboard";
import PatientRegistration from "layouts/PatientRegistration";
import Billing from "layouts/billing";
import EmergencyCase from "layouts/emergency";
import ManagePatients from "layouts/Manage Patients";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import DoctorPortal from "layouts/Doctor Portal";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
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
    icon: <Icon fontSize="small">emergency</Icon>,
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
    name: "Manage Patients",
    key: "managePatients",
    icon: <Icon fontSize="small">personal_injury</Icon>,
    route: "/managePatients",
    component: <ManagePatients />,
  },
  {
    type: "collapse",
    name: "Doctor Portal",
    key: "doctorPortal",
    icon: <Icon fontSize="small">contact_emergency</Icon>,
    route: "/doctorPortal",
    component: <DoctorPortal />,
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
