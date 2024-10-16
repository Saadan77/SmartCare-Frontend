import { useContext, useState } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Icon } from "@mui/material";
import { PatientContext } from "context/Patient Context";

export default function data() {
  const { patients, loading, error } = useContext(PatientContext);

  if (loading) return <p>Loading patients...</p>;
  if (error) return <p>Error fetching patients: {error.message}</p>;

  console.log(patients);

  // Check if patients array exists and has data
  if (!patients || patients.length === 0) {
    return { columns, rows: [] }; // If no patients, return empty rows
  }

  const [menu, setMenu] = useState({ anchor: null, patientId: null });

  const openMenu = (event, patientId) => {
    setMenu({ anchor: event.currentTarget, patientId });
  };

  const closeMenu = () => {
    setMenu({ anchor: null, patientId: null });
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
      <MenuItem>Delete</MenuItem>
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
        {patient["Patient Id"]}
      </MDTypography>
    ),
    fullName: (
      <MDTypography variant="caption" fontWeight="medium">
        {`${patient["First Name"]} ${patient["Middle Name"]} ${patient["Last Name"]}`}
      </MDTypography>
    ),
    gender: (
      <MDTypography variant="caption" fontWeight="medium">
        {patient["Gender"]}
      </MDTypography>
    ),
    phoneNo: (
      <MDTypography variant="caption" fontWeight="medium">
        {patient["Mobile"]}
      </MDTypography>
    ),
    registrationDate: (
      <MDTypography variant="caption" fontWeight="medium">
        {new Date(patient["Date of Birth"]).toLocaleDateString()}
      </MDTypography>
    ),
    actions: (
      <MDBox display="flex" justifyContent="space-between" alignItems="center">
        <MDBox color="text" px={2}>
          <Icon
            sx={{ cursor: "pointer", fontWeight: "bold" }}
            fontSize="small"
            onClick={(event) => openMenu(event, patient["Patient Id"])}
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
