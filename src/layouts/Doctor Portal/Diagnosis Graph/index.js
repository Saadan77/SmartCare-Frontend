// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import data from "./data";
import DiagnosisGraph from "./Graph";

function Diagnosis() {
  const { columns, rows } = data();

  return (
    <div>
      <DiagnosisGraph />
      <DataTable
        table={{ columns, rows }}
        showTotalEntries={true}
        isSorted={true}
        noEndBorder
        entriesPerPage={false}
      />
    </div>
  );
}

export default Diagnosis;
