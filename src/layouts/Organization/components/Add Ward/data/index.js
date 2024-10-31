// @mui material components
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Department", accessor: "department", width: "25%", align: "left" },
    { Header: "Sub Department", accessor: "subDepartment", width: "25%", align: "left" },
    { Header: "Ward Name", accessor: "wardName", width: "25%", align: "left" },
    { Header: "Created Date", accessor: "createdDate", width: "10%", align: "left" },
    { Header: "Created By", accessor: "createdBy", width: "10%", align: "left" },
    { Header: "Modified Date", accessor: "modifiedDate", width: "10%", align: "left" },
    { Header: "Modified By", accessor: "modifiedBy", width: "10%", align: "left" },
    { Header: "Is Deleted", accessor: "isDeleted", width: "5%", align: "center" },
  ];

  const rows = [
    {
      department: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      subDepartment: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      wardName: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      createdDate: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      createdBy: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      modifiedDate: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      modifiedBy: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      isDeleted: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}
