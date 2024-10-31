import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Ward Name", accessor: "wardName", width: "20%", align: "left" },
    { Header: "Room Number", accessor: "roomNumber", width: "20%", align: "left" },
    { Header: "Bed Number", accessor: "bedNumber", width: "20%", align: "left" },
    { Header: "Bed Type", accessor: "bedType", width: "20%", align: "left" },
    { Header: "Is Occupied", accessor: "isOccupied", width: "20%", align: "left" },
    { Header: "Created Date", accessor: "createdDate", width: "15%", align: "left" },
    { Header: "Created By", accessor: "createdBy", width: "15%", align: "left" },
    { Header: "Modified Date", accessor: "modifiedDate", width: "15%", align: "left" },
    { Header: "Modified By", accessor: "modifiedBy", width: "15%", align: "left" },
    { Header: "Is Deleted", accessor: "isDeleted", width: "5%", align: "center" },
  ];

  const rows = [
    {
      wardName: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      roomNumber: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      bedNumber: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      bedType: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      isOccupied: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      createdDate: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      createdBy: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      modifiedDate: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      modifiedBy: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      isDeleted: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}
