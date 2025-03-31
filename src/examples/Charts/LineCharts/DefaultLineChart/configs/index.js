// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";

function configs(labels, datasets) {
  // Define colors for each disease
  const diseaseColors = {
    Malaria: "rgba(255, 99, 132, 1)", // Red
    "B. Diarrhea": "rgba(54, 162, 235, 1)", // Blue
    Typhoid: "rgba(255, 206, 86, 1)", // Yellow
    Dengue: "rgba(75, 192, 192, 1)", // Teal
    "HIV/AIDS": "rgba(153, 102, 255, 1)", // Purple
  };

  return {
    data: {
      labels,
      datasets: datasets.map((dataset) => ({
        label: dataset.label,
        data: dataset.data,
        borderColor: diseaseColors[dataset.label] || "rgba(0, 0, 0, 1)", // Fallback color
        backgroundColor: diseaseColors[dataset.label] || "rgba(0, 0, 0, 1)",
        fill: false,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 5,
        borderWidth: 2,
      })),
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true, // Show legend to differentiate diseases
          position: "top",
          labels: {
            color: "#b2b9bf",
            font: {
              size: 11,
              family: typography.fontFamily,
              style: "normal",
            },
          },
        },
        tooltip: {
          mode: "index",
          intersect: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: "#c1c4ce5c",
          },
          ticks: {
            display: true,
            padding: 10,
            color: "#b2b9bf",
            font: {
              size: 11,
              family: typography.fontFamily,
              style: "normal",
              lineHeight: 2,
            },
            beginAtZero: true,
            suggestedMax: Math.max(...datasets.flatMap((ds) => ds.data)) * 1.1,
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: true,
            borderDash: [5, 5],
            color: "#c1c4ce5c",
          },
          ticks: {
            display: true,
            color: "#b2b9bf",
            padding: 20,
            font: {
              size: 11,
              family: typography.fontFamily,
              style: "normal",
              lineHeight: 2,
            },
          },
        },
      },
      animation: {
        duration: 2000, // 2 seconds for a slightly slow animation
        easing: "easeInOutQuad",
        onProgress: (animation) => {
          // Animate the line drawing from start to finish
          const chart = animation.chart;
          chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i);
            meta.data.forEach((element, index) => {
              const progress = animation.currentStep / animation.numSteps;
              const targetValue = dataset.data[index];
              element._model = element._model || {};
              element._model.x = element.x; // Keep x position
              element._model.y = element.y; // Keep y position for the line
              if (index / dataset.data.length > progress) {
                element.hidden = true; // Hide points beyond the current progress
              } else {
                element.hidden = false;
              }
            });
          });
        },
        onComplete: (animation) => {
          const chart = animation.chart;
          chart.data.datasets.forEach((dataset) => {
            dataset.animationCompleted = true; // Mark animation as complete
          });
        },
      },
    },
  };
}

export default configs;
