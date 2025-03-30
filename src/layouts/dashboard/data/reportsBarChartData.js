export default (labels = [], datasets = []) => ({
  labels: labels.length > 0 ? labels : ["No Data"],
  datasets: datasets.length > 0 ? datasets : [{ label: "Total Cases", data: [-1] }],
});
