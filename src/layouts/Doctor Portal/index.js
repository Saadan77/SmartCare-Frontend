import React, { useState } from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Icon,
  Box,
  Container,
  Paper,
  Grid,
} from "@mui/material";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MyDutyRoster from "./My Duty Roster";
import MyBillingOrders from "./My Billing Orders";
import Investigation from "./Investigation";

function DoctorPortal() {
  const [expandedAccordions, setExpandedAccordions] = useState({
    dutyRoster: false,
    billingOrders: false,
    investigation: false,
  });

  const handleAccordionToggle = (accordionId) => () => {
    setExpandedAccordions((prevState) => ({
      ...prevState,
      [accordionId]: !prevState[accordionId],
    }));
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Container
        sx={{
          maxWidth: "100% !important",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
          marginLeft: "0 !important",
          marginRight: "0 !important",
        }}
      >
        <Paper
          elevation={3}
          sx={{ padding: 2, marginTop: 3, position: "relative" }}
          className="h-full"
        >
          <Box>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Doctor Portal</p>
            </Typography>
          </Box>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
            <Grid
              item
              xs={12}
              sm={12}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Accordion
                expanded={expandedAccordions.dutyRoster}
                onChange={handleAccordionToggle("dutyRoster")}
              >
                <AccordionSummary
                  expandIcon={<Icon>{expandedAccordions.dutyRoster ? "-" : "+"}</Icon>}
                  aria-controls="duty-roster-content"
                  id="duty-roster-header"
                >
                  <Typography variant="h6">My Duty Roster</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <MyDutyRoster />
                </AccordionDetails>
              </Accordion>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Accordion
                expanded={expandedAccordions.billingOrders}
                onChange={handleAccordionToggle("billingOrders")}
              >
                <AccordionSummary
                  expandIcon={<Icon>{expandedAccordions.billingOrders ? "-" : "+"}</Icon>}
                  aria-controls="billing-orders-content"
                  id="billing-orders-header"
                >
                  <Typography variant="h6">My Billing Orders</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <MyBillingOrders />
                </AccordionDetails>
              </Accordion>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Accordion
                expanded={expandedAccordions.investigation}
                onChange={handleAccordionToggle("investigation")}
              >
                <AccordionSummary
                  expandIcon={<Icon>{expandedAccordions.investigation ? "-" : "+"}</Icon>}
                  aria-controls="investigation-content"
                  id="investigation-header"
                >
                  <Typography variant="h6">Investigation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Investigation />
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </DashboardLayout>
  );
}

export default DoctorPortal;
