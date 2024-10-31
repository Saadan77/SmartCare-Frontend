// @mui material components
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "SubDepartment Name", accessor: "subDepartmentName", width: "25%", align: "left" },
    { Header: "Specialty", accessor: "specialty", width: "25%", align: "left" },
    { Header: "Created Date", accessor: "createdDate", width: "15%", align: "left" },
    { Header: "Created By", accessor: "createdBy", width: "15%", align: "left" },
    { Header: "Modified Date", accessor: "modifiedDate", width: "15%", align: "left" },
    { Header: "Modified By", accessor: "modifiedBy", width: "15%", align: "left" },
    { Header: "Is Deleted", accessor: "isDeleted", width: "5%", align: "center" },
  ];

  const rows = [
    {
      subDepartmentName: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      specialty: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      createdDate: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      createdBy: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      modifiedDate: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      modifiedBy: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      isDeleted: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}
