import React from "react";
import { Typografi } from "../Components";
import FlatCardItem from "../Card/FlatCardItem";
import { useItemContext } from "../../utils/context/ItemProvider";
import heroBg from "../../assets/apbd-bg.svg";
const paragraphContent = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod, lacus eget aliquam
  tincidunt, lorem nisl aliquet nunc, sit amet ornare nunc nisi 
`;
const Section4 = () => {
  const { apbDes } = useItemContext();
  return (
    <section
      className="flex md:flex-row flex-col items-center justify-center max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 gap-2 md:gap-4"
      data-aos="zoom-in-up">
      <div className="text-center md:text-left flex flex-col">
        <Typografi
          variant="h1"
          child="APBDes"
          className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-purple-800 to-purple-600"
        />
        <Typografi
          variant="paragraph"
          child={paragraphContent}
          className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg font-thin"
        />
        <div className="flex flex-col gap-2 md:gap-4">
          {apbDes.map((item, index) => (
            <FlatCardItem key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="hidden md:block flex-shrink-0">
        <img
          src={heroBg}
          alt="Gambar APBD di depan latar belakang"
          className="object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </section>
  );
};

export default Section4;
