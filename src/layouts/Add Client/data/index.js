import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import React, { useContext } from "react";
import { AddClientContext } from "context/Add Client/addClientContext";

export default function data() {
  const { clients } = useContext(AddClientContext);

  const columns = [
    { Header: "Name", accessor: "Name", width: "15%", align: "left" },
    { Header: "Theme", accessor: "Theme", width: "10%", align: "center" },
    { Header: "Admin User", accessor: "AdminUser", width: "15%", align: "center" },
    { Header: "Admin Password", accessor: "AdminPassword", width: "15%", align: "center" },
    { Header: "DBUser", accessor: "DBUser", width: "15%", align: "center" },
    { Header: "DBPassword", accessor: "DBPassword", width: "10%", align: "center" },
    { Header: "Edit/Update", accessor: "EditUpdate", width: "10%", align: "center" },
    { Header: "View", accessor: "View", width: "10%", align: "center" },
  ];

  const rows = clients.map((client) => ({
    Name: (
      <MDTypography variant="caption" fontWeight="medium">
        {client["Name"]}
      </MDTypography>
    ),
    Theme: (
      <MDTypography variant="caption" fontWeight="medium">
        {client["Theme"]}
      </MDTypography>
    ),
    AdminUser: (
      <MDTypography variant="caption" fontWeight="medium">
        {client["AdminUser"]}
      </MDTypography>
    ),
    AdminPassword: (
      <MDTypography variant="caption" fontWeight="medium">
        {client["AdminPassword"]}
      </MDTypography>
    ),
    DBUser: (
      <MDTypography variant="caption" fontWeight="medium">
        {client["DBUser"]}
      </MDTypography>
    ),
    DBPassword: (
      <MDTypography variant="caption" fontWeight="medium">
        {client["DBPassword"]}
      </MDTypography>
    ),
    EditUpdate: (
      <MDButton
        variant="gradient"
        fontWeight="medium"
        style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}
      >
        Edit
      </MDButton>
    ),
    View: (
      <MDButton
        variant="gradient"
        fontWeight="medium"
        style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}
      >
        View
      </MDButton>
    ),
  }));

  return { columns, rows };
}
