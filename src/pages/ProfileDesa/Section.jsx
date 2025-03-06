import LembagaCard from "../../components/Card/LembagaCard";
import HeroRight from "../../components/Hero/HeroRight";
import { useItemContext } from "../../utils/context/ItemProvider";
import { lembaga } from "../../utils/dummy";

const Section = () => {
  const { heroDummy } = useItemContext();

  return (
    <section className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 w-full">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center">
        {heroDummy.map((item, index) => (
          <HeroRight key={index} item={item} className="w-full md:w-auto" />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {lembaga.map((item) => (
          <LembagaCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Section;
