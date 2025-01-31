import React from "react";
import { dataStunting } from "../utils/dummy";
import VerticalChart from "../components/Chart/VerticalChart";
import { Typografi } from "../components/Components";

const optionsStunting = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Tingkat Stunting di Indonesia (%) per Tahun",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
const Stunting = () => {
  return (
    <section>
      <Typografi
        variant="h3"
        child="DATA STUNTING DESA DIGITAL"
        className="font-bold text-transparent mt-12 bg-clip-text bg-gradient-to-r from-red-800 via-purple-800 to-purple-600"
      />
      <VerticalChart data={dataStunting} options={optionsStunting} />
    </section>
  );
};

export default Stunting;
