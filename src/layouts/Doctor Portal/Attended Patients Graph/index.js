import React from "react";
import { Line } from "react-chartjs-2";
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

// Register the chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AttendedPatientsGraph = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
    datasets: [
      {
        label: "Attended Patients",
        data: [25, 20, 35, 40, 50, 45, 60, 55, 30],
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 1)",
        borderColor: "rgba(75, 192, 192, 0.8)",
        tension: 0.1,
      },
    ],
  };

  // Configuration options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Attended Patients per Month",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Patients",
        },
      },
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
    },
  };

  return (
    <div style={{ height: "400px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default AttendedPatientsGraph;
