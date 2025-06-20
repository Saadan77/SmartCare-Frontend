import React, { useEffect, useState, useRef } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ProgressLineChart from "examples/Charts/LineCharts/ProgressLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Diseases Data
import DataTable from "examples/Tables/DataTable";
import diseasesData from "./data";
import {
  fetchDiseaseStats,
  fetchComparisonStats,
  fetchAllWeeksData,
} from "services/Dashboard/diseasesService";
import { Box, Typography } from "@mui/material";

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [comparisonData, setComparisonData] = useState([]);
  const [allWeeksData, setAllWeeksData] = useState([]);
  const [diseaseBarChartData, setDiseaseBarChartData] = useState({ labels: [], datasets: [] });
  const [diseaseLineCharts, setDiseaseLineCharts] = useState([]);

  const lineChartRef = useRef(null); // Ref for the line chart section

  const { columns, rows } = diseasesData();

  // Define colors for each disease
  const diseaseColors = {
    Malaria: "error", // Red
    "B. Diarrhea": "info", // Blue
    Typhoid: "warning", // Yellow
    Dengue: "success", // Teal
    "HIV/AIDS": "dark", // Purple
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchDiseaseStats(); // Latest week
        const comparisonResult = await fetchComparisonStats(); // Latest vs previous
        const weeksData = await fetchAllWeeksData(); // All four weeks
        setData(result);
        setComparisonData(comparisonResult);
        setAllWeeksData(weeksData);
        setLoading(false);

        if (weeksData.length > 0) {
          // Prepare data for Bar Chart (two bars per disease: latest two weeks)
          const diseases = result.map((item) => item.Diseases);
          const latestTwoWeeks = weeksData.slice(-2); // Only the latest two for bar chart
          const datasets = latestTwoWeeks.map((weekData, index) => ({
            label: weekData.date,
            data: weekData.data.map((item) => item.Total),
            backgroundColor: index === 0 ? "rgba(54, 162, 235, 0.5)" : "rgba(255, 99, 132, 0.5)", // Current (blue), Previous (red)
          }));
          setDiseaseBarChartData({ labels: diseases, datasets });

          // Prepare Line Charts for each disease across all four weeks
          const lineCharts = diseases.map((disease) => {
            const trendData = weeksData.map((weekData) => {
              const diseaseData = weekData.data.find((d) => d.Diseases === disease);
              return diseaseData ? diseaseData.Total : 0;
            });
            return {
              disease,
              chart: {
                labels: weeksData.map((w) => w.date),
                data: trendData,
              },
            };
          });
          setDiseaseLineCharts(lineCharts);
        }
      } catch (error) {
        console.error("Error loading data:", error);
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox py={3} px={1}>
        <Grid container spacing={3}>
          {/* Dynamic statistics with percentage comparison */}
          {comparisonData.slice(0, 4).map((item, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="info"
                  icon="local_hospital"
                  title={item.Diseases}
                  count={item.Total_current}
                  percentage={{
                    color: item.PercentageChange.startsWith("+") ? "error" : "success",
                    amount: item.PercentageChange,
                    label: "vs previous week",
                  }}
                />
              </MDBox>
            </Grid>
          ))}
        </Grid>

        <Box>
          <Typography
            sx={{ marginTop: 1, marginLeft: 1 }}
            style={{ fontWeight: "bold" }}
            gutterBottom
          >
            <p className="text-base text-[#42424a] font-semibold mr-2">Graph</p>
          </Typography>
        </Box>

        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="dark"
                  title="Disease Cases Comparison"
                  description="Total Cases Across Weeks"
                  date="updated now"
                  chart={diseaseBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="dark"
                  title="Disease Cases"
                  description="Total cases per disease (Current Week)"
                  date="updated now"
                  chart={{
                    labels: data.map((item) => item.Diseases),
                    datasets: [{ label: "Total Cases", data: data.map((item) => item.Total) }],
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>

        <Box>
          <Typography
            sx={{ marginTop: 1, marginLeft: 1 }}
            style={{ fontWeight: "bold" }}
            gutterBottom
          >
            <p className="text-base text-[#42424a] font-semibold mr-2">Trend over the month</p>
          </Typography>
        </Box>

        {/* Individual Disease Line Charts using ProgressLineChart */}
        <MDBox mt={1} ref={lineChartRef}>
          <Grid container spacing={3}>
            {diseaseLineCharts.map((chartItem, index) => {
              return (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <MDBox mb={3}>
                    <ProgressLineChart
                      color={diseaseColors[chartItem.disease] || "info"} // Pass the color for the disease
                      icon="date_range"
                      title={`${chartItem.disease} Trend`}
                      count={chartItem.chart.data[chartItem.chart.data.length - 1]} // Latest week's cases
                      height="10rem"
                      chart={chartItem.chart}
                    />
                  </MDBox>
                </Grid>
              );
            })}
          </Grid>
        </MDBox>

        <Box>
          <Typography
            sx={{ marginTop: 1, marginLeft: 1 }}
            style={{ fontWeight: "bold" }}
            gutterBottom
          >
            <p className="text-base text-[#42424a] font-semibold mr-2">Most cases of the month</p>
          </Typography>
        </Box>

        {/* Disease Table */}
        <MDBox>
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
