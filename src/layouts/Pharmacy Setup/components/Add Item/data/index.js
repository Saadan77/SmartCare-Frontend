// @mui material components
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Item Category", accessor: "itemCategory", width: "10%", align: "left" },
    { Header: "Item Type", accessor: "itemType", width: "10%", align: "left" },
    { Header: "Item Name", accessor: "itemName", width: "10%", align: "left" },
    { Header: "Generic", accessor: "generic", width: "10%", align: "left" },
    { Header: "Abbreviation", accessor: "abbreviation", width: "5%", align: "left" },
    { Header: "Manufacturer", accessor: "manufacturer", width: "5%", align: "left" },
    { Header: "Potency", accessor: "potency", width: "10%", align: "left" },
    { Header: "Weight / Volume", accessor: "weightVolume", width: "10%", align: "left" },
    { Header: "Accounting Unit", accessor: "accounttingUnit", width: "10%", align: "left" },
    { Header: "Attribute", accessor: "attribute", width: "10%", align: "left" },
    { Header: "Item Nature", accessor: "itemNature", width: "10%", align: "left" },
    { Header: "Dosage Type", accessor: "dosageType", width: "10%", align: "left" },
  ];

  const rows = [
    {
      itemCategory: (
        <MDTypography variant="caption" fontWeight="medium">
          Medicines
        </MDTypography>
      ),
      itemType: (
        <MDTypography variant="caption" fontWeight="medium">
          Tablets
        </MDTypography>
      ),
      itemName: (
        <MDTypography variant="caption" fontWeight="medium">
          Panadol
        </MDTypography>
      ),
      generic: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      abbreviation: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      manufacturer: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      potency: (
        <MDTypography variant="caption" fontWeight="medium">
          50 mg
        </MDTypography>
      ),
      weightVolume: (
        <MDTypography variant="caption" fontWeight="medium">
          0.0
        </MDTypography>
      ),
      accounttingUnit: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      attriute: (
        <MDTypography variant="caption" fontWeight="medium">
          Expiry Unit
        </MDTypography>
      ),
      itemNature: (
        <MDTypography variant="caption" fontWeight="medium">
          IPVMS
        </MDTypography>
      ),
      dosageType: (
        <MDTypography variant="caption" fontWeight="medium">
          Tablet
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
