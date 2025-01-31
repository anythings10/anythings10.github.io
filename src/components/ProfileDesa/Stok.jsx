import stokimg from "../../assets/stok.png";
import { Typografi } from "../Components";
const Stok = () => {
  return (
    <section className="sm:h-screen h-full flex flex-col items-center justify-center max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <Typografi
        variant="h2"
        child="STRUKTUR ORGANISASI DESA DIGITAL"
        className="flex justify-center items-center mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-purple-800 to-purple-600 text-center"
      />
      <div className="bg-gradient-to-r from-red-800 via-purple-800 to-purple-600 rounded-xl shadow-xl p-3">
        <div className="bg-[#f6f7ff] shadow-sm rounded-xl p-6">
          <img src={stokimg} alt="stok" />
        </div>
      </div>
    </section>
  );
};

export default Stok;
