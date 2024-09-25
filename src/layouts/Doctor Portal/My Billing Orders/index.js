// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import data from "./data";

function MyBillingOrders() {
  const { columns, rows } = data();

  return (
    <DataTable
      table={{ columns, rows }}
      showTotalEntries={true}
      isSorted={true}
      noEndBorder
      entriesPerPage={false}
    />
  );
}

export default MyBillingOrders;
