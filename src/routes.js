// @mui icons
import Icon from "@mui/material/Icon";

import Dashboard from "layouts/dashboard";
import PatientRegistration from "layouts/PatientRegistration";
import Billing from "layouts/billing";
import EmergencyCase from "layouts/emergency";
import ManagePatients from "layouts/Manage Patients";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import DoctorPortal from "layouts/Doctor Portal";
import PatientEncounterFrom from "layouts/Patient Encounter Form";
import ReceivePatient from "layouts/Receive Patients";
import IssueMedicine from "layouts/Issue Medicine - IPD";
import DutyRoster from "layouts/Duty Roster";
import Report from "layouts/Report";
import SearchPatients from "layouts/Search Patients";
import VisitConfirmation from "layouts/Visit Confirmation";
import PatientAppointment from "layouts/Patient Appointment";
import AddPatient from "layouts/Add Patients";
import AppointmentCategory from "layouts/Appointment Category";
import AddAppointment from "layouts/Add Appointment";
import DischargeSummary from "layouts/Discharge Summary";
// import MedicineChargeFile from "layouts/Medicine Charge File";
import AddClient from "layouts/Add Client";
import Chatbot from "layouts/SmartCare ChatBot";
// import FeeStructure from "layouts/Fee Structure";
// import PharmacySetup from "layouts/Pharmacy Setup";
// import ManageFavourites from "layouts/Manage Favourites";
// import AddFavourite from "layouts/Add Favorite";
// import EditFavourites from "layouts/Edit Favourites";
// import Organization from "layouts/Organization";
// import Employee from "layouts/Employee";
// import ServiceSetup from "layouts/Service Setup";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
    protected: true,
    roles: ["admin", "doctor", "patient"],
  },
  // {
  //   type: "collapse",
  //   name: "Add Client",
  //   key: "addClient",
  //   icon: <Icon fontSize="small">group_add</Icon>,
  //   route: "/addClient",
  //   component: <AddClient />,
  //   protected: true,
  //   roles: ["admin"],
  // },
  // {
  //   type: "collapse",
  //   name: "Organization",
  //   key: "organization",
  //   icon: <Icon fontSize="small">medication_liquid</Icon>,
  //   route: "/organization",
  //   component: <Organization />,
  // },
  // {
  //   type: "collapse",
  //   name: "Appointment Category",
  //   key: "appointmentCategory",
  //   icon: <Icon fontSize="small">crib</Icon>,
  //   route: "/appointmentCategory",
  //   component: <AppointmentCategory />,
  //   protected: true,
  //   roles: ["admin"],
  // },
  {
    type: "collapse",
    name: "Add Appointment",
    key: "addAppointment",
    icon: <Icon fontSize="small">single_bed</Icon>,
    route: "/addAppointment",
    component: <AddAppointment />,
    protected: true,
    roles: ["doctor", "patient"],
  },
  // {
  //   type: "collapse",
  //   name: "Add Patient",
  //   key: "addPatient",
  //   icon: <Icon fontSize="small">person_add</Icon>,
  //   route: "/addPatient",
  //   component: <AddPatient />,
  //   protected: true,
  //   roles: ["doctor"],
  // },
  {
    type: "collapse",
    name: "Search Patients",
    key: "searchPatients",
    icon: <Icon fontSize="small">search</Icon>,
    route: "/searchPatients",
    component: <SearchPatients />,
    protected: true,
    roles: ["admin", "doctor"],
  },
  // {
  //   type: "collapse",
  //   name: "Visit Confirmation",
  //   key: "visitConfirmation",
  //   icon: <Icon fontSize="small">fact_check</Icon>,
  //   route: "/visitConfirmation",
  //   component: <VisitConfirmation />,
  //   protected: true,
  //   roles: ["doctor"],
  // },
  {
    type: "collapse",
    name: "Patient Appointment",
    key: "patientAppointment",
    icon: <Icon fontSize="small">book_online</Icon>,
    route: "/patientAppointment",
    component: <PatientAppointment />,
    protected: true,
    roles: ["doctor"],
  },
  {
    type: "collapse",
    name: "Patient Registeration",
    key: "register",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/register",
    component: <PatientRegistration />,
    protected: true,
    roles: ["doctor", "patient"],
  },
  // {
  //   type: "collapse",
  //   name: "Emergency Case",
  //   key: "emergency",
  //   icon: <Icon fontSize="small">emergency</Icon>,
  //   route: "/emergency",
  //   component: <EmergencyCase />,
  //   protected: true,
  //   roles: ["doctor"],
  // },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
    protected: true,
    roles: ["doctor", "patient"],
  },
  // {
  //   type: "collapse",
  //   name: "Manage Patients",
  //   key: "managePatients",
  //   icon: <Icon fontSize="small">personal_injury</Icon>,
  //   route: "/managePatients",
  //   component: <ManagePatients />,
  //   protected: true,
  //   roles: ["doctor"],
  // },
  // {
  //   type: "collapse",
  //   name: "Patient Encouter Form",
  //   key: "patientEncouterForm",
  //   icon: <Icon fontSize="small">person</Icon>,
  //   route: "/patientEncouterForm",
  //   component: <PatientEncounterFrom />,
  //   protected: true,
  //   roles: ["doctor"],
  // },
  {
    type: "collapse",
    name: "Doctor Portal",
    key: "doctorPortal",
    icon: <Icon fontSize="small">contact_emergency</Icon>,
    route: "/doctorPortal",
    component: <DoctorPortal />,
    protected: true,
    roles: ["admin", "doctor"],
  },
  // {
  //   type: "collapse",
  //   name: "Medicine Charge File",
  //   key: "medicineChargeFile",
  //   icon: <Icon fontSize="small">bloodtype</Icon>,
  //   route: "/medicineChargeFile",
  //   component: <MedicineChargeFile />,
  //   protected: true,
  //   roles: ["doctor"],
  // },
  // {
  //   type: "collapse",
  //   name: "Receive Patient",
  //   key: "receivePatient",
  //   icon: <Icon fontSize="small">healing</Icon>,
  //   route: "/receivePatient",
  //   component: <ReceivePatient />,
  //   protected: true,
  //   roles: ["doctor"],
  // },
  // {
  //   type: "collapse",
  //   name: "Issue Medicine",
  //   key: "issueMedicine",
  //   icon: <Icon fontSize="small">medication</Icon>,
  //   route: "/issueMedicine",
  //   component: <IssueMedicine />,
  //   protected: true,
  //   roles: ["doctor"],
  // },
  // {
  //   type: "collapse",
  //   name: "Discharge Summary",
  //   key: "dischargeSummary",
  //   icon: <Icon fontSize="small">bedtime</Icon>,
  //   route: "/dischargeSummary",
  //   component: <DischargeSummary />,
  //   protected: true,
  //   roles: ["doctor", "patient"],
  // },
  {
    type: "collapse",
    name: "Duty Roster",
    key: "dutyRoster",
    icon: <Icon fontSize="small">work_outline</Icon>,
    route: "/dutyRoster",
    component: <DutyRoster />,
    protected: true,
    roles: ["admin", "doctor"],
  },
  {
    type: "collapse",
    name: "Report",
    key: "report",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/report",
    component: <Report />,
    protected: true,
    roles: ["admin", "doctor", "patient"],
  },
  // {
  //   type: "collapse",
  //   name: "Pharmacy Setup",
  //   key: "pharmacySetup",
  //   icon: <Icon fontSize="small">medication_liquid</Icon>,
  //   route: "/pharmacySetup",
  //   component: <PharmacySetup />,
  //   protected: true,
  //   roles: ["admin"],
  // },
  // {
  //   type: "collapse",
  //   name: "Employee",
  //   key: "employee",
  //   icon: <Icon fontSize="small">medication_liquid</Icon>,
  //   route: "/employee",
  //   component: <Employee />,
  //   protected: true,
  //   roles: ["admin"],
  // },
  // {
  //   type: "collapse",
  //   name: "Service Setup",
  //   key: "serviceSetup",
  //   icon: <Icon fontSize="small">medication_liquid</Icon>,
  //   route: "/serviceSetup",
  //   component: <ServiceSetup />,
  //   protected: true,
  //   roles: ["admin"],
  // },
  // {
  //   type: "collapse",
  //   name: "Manage Favourites",
  //   key: "manageFavourites",
  //   icon: <Icon fontSize="small">bookmark_border</Icon>,
  //   route: "/manageFavourites",
  //   component: <ManageFavourites />,
  // },
  // {
  //   type: "collapse",
  //   name: "Add Favourite",
  //   key: "addFavourite",
  //   icon: <Icon fontSize="small">bookmark</Icon>,
  //   route: "/addFavourite",
  //   component: <AddFavourite />,
  // },
  // {
  //   type: "collapse",
  //   name: "Edit Favourite",
  //   key: "editFavourite",
  //   icon: <Icon fontSize="small">edit</Icon>,
  //   route: "/editFavourite",
  //   component: <EditFavourites />,
  // },
  // {
  //   type: "collapse",
  //   name: "Fee Structuer",
  //   key: "feeStructuer",
  //   icon: <Icon fontSize="small">payments</Icon>,
  //   route: "/feeStructuer",
  //   component: <FeeStructure />,
  //   protected: true,
  //   roles: [],
  // },
  {
    type: "collapse",
    name: "ChatBot",
    key: "chatbot",
    icon: <Icon fontSize="small">smart_toy</Icon>,
    route: "/chatbot",
    component: <Chatbot />,
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
