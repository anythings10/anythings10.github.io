import ButtonCardList from "../../components/Card/ButtonCardList";
import { Typografi } from "../../components/Components";
import { useItemContext } from "../../utils/context/ItemProvider";

const Section2 = () => {
  const { visitData } = useItemContext();
  return (
    <section
      data-aos="fade-up"
      className="h-full md:h-screen relative flex flex-col items-center justify-center max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <Typografi
        variant="paragraph"
        child="SUDAH SIAP ?"
        className="font-light flex justify-center items-center mb-2 text-center"
      />
      <Typografi
        variant="h2"
        child="AYO JELAJAHI DESA"
        className="flex justify-center items-center mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-purple-800 to-purple-600 text-center"
      />
      <div className="grid grid-cols-1 gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        {visitData.map((item, index) => (
          <ButtonCardList key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Section2;
