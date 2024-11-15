/* eslint-disable prettier/prettier */
// @mui material components
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import React, { useContext } from "react";
import { AddServiceContext } from "context/Group Context/Add Service";

export default function data() {
  const { services } = useContext(AddServiceContext);

  const columns = [
    // { Header: "Sub Group Name", accessor: "subGroupName", width: "30%", align: "left" },
    { Header: "Service Name", accessor: "serviceName", width: "40%", align: "left" },
    { Header: "Edit", accessor: "edit", width: "20%", align: "left" },
    { Header: "View", accessor: "view", width: "20%", align: "left" },
    { Header: "Delete", accessor: "delete", width: "20%", align: "left" },
  ];

  const rows = services.map((service) => ({
    // subGroupName: (
    //   <MDTypography variant="caption" fontWeight="medium">
    //     {subgroup["SubGroupName"]}
    //   </MDTypography>
    // ),
    serviceName: (
      <MDTypography variant="caption" fontWeight="medium">
        {service["ServiceName"]}
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