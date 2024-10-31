// @mui material components
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Ward Name", accessor: "wardName", width: "30%", align: "left" },
    { Header: "Room Number", accessor: "roomNumber", width: "40%", align: "left" },
    { Header: "Room Type", accessor: "roomType", width: "30%", align: "left" },
    { Header: "Created Date", accessor: "createdDate", width: "10%", align: "left" },
    { Header: "Created By", accessor: "createdBy", width: "10%", align: "left" },
    { Header: "Modified Date", accessor: "modifiedDate", width: "10%", align: "left" },
    { Header: "Modified By", accessor: "modifiedBy", width: "10%", align: "left" },
    { Header: "Is Deleted", accessor: "isDeleted", width: "5%", align: "center" },
  ];

  const rows = [
    {
      wardName: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      roomNumber: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      roomType: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      createdDate: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      createdBy: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      modifiedDate: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      modifiedBy: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      isDeleted: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}
