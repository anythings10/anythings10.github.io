import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { dataDummy } from "../../utils/dummy";
// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Extract labels and data
  const labels = dataDummy.map((item) => item.kategori);
  const dataValues = dataDummy.map((item) => item.nilai);

  // Chart configuration
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Distribusi Kategori",
        data: dataValues,
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)", // Prasejahterah
          "rgba(54, 162, 235, 0.7)", // Sejahterah
          "rgba(255, 206, 86, 0.7)", // Kaya
          "rgba(75, 192, 192, 0.7)", // Sedang
          "rgba(153, 102, 255, 0.7)", // Miskin
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw || 0;
            return `${context.label}: ${value} KK`;
          },
        },
      },
    },
  };
  return <Doughnut data={data} options={options} />;
};

export default PieChart;
