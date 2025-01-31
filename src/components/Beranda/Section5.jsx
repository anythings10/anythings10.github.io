import React from "react";
import { Typografi } from "../Components";
import { useItemContext } from "../../utils/context/ItemProvider";
import ButtonCardList from "../Card/ButtonCardList";

const Section5 = () => {
  const { userData } = useItemContext();
  return (
    <section
      data-aos="zoom-out"
      className="h-full md:h-screen relative flex flex-col items-center justify-center max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <Typografi
        variant="h1"
        child="PERANGKAT DESA"
        className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-purple-800 to-purple-600"
      />
      <Typografi
        variant="paragraph"
        child="lorem ipsum dolor sit amet, consectetur adipiscing elit."
        className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg font-thin mb-4"
      />
      <div className="grid grid-cols-1 gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        {userData.slice(0, 4).map((item) => (
          <ButtonCardList key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Section5;
