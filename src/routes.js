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
import PatientEncounterFrom from "layouts/Patient Encounter Form";
import MedicineChargeFile from "layouts/Medicine Charge File";
import ReceivePatient from "layouts/Receive Patients";
import IssueMedicine from "layouts/Issue Medicine - IPD";
import DutyRoster from "layouts/Duty Roster";
import Report from "layouts/Report";
import PharmacySetup from "layouts/Pharmacy Setup";
import SearchPatients from "layouts/Search Patients";
import VisitConfirmation from "layouts/Visit Confirmation";
import PatientAppointment from "layouts/Patient Appointment";
import AddPatient from "layouts/Add Patients";
import AddClient from "layouts/Add Client";
import AppointmentCategory from "layouts/Appointment Category";
import AddAppointment from "layouts/Add Appointment";

const routes = [
  {
    type: "collapse",
    name: "Add Client",
    key: "addClient",
    icon: <Icon fontSize="small">group_add</Icon>,
    route: "/addClient",
    component: <AddClient />,
  },
  {
    type: "collapse",
    name: "Appointment Category",
    key: "appointmentCategory",
    icon: <Icon fontSize="small">crib</Icon>,
    route: "/appointmentCategory",
    component: <AppointmentCategory />,
  },
  {
    type: "collapse",
    name: "Add Appointment",
    key: "addAppointment",
    icon: <Icon fontSize="small">single_bed</Icon>,
    route: "/addAppointment",
    component: <AddAppointment />,
  },
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
    name: "Add Patient",
    key: "addPatient",
    icon: <Icon fontSize="small">person_add</Icon>,
    route: "/addPatient",
    component: <AddPatient />,
  },
  {
    type: "collapse",
    name: "Search Patients",
    key: "searchPatients",
    icon: <Icon fontSize="small">search</Icon>,
    route: "/searchPatients",
    component: <SearchPatients />,
  },
  {
    type: "collapse",
    name: "Visit Confirmation",
    key: "visitConfirmation",
    icon: <Icon fontSize="small">fact_check</Icon>,
    route: "/visitConfirmation",
    component: <VisitConfirmation />,
  },
  {
    type: "collapse",
    name: "Patient Appointment",
    key: "patientAppointment",
    icon: <Icon fontSize="small">book_online</Icon>,
    route: "/patientAppointment",
    component: <PatientAppointment />,
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
    name: "Patient Encouter Form",
    key: "patientEncouterForm",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/patientEncouterForm",
    component: <PatientEncounterFrom />,
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
    name: "Medicine Charge File",
    key: "medicineChargeFile",
    icon: <Icon fontSize="small">bloodtype</Icon>,
    route: "/medicineChargeFile",
    component: <MedicineChargeFile />,
  },
  {
    type: "collapse",
    name: "Receive Patient",
    key: "receivePatient",
    icon: <Icon fontSize="small">healing</Icon>,
    route: "/receivePatient",
    component: <ReceivePatient />,
  },
  {
    type: "collapse",
    name: "Issue Medicine",
    key: "issueMedicine",
    icon: <Icon fontSize="small">medication</Icon>,
    route: "/issueMedicine",
    component: <IssueMedicine />,
  },
  {
    type: "collapse",
    name: "Duty Roster",
    key: "dutyRoster",
    icon: <Icon fontSize="small">work_outline</Icon>,
    route: "/dutyRoster",
    component: <DutyRoster />,
  },
  {
    type: "collapse",
    name: "Report",
    key: "report",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/report",
    component: <Report />,
  },
  {
    type: "collapse",
    name: "Pharmacy Setup",
    key: "pharmacySetup",
    icon: <Icon fontSize="small">medication_liquid</Icon>,
    route: "/pharmacySetup",
    component: <PharmacySetup />,
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
