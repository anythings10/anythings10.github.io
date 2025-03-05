import { Fragment } from "react";
import { useApbDes } from "../../utils/context/ApbDesContext";
import DisplayData from "./DisplayData";
import { Typografi } from "../../components/Components";
import VerticalChart from "../../components/Chart/VerticalChart";
const ApbDes = () => {
  const { state } = useApbDes();
  return (
    <Fragment>
      <DisplayData />
      <section className="my-10">
        <Typografi
          variant="h3"
          child="Pendapatan dan Belanja Desa dari Tahun ke Tahun"
          className="font-bold mb-2 justify-start items-start text-transparent bg-clip-text bg-gradient-to-r from-[#7cb1c7] via-[#2b72ba] to-[#3680F2]"
        />
        <div className="w-full h-[400px] border bg-white shadow-lg rounded-lg p-4 flex justify-center items-center">
          <VerticalChart data={state.chartData} />
        </div>
      </section>
    </Fragment>
  );
};

export default ApbDes;
