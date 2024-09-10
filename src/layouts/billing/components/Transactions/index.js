/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";

// Billing page components
import Transaction from "layouts/billing/components/Transaction";

function Transactions() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Invoice
        </MDTypography>
      </MDBox>
      <MDBox pt={3} pb={2} px={2}>
        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            treatments
          </MDTypography>
        </MDBox>
        <MDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            name="X Ray"
            description="27 March 2020, at 12:30 PM"
            value="Pkr. 2,500"
          />
          <Transaction
            color="success"
            name="Blood test"
            description="27 March 2020, at 04:30 AM"
            value="Pkr. 2,000"
          />
        </MDBox>
        <MDBox mt={1} mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            Diagnostics
          </MDTypography>
        </MDBox>
        <MDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            name="CT Scan"
            description="26 March 2020, at 13:45 PM"
            value="Pkr. 750"
          />
        </MDBox>
      </MDBox>
      <MDBox display="flex" justifyContent="space-between" alignItems="end" py={1} px={2} mb={1}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Total:
        </MDTypography>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Rs. 5250
        </MDTypography>
      </MDBox>
    </Card>
  );
}

export default Transactions;
