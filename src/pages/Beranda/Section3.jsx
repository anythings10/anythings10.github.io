import IconDescItem from "../../components/Card/IconDescItem";
import HeroRight from "../../components/Hero/HeroRight";
import { useItemContext } from "../../utils/context/ItemProvider";

const Section3 = () => {
  const { heroDummy, totalPenduduk } = useItemContext();

  return (
    <section className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 gap-6 py-10 sm:py-16 md:py-20 lg:py-24">
      {heroDummy.map((item, index) => (
        <HeroRight
          key={index}
          item={item}
          className="w-full md:w-auto"
          children={
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {totalPenduduk.slice(0, 3).map((item, index) => (
                <IconDescItem
                  key={index}
                  item={item}
                  className="flex items-center sm:block"
                />
              ))}
            </div>
          }
        />
      ))}
    </section>
  );
};

export default Section3;
