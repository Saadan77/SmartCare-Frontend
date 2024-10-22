// @mui material components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useState, useEffect } from "react";
import { Icon } from "@mui/material";
import { fetchEmergencyCases } from "services/EmergencyCase";

export default function data() {
  const [emergencyCases, setEmergencyCases] = useState([]);

  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Delete</MenuItem>
      <MenuItem onClick={closeMenu}>Edit</MenuItem>
    </Menu>
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponseCases = await fetchEmergencyCases(token);
        setEmergencyCases(reponseCases || []);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, [token]);

  const columns = [
    { Header: "Patient ID", accessor: "patientId", width: "20%", align: "left" },
    { Header: "Name", accessor: "fullName", width: "20%", align: "left" },
    { Header: "Treatment", accessor: "treatment", width: "10%", align: "center" },
    { Header: "Diagnosis", accessor: "diagnosis", width: "10%", align: "center" },
    { Header: "Recovery Status", accessor: "recoveryStatus", width: "20%", align: "center" },
    { Header: "Room", accessor: "room", width: "10%", align: "center" },
    { Header: "Actions", accessor: "actions", width: "10%", align: "center" },
  ];

  const rows = emergencyCases.map((emergencyCase) => ({
    patientId: (
      <MDTypography variant="caption" fontWeight="medium">
        {emergencyCase.patientId}
      </MDTypography>
    ),
    fullName: (
      <MDTypography variant="caption" fontWeight="medium">
        {emergencyCase.fullName}
      </MDTypography>
    ),
    treatment: (
      <MDTypography variant="caption" fontWeight="medium">
        {emergencyCase.treatment}
      </MDTypography>
    ),
    diagnosis: (
      <MDTypography variant="caption" fontWeight="medium">
        {emergencyCase.diagnosis}
      </MDTypography>
    ),
    recoveryStatus: (
      <MDTypography variant="caption" fontWeight="medium">
        {emergencyCase.recoveryStatus}
      </MDTypography>
    ),
    room: (
      <MDTypography variant="caption" fontWeight="medium">
        {emergencyCase.room}
      </MDTypography>
    ),
    actions: (
      <MDBox display="flex" justifyContent="space-between" alignItems="center">
        <MDBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </MDBox>
        {renderMenu}
      </MDBox>
    ),
  }));

  return { columns, rows };
}
