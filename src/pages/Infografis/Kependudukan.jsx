import { useItemContext } from "../../utils/context/ItemProvider";
import HeroRigt from "../../components/Hero/HeroRight";
import JumlahPenduduk from "./JumlahPenduduk";
import ChartComponent from "./ChartComponent";
import SimpleTable from "../../components/SimpleTable";
import { dummyPekerjaan } from "../../utils/dummy";
import { Typografi } from "../../components/Components";
const Kependudukan = () => {
  const { heroDummy4 } = useItemContext();
  return (
    <>
      <section className="flex md:flex-row flex-col items-center justify-center">
        {heroDummy4.map((item, index) => (
          <HeroRigt key={index} item={item} />
        ))}
      </section>
      <JumlahPenduduk />
      <ChartComponent />
      <Typografi
        variant="h3"
        child="BERDASARKAN PEKERJAAN"
        className="font-bold flex justify-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#7cb1c7] via-[#2b72ba] to-[#3680F2]"
      />
      <SimpleTable items={dummyPekerjaan} />
    </>
  );
};

export default Kependudukan;
