/* eslint-disable prettier/prettier */
// @mui material components
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

export default function data() {
  const columns = [
    { Header: "Sub Group Name", accessor: "subGroupName", width: "30%", align: "left" },
    { Header: "Service Name", accessor: "serviceName", width: "30%", align: "left" },
    { Header: "Edit", accessor: "edit", width: "20%", align: "left" },
    { Header: "View", accessor: "view", width: "20%", align: "left" },
    { Header: "Delete", accessor: "delete", width: "20%", align: "left" },
  ];

  const rows = [
    {
      subGroupName: <MDTypography variant="caption" fontWeight="medium">CT Scan</MDTypography>,
      serviceName: <MDTypography variant="caption" fontWeight="medium">Multi Root Canal</MDTypography>,
      edit: <MDButton variant="gradient" fontWeight="medium" style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}>Edit</MDButton>,
      view: <MDButton variant="gradient" fontWeight="medium" style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}>View</MDButton>,
      delete: <MDButton variant="gradient" fontWeight="medium" style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}>Delete</MDButton>,
    },
  ];

  return { columns, rows };
}