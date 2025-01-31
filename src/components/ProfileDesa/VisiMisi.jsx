import { useItemContext } from "../../utils/context/ItemProvider";
import HeroLeft from "../Hero/HeroLeft";

const VisiMisi = () => {
  const { heroDummy2 } = useItemContext();
  return (
    <section className="lock md:grid grid-cols-2 md:grid-cols-2 gap-3 items-center justify-center max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      {heroDummy2.map((item, index) => (
        <HeroLeft
          key={index}
          item={item}
          className="block mx-auto w-full h-auto max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] mb-5 md:mb-0 justify-center items-center"
        />
      ))}
    </section>
  );
};

export default VisiMisi;
