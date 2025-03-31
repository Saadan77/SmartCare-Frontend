function configs(labels, datasets) {
  return {
    data: {
      labels,
      datasets: datasets.map((dataset, index) => ({
        label: dataset.label,
        tension: 0.4,
        borderWidth: 0,
        borderRadius: 4,
        borderSkipped: false,
        backgroundColor: index === 0 ? "rgba(255, 99, 132, 0.8)" : "rgba(54, 162, 235, 0.8)",
        data: dataset.data,
        maxBarThickness: 6,
      })),
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#f8f9fa",
            font: {
              size: 14,
              family: "Roboto",
              weight: 300,
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
            color: "rgba(255, 255, 255, .2)",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: Math.max(...datasets.flatMap((ds) => ds.data)) * 1.1,
            beginAtZero: true,
            padding: 10,
            font: {
              size: 14,
              weight: 300,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
            color: "#fff",
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: "rgba(255, 255, 255, .2)",
          },
          ticks: {
            display: true,
            color: "#f8f9fa",
            padding: 10,
            font: {
              size: 14,
              weight: 300,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
      },
      animation: {
        duration: 2000,
        easing: "easeInOutQuad",
        onProgress: (animation) => {
          const chart = animation.chart;
          chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i);
            meta.data.forEach((bar, index) => {
              const progress = animation.currentStep / animation.numSteps;
              const targetValue = dataset.data[index];
              bar._model = bar._model || {};
              bar._model.y = chart.scales.y.getPixelForValue(targetValue * (1 - progress));
            });
          });
        },
        onComplete: (animation) => {
          const chart = animation.chart;
          chart.data.datasets.forEach((dataset) => {
            dataset.animationCompleted = true;
          });
        },
      },
    },
  };
}

export default configs;
