import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import MDButton from "components/MDButton";
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MedicationGraph = () => {
  const [range, setRange] = useState("all");
  const [graphData, setGraphData] = useState(null);

  const defaultData = {
    labels: ["Panadol", "Calamox", "Brufen", "Flagyl"],
    datasets: [
      {
        label: "Medication Count",
        data: [25, 30, 45, 18],
        fill: false,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.1,
      },
    ],
  };

  const handleDrawGraph = () => {
    // Logic for filtering the data based on selected dates or range (use default data for demo)
    setGraphData(defaultData);
  };

  const handlePrintReport = () => {
    window.print(); // Print the statistic report
  };

  return (
    <div style={{ width: "700px", margin: "0 auto" }}>
      <h2>Medication Graph</h2>

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

export default MedicationGraph;
