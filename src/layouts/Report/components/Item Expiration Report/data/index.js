import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Item Category", accessor: "itemCategory", width: "15%", align: "left" },
    { Header: "Item Type", accessor: "itemType", width: "15%", align: "left" },
    { Header: "Item", accessor: "item", width: "15%", align: "left" },
    { Header: "Batch No.", accessor: "batchNo", width: "15%", align: "left" },
    { Header: "Manufactor Date", accessor: "manufactorDate", width: "15%", align: "left" },
    { Header: "Expiry Date", accessor: "expiryDate", width: "15%", align: "left" },
    { Header: "Days left to Expire", accessor: "daysLeftToExpire", width: "10%", align: "left" },
  ];

  const rows = [
    {
      itemCategory: (
        <MDTypography variant="caption" fontWeight="medium">
          Consumbale
        </MDTypography>
      ),
      itemType: (
        <MDTypography variant="caption" fontWeight="medium">
          Syrup
        </MDTypography>
      ),
      item: (
        <MDTypography variant="caption" fontWeight="medium">
          Panadol
        </MDTypography>
      ),
      batchNo: (
        <MDTypography variant="caption" fontWeight="medium">
          00001
        </MDTypography>
      ),
      manufactorDate: (
        <MDTypography variant="caption" fontWeight="medium">
          30/09/2024
        </MDTypography>
      ),
      expiryDate: (
        <MDTypography variant="caption" fontWeight="medium">
          01/10/2024
        </MDTypography>
      ),
      daysLeftToExpire: (
        <MDTypography variant="caption" fontWeight="medium">
          3
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
