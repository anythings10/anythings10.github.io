import React from "react";
import HeroRigt from "../Hero/HeroRight";
import { useItemContext } from "../../utils/context/ItemProvider";
const Section = () => {
  const { heroDummy } = useItemContext();
  return (
    <section className="flex md:flex-row flex-col items-center justify-center max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      {heroDummy.map((item, index) => (
        <HeroRigt key={index} item={item} />
      ))}
    </section>
  );
};

export default Section;
