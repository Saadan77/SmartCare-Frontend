// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Card from "@mui/material/Card";

// Data
import data from "./data";
import InvestigationGraph from "./Graph";

function InvestigationGraphAccordion() {
  const { columns, rows } = data();

  return (
    <div>
      <InvestigationGraph />
      <Card>
        <MDBox display="flex" alignItems="center" p={3}>
          <MDBox>
            <MDTypography variant="h6" gutterBottom>
              Investigation Details
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox>
          <DataTable
            table={{ columns, rows }}
            showTotalEntries={true}
            isSorted={true}
            noEndBorder
            entriesPerPage={false}
          />
        </MDBox>
      </Card>
    </div>
  );
}

export default InvestigationGraphAccordion;
