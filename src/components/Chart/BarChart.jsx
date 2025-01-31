import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { populationData } from "../../utils/dummy";

// Registrasi komponen yang diperlukan
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Jumlah Penduduk berdasarkan Jenis Kelamin dan Umur",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Tahun",
        },
        stacked: true, // Mengaktifkan stacking pada sumbu X
      },
      y: {
        title: {
          display: true,
          text: "Jumlah",
        },
        stacked: true, // Mengaktifkan stacking pada sumbu Y
      },
    },
  };
  return <Bar data={populationData} options={options} />;
};

export default BarChart;
