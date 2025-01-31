import { dusunDummy } from "./dummy";

// Data untuk Doughnut Chart
export const dataDusun = {
  labels: dusunDummy.map((item) => item.dusun),
  datasets: [
    {
      data: dusunDummy.map((item) => item.jumlah),
      backgroundColor: dusunDummy.map((item) => item.color),
      hoverOffset: 10,
    },
  ],
};
// Opsi untuk Doughnut Chart
export const optionDusun = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Jumlah Penduduk Berdasarkan Dusun",
    },
  },
  tooltip: {
    callbacks: {
      label: function (tooltipItem) {
        let value = tooltipItem.raw;
        return `${value} Jiwa`;
      },
    },
  },
};

export const optionsBP = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          let label = tooltipItem.dataset.label || "";
          if (label) {
            label += ": ";
          }
          label += formatRupiah(tooltipItem.raw);
          return label;
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value) => formatRupiah(value),
      },
    },
  },
};
const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);

export const optionsReligion = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Jumlah Penduduk Berdasarkan Agama",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
