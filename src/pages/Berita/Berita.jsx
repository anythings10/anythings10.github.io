import { Typografi } from "../../components/Components";
import { BeritaProvider } from "../../utils/context/BeritaProvider";
import BeritaContent from "./BeritaContent";

const Berita = () => {
  return (
    <BeritaProvider>
      <section className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 space-y-4 mt-6">
        <Typografi
          variant="h1"
          child="BERITA"
          className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7cb1c7] via-[#2b72ba] to-[#3680F2]"
        />
        <Typografi
          variant="paragraph"
          child="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          className="text-center font-thin"
        />
        <BeritaContent />
      </section>
    </BeritaProvider>
  );
};

export default Berita;
