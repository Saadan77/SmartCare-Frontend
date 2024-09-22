/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// @mui material components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useToken } from "layouts/authentication/sign-in/token";
import { fetchPatients } from "services/Patient";
import { useState, useEffect } from "react";
import { Icon } from "@mui/material";

export default function data() {
  const { token } = useToken();

  const [patients, setPatients] = useState([]);

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
        const reponsePatients = await fetchPatients(token);
        setPatients(reponsePatients || []);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, [token]);

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
