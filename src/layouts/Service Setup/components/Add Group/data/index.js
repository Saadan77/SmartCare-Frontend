// @mui material components
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import React, { useContext } from "react";
import { AddGroupContext } from "context/Group Context/Add Group";

export default function data() {
  const { groups } = useContext(AddGroupContext);

  console.log("Current groups in context:", groups);

  const columns = [
    { Header: "Group Name", accessor: "groupName", width: "40%", align: "left" },
    { Header: "Edit", accessor: "edit", width: "20%", align: "left" },
    { Header: "View", accessor: "view", width: "20%", align: "left" },
    { Header: "Delete", accessor: "delete", width: "20%", align: "left" },
  ];

  const rows = groups.map((group) => ({
    groupName: (
      <MDTypography variant="caption" fontWeight="medium">
        {group["GroupName"]}
      </MDTypography>
    ),
    edit: (
      <MDButton
        variant="gradient"
        fontWeight="medium"
        style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}
      >
        Edit
      </MDButton>
    ),
    view: (
      <MDButton
        variant="gradient"
        fontWeight="medium"
        style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}
      >
        View
      </MDButton>
    ),
    delete: (
      <MDButton
        variant="gradient"
        fontWeight="medium"
        style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}
      >
        Delete
      </MDButton>
    ),
  }));

  return { columns, rows };
}
