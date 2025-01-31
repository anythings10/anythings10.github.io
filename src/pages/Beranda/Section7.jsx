import ButtonCardList from "../../components/Card/ButtonCardList";
import { Typografi } from "../../components/Components";
import { useNewsContext } from "../../utils/context/NewsProvider";

const Section7 = () => {
  const { beritaDummy } = useNewsContext();
  return (
    <section
      data-aos="zoom-out"
      className="h-full md:h-screen relative flex flex-col items-center justify-center max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <Typografi
        variant="h1"
        child="BERITA DESA"
        className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-purple-800 to-purple-600"
      />
      <Typografi
        variant="paragraph"
        child="lorem ipsum dolor sit amet, consectetur adipiscing elit."
        className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg font-thin mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {beritaDummy.slice(0, 4).map((item) => (
          <ButtonCardList key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Section7;
