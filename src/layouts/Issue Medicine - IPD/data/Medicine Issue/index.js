// @mui material components
import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Medicine", accessor: "medicine", width: "25", align: "left" },
    { Header: "Requested Qty", accessor: "requestedQuantity", width: "25", align: "left" },
    { Header: "Stock in Hand", accessor: "stockInHand", width: "25", align: "left" },
    { Header: "To be Dispense Qty", accessor: "toBeDispenseQty", width: "25", align: "left" },
    {
      Header: "Diagnosed/LP",
      accessor: "diagnosedLp",
      width: "25",
      align: "left",
    },
  ];

  const rows = [
    {
      medicine: (
        <MDTypography variant="caption" fontWeight="medium">
          Panadol 500mg tablets
        </MDTypography>
      ),
      requestedQuantity: (
        <MDTypography variant="caption" fontWeight="medium">
          1.0
        </MDTypography>
      ),
      stockInHand: (
        <MDTypography variant="caption" fontWeight="medium">
          399
        </MDTypography>
      ),
      toBeDispenseQty: (
        <MDTypography variant="caption" fontWeight="medium">
          1
        </MDTypography>
      ),
      diagnosedLp: (
        <MDTypography variant="caption" fontWeight="medium">
          {/* Select Menu */}
          <div className="flex items-center">
            <select
              id="dispensed"
              name="dispensed"
              //   value={patient.dispensed}
              //   onChange={handleInputChange}
              required
              //   className={`block w-full h-8 border ${
              //     errors.dispensed ? "border-red-500" : "border-gray-300"
              //   } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              className={`mr-2 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            >
              <option value="Dispensed">Dispensed</option>
            </select>
          </div>
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
