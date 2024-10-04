// @mui material components
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Item Category", accessor: "itemCategory", width: "50%", align: "left" },
    { Header: "Item Type", accessor: "itemType", width: "50%", align: "left" },
  ];

  const rows = [
    {
      itemCategory: (
        <MDTypography variant="caption" fontWeight="medium">
          Consumable
        </MDTypography>
      ),
      itemType: (
        <MDTypography variant="caption" fontWeight="medium">
          Bag
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
