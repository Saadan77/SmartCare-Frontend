export default (labels = [], data = []) => ({
  sales: {
    labels: labels.length > 0 ? labels : ["No Data"],
    datasets: { label: "Total Cases", data: data.length > 0 ? data : [0] },
  },
});
