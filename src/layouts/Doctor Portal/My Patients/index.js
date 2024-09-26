import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const MyPatients = () => {
  const defaultData = {
    labels: ["Waiting List", "My Appointments", "Patients Attended"],
    datasets: [
      {
        data: [12, 15, 8],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "700px", margin: "0 auto" }}>
      <div style={{ width: "100%", height: "400px", marginTop: "20px" }}>
        <Pie data={defaultData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default MyPatients;
