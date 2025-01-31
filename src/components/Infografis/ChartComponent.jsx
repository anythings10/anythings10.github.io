import React from "react";
import BarChart from "../Chart/BarChart";
import VerticalChart from "../Chart/VerticalChart";
import DonatChart from "../Chart/DonatChart";
import { dataReligion } from "../../utils/dummy";
import {
  dataDusun,
  optionDusun,
  optionsReligion,
} from "../../utils/LabelCHarts";
const ChartComponent = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4 items-center justify-center h-screen ">
      <div className="w-full md:w-2/3 h-[400px] border bg-white shadow-lg rounded-lg flex items-center justify-center">
        <BarChart />
      </div>

      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <div className="h-[200px] border bg-white shadow-md rounded-lg flex items-center justify-center">
          <VerticalChart data={dataReligion} options={optionsReligion} />
        </div>
        <div className="h-[200px] border bg-white shadow-lg flex justify-center rounded-lg ">
          <DonatChart data={dataDusun} options={optionDusun} />
        </div>
      </div>
    </section>
  );
};

export default ChartComponent;
