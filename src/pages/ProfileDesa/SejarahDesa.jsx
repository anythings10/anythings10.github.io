import HeroLeft from "../../components/Hero/HeroLeft";
import { useItemContext } from "../../utils/context/ItemProvider";

const SejarahDesa = () => {
  const { heroDummy3 } = useItemContext();

  return (
    <section className="flex mt-10 flex-wrap md:flex-nowrap items-center justify-center max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 gap-4 md:gap-8 w-full">
      {heroDummy3.map((item, index) => (
        <HeroLeft key={index} item={item} className="rounded-lg w-full" />
      ))}
    </section>
  );
};

export default SejarahDesa;
