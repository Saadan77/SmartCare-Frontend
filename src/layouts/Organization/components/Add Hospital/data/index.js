// @mui material components
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Hospital Name", accessor: "hospitalName", width: "20%", align: "left" },
    { Header: "Region", accessor: "region", width: "10%", align: "left" },
    { Header: "Phone1", accessor: "phone1", width: "10%", align: "left" },
    { Header: "City", accessor: "city", width: "10%", align: "left" },
    { Header: "Country", accessor: "country", width: "10%", align: "left" },
    { Header: "Address", accessor: "address", width: "15%", align: "left" },
    { Header: "Created Date", accessor: "createdDate", width: "10%", align: "left" },
    { Header: "Created By", accessor: "createdBy", width: "10%", align: "left" },
    { Header: "Modified Date", accessor: "modifiedDate", width: "10%", align: "left" },
    { Header: "Modified By", accessor: "modifiedBy", width: "10%", align: "left" },
    { Header: "Is Deleted", accessor: "isDeleted", width: "5%", align: "center" },
  ];

  const rows = [
    {
      hospitalName: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      region: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      phone1: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      city: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      country: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      address: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      createdDate: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      createdBy: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      modifiedDate: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      modifiedBy: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      isDeleted: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}
