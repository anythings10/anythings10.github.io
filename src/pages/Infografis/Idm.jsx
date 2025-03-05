import FlatCardItem from "../../components/Card/FlatCarditem";
import LineChart from "../../components/Chart/LineChart";
import { Typografi } from "../../components/Components";
import { idmData } from "../../utils/LabelCHarts";
import { dataIDM, idmList } from "../../utils/dummy";

const Idm = () => {
  console.log(idmList);
  return (
    <section>
      <Typografi
        variant="h3"
        child={`INDEKS DESA MEMBANGUN (IDM) ${dataIDM.desa}`}
        className="font-bold  mt-12 text-transparent bg-clip-text bg-gradient-to-r from-[#7cb1c7] via-[#2b72ba] to-[#3680F2]"
      />
      <Typografi
        variant="paragraph"
        child={dataIDM.lokasi}
        className="font-thin"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {idmList.map((item, index) => (
          <FlatCardItem key={index} item={item} />
        ))}
      </div>
      <div className="bg-white p-10 rounded-lg shadow-md mt-10 border">
        <Typografi
          variant="h4"
          child="PERKEMBANGAN IDM"
          className="font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#7cb1c7] via-[#2b72ba] to-[#3680F2]"
        />
        <LineChart data={idmData} />
      </div>
      <div className="mt-10">
        <Typografi
          variant="h4"
          child="PROGRAM PEMBANGUNAN DESA"
          className="font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#7cb1c7] via-[#2b72ba] to-[#3680F2]"
        />
        <ul className="bg-white p-6 rounded-lg border shadow-md">
          {dataIDM.program.map((program, index) => (
            <li key={index} className="border-b py-2">
              {program}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Idm;
