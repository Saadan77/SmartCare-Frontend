import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { RadioGroup, Radio, FormControlLabel, Button, TextField, Grid } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import MDButton from "components/MDButton";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DiagnosisGraph = () => {
  const [range, setRange] = useState("all");
  const [graphData, setGraphData] = useState(null);

  const defaultData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
    datasets: [
      {
        label: "Diagnosis Count",
        data: [5, 10, 3, 8, 12, 6, 9, 11, 15],
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.1,
      },
    ],
  };

  const handleDrawGraph = () => {
    // Here you can implement logic to filter the data based on selected dates or range.
    // For demo purposes, we are just using default data.
    setGraphData(defaultData);
  };

  const handlePrintReport = () => {
    window.print(); // Simple print command for browser
  };

  return (
    <div style={{ width: "700px", margin: "0 auto" }}>
      <h2>Diagnosis Graph</h2>

      {/* Radio Buttons for Date Range Selection */}
      <RadioGroup row value={range} onChange={(e) => setRange(e.target.value)}>
        <FormControlLabel value="all" control={<Radio />} label="All Data" />
        <FormControlLabel value="thisMonth" control={<Radio />} label="This Month" />
        <FormControlLabel value="lastMonth" control={<Radio />} label="Last Month" />
      </RadioGroup>

      {/* Draw Graph Button */}
      <MDButton
        variant="contained"
        color="primary"
        onClick={handleDrawGraph}
        style={{ marginTop: "10px" }}
      >
        Draw Graph
      </MDButton>

      {/* Print Report Button */}
      <MDButton
        variant="contained"
        color="secondary"
        onClick={handlePrintReport}
        style={{ marginLeft: "10px", marginTop: "10px" }}
      >
        Print Report
      </MDButton>

      {/* Display the Graph */}
      {graphData && (
        <div style={{ width: "100%", height: "400px", marginTop: "20px" }}>
          <Line data={graphData} options={{ maintainAspectRatio: false }} />
        </div>
      )}
    </div>
  );
};

export default DiagnosisGraph;
