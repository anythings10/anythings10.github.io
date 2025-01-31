import HeroRight from "../../components/Hero/HeroRight";
import { useItemContext } from "../../utils/context/ItemProvider";
const Section = () => {
  const { heroDummy } = useItemContext();
  return (
    <section className="flex md:flex-row flex-col items-center justify-center max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      {heroDummy.map((item, index) => (
        <HeroRight key={index} item={item} />
      ))}
    </section>
  );
};

export default Section;
