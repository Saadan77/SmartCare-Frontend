import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Item Category", accessor: "itemCategory", width: "15%", align: "left" },
    { Header: "Item Type", accessor: "itemType", width: "15%", align: "left" },
    { Header: "Item", accessor: "item", width: "15%", align: "left" },
    { Header: "Min Stock Level", accessor: "minStockLevel", width: "15%", align: "left" },
    { Header: "Recieved Quantity", accessor: "receivedQty", width: "15%", align: "left" },
    { Header: "Left Quantity", accessor: "leftQuantity", width: "15%", align: "left" },
    { Header: "Stock In Hand", accessor: "stockInHand", width: "10%", align: "left" },
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
      minStockLevel: (
        <MDTypography variant="caption" fontWeight="medium">
          500
        </MDTypography>
      ),
      receivedQty: (
        <MDTypography variant="caption" fontWeight="medium">
          100
        </MDTypography>
      ),
      leftQuantity: (
        <MDTypography variant="caption" fontWeight="medium">
          10
        </MDTypography>
      ),
      stockInHand: (
        <MDTypography variant="caption" fontWeight="medium">
          3
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
