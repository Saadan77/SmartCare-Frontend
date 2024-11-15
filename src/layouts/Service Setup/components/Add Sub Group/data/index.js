// @mui material components
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import React, { useContext } from "react";
import { AddSubGroupContext } from "context/Group Context/Add SubGroup";

export default function data() {
  const { subGroups } = useContext(AddSubGroupContext);

  const columns = [
    // { Header: "Group Name", accessor: "groupName", width: "30%", align: "left" },
    { Header: "Sub Group Name", accessor: "subGroupName", width: "40%", align: "left" },
    { Header: "Edit", accessor: "edit", width: "20%", align: "left" },
    { Header: "View", accessor: "view", width: "20%", align: "left" },
    { Header: "Delete", accessor: "delete", width: "20%", align: "left" },
  ];

  const rows = subGroups.map((subgroup) => ({
    // groupName: (
    //   <MDTypography variant="caption" fontWeight="medium">
    //     {subgroup["GroupName"]}
    //   </MDTypography>
    // ),
    subGroupName: (
      <MDTypography variant="caption" fontWeight="medium">
        {subgroup["SubGroupName"]}
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
