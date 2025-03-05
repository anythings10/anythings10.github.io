import { dataStunting } from "../../utils/dummy";
import VerticalChart from "../../components/Chart/VerticalChart";
import { Typografi } from "../../components/Components";

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
        className="font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-[#7cb1c7] via-[#2b72ba] to-[#3680F2]"
      />
      <VerticalChart data={dataStunting} options={optionsStunting} />
    </section>
  );
};

export default Stunting;
