// @mui material components
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Medicine", accessor: "medicine", width: "10%", align: "left" },
    { Header: "Dosage", accessor: "dosage", width: "10%", align: "left" },
    { Header: "Frequency", accessor: "frequency", width: "10%", align: "left" },
    { Header: "Duration", accessor: "duration", width: "10%", align: "left" },
    { Header: "Requested Quantity", accessor: "requestedQuantity", width: "10%", align: "left" },
    { Header: "Route", accessor: "route", width: "10%", align: "left" },
    {
      Header: "Special Instructions",
      accessor: "specialInstructions",
      width: "10%",
      align: "left",
    },
    { Header: "Adviced By", accessor: "advicedBy", width: "20%", align: "left" },
    { Header: "Send Back Medicines", accessor: "sendBackMedicines", width: "10%", align: "left" },
  ];

  const rows = [
    {
      medicine: (
        <MDTypography variant="caption" fontWeight="medium">
          Panadol 500mg tablets
        </MDTypography>
      ),
      dosage: (
        <MDTypography variant="caption" fontWeight="medium">
          1+1+1
        </MDTypography>
      ),
      frequency: (
        <MDTypography variant="caption" fontWeight="medium">
          8 Hourly
        </MDTypography>
      ),
      duration: (
        <MDTypography variant="caption" fontWeight="medium">
          3
        </MDTypography>
      ),
      requestedQuantity: (
        <MDTypography variant="caption" fontWeight="medium">
          9
        </MDTypography>
      ),
      route: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      specialInstructions: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      advicedBy: (
        <MDTypography variant="caption" fontWeight="medium">
          DR. JOHN
        </MDTypography>
      ),
      sendBackMedicines: (
        <MDButton
          variant="gradient"
          style={{
            borderRadius: 0,
            minHeight: 0,
            backgroundColor: "#1694c4",
            color: "White",
          }}
        >
          <button type="submit" className="text-xs">
            SEND BACK
          </button>
        </MDButton>
      ),
    },
  ];

  return { columns, rows };
}
