import React, { useEffect, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Diseases Data
import DataTable from "examples/Tables/DataTable";
import diseasesData from "./data";
import { fetchDiseaseStats } from "services/Dashboard/diseasesService";

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  const { columns, rows } = diseasesData();

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchDiseaseStats();
      setData(result);
      setLoading(false);

      if (result.length > 0) {
        const labels = result.map((item) => item.Diseases);
        const dataset = result.map((item) => item.Total);
        setChartData({
          labels: labels,
          datasets: { label: "Total Cases", data: dataset },
        });
      }
    };
    loadData();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3} px={1}>
        <Grid container spacing={3}>
          {/* Dynamic statistics */}
          {data.slice(0, 4).map((item, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="info"
                  icon="local_hospital"
                  title={item.Diseases}
                  count={item.Total}
                  percentage={{
                    color: "success",
                    amount: "+10%",
                    label: "increase from last month",
                  }}
                />
              </MDBox>
            </Grid>
          ))}
        </Grid>

        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="primary"
                  title="Disease Cases"
                  description="Total cases per disease"
                  chart={chartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Cases Trend"
                  description="Disease case trends over months"
                  chart={chartData}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>

        {/* Disease Table */}
        <MDBox mt={4.5}>
          <DataTable
            table={{ columns, rows }}
            showTotalEntries={true}
            isSorted={true}
            noEndBorder
            entriesPerPage={false}
          />
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
