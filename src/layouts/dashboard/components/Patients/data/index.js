import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Icon } from "@mui/material";
import { usePatientContext, deletePatient } from "services/Patient";

export default function data() {
  const { patients, setPatients } = usePatientContext();

  const [menu, setMenu] = useState({ anchor: null, patientId: null });

  const openMenu = (event, patientId) => {
    setMenu({ anchor: event.currentTarget, patientId });
  };

  const closeMenu = () => {
    setMenu({ anchor: null, patientId: null });
  };

  const handleDelete = async (patientId) => {
    try {
      await deletePatient(patientId, token);
      setPatients((prevPatients) =>
        prevPatients.filter((patient) => patient.patientId !== patientId)
      );
      closeMenu();
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu.anchor}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu.anchor)}
      onClose={closeMenu}
    >
      <MenuItem
        onClick={() => {
          handleDelete(menu.patientId);
        }}
      >
        Delete
      </MenuItem>
      <MenuItem onClick={closeMenu}>Edit</MenuItem>
    </Menu>
  );

  const columns = [
    { Header: "Patient ID", accessor: "patientId", width: "20%", align: "left" },
    { Header: "Name", accessor: "fullName", width: "20%", align: "left" },
    { Header: "Gender", accessor: "gender", width: "10%", align: "center" },
    { Header: "Phone Number", accessor: "phoneNo", width: "15%", align: "center" },
    { Header: "Registration Date", accessor: "registrationDate", width: "25%", align: "center" },
    { Header: "Actions", accessor: "actions", width: "10%", align: "center" },
  ];

  const rows = patients.map((patient) => ({
    patientId: (
      <MDTypography variant="caption" fontWeight="medium">
        {patient.patientId}
      </MDTypography>
    ),
    fullName: (
      <MDTypography variant="caption" fontWeight="medium">
        {patient.fullName}
      </MDTypography>
    ),
    gender: (
      <MDTypography variant="caption" fontWeight="medium">
        {patient.gender}
      </MDTypography>
    ),
    phoneNo: (
      <MDTypography variant="caption" fontWeight="medium">
        {patient.phoneNo}
      </MDTypography>
    ),
    registrationDate: (
      <MDTypography variant="caption" fontWeight="medium">
        {new Date(patient.createdDate).toLocaleDateString()}
      </MDTypography>
    ),
    actions: (
      <MDBox display="flex" justifyContent="space-between" alignItems="center">
        <MDBox color="text" px={2}>
          <Icon
            sx={{ cursor: "pointer", fontWeight: "bold" }}
            fontSize="small"
            onClick={(event) => openMenu(event, patient.patientId)}
          >
            more_vert
          </Icon>
        </MDBox>
        {renderMenu}
      </MDBox>
    ),
  }));

  return { columns, rows };
}
