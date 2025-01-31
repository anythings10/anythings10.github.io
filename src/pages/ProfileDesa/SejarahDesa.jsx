import HeroLeft from "../../components/Hero/HeroLeft";
import { useItemContext } from "../../utils/context/ItemProvider";
const SejarahDesa = () => {
  const { heroDummy3 } = useItemContext();
  return (
    <section className="block h-screen md:grid grid-cols-2 md:grid-cols-2 gap-3 items-center justify-center max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      {heroDummy3.map((item, index) => (
        <HeroLeft key={index} item={item} className="rounded-lg" />
      ))}
    </section>
  );
};

export default SejarahDesa;
