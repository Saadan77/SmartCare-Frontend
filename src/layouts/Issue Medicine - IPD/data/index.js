// @mui material components
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Mr No.", accessor: "mrNo", width: "10%", align: "left" },
    { Header: "Patient Name", accessor: "patientName", width: "10%", align: "left" },
    { Header: "Bed No.", accessor: "bedNo", width: "10%", align: "left" },
    { Header: "Requisition No.", accessor: "requisitionNo", width: "10%", align: "left" },
    {
      Header: "Requisition Status",
      accessor: "requisitionStatus",
      width: "10%",
      align: "left",
    },
    { Header: "Requisition By", accessor: "requisitionBy", width: "10%", align: "left" },
  ];

  const rows = [
    {
      patientName: (
        <MDTypography variant="caption" fontWeight="medium">
          John Smith
        </MDTypography>
      ),
      mrNo: (
        <MDTypography variant="caption" fontWeight="medium">
          00001-01-10-2024
        </MDTypography>
      ),
      bedNo: (
        <MDTypography variant="caption" fontWeight="medium">
          Extra Bed
        </MDTypography>
      ),
      requisitionNo: (
        <MDTypography variant="caption" fontWeight="medium">
          REQ-0001231
        </MDTypography>
      ),
      requisitionStatus: (
        <MDTypography variant="caption" fontWeight="medium">
          Pending
        </MDTypography>
      ),
      requisitionBy: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
    {
      patientName: (
        <MDTypography variant="caption" fontWeight="medium">
          Ahmed
        </MDTypography>
      ),
      mrNo: (
        <MDTypography variant="caption" fontWeight="medium">
          00002-01-10-2024
        </MDTypography>
      ),
      bedNo: (
        <MDTypography variant="caption" fontWeight="medium">
          Extra Bed
        </MDTypography>
      ),
      requisitionNo: (
        <MDTypography variant="caption" fontWeight="medium">
          REQ-0001232
        </MDTypography>
      ),
      requisitionStatus: (
        <MDTypography variant="caption" fontWeight="medium">
          Pending
        </MDTypography>
      ),
      requisitionBy: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}
