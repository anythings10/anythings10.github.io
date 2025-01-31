import { useItemContext } from "../../utils/context/ItemProvider";
import IconDescItem from "../../components/Card/IconDescItem";
import { Typografi } from "../../components/Components";
const JumlahPenduduk = () => {
  const { totalPenduduk } = useItemContext();
  return (
    <section className=" gap-8">
      <Typografi
        variant="h4"
        child="JUMLAH PENDUDUK & KEPALA KELUARGA"
        className="font-bold mb-2 flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-purple-800 to-purple-600"
      />

      <div className="md:flex justify-center grid grid-cols-2 items-center gap-4">
        {totalPenduduk.map((item, index) => (
          <IconDescItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default JumlahPenduduk;
