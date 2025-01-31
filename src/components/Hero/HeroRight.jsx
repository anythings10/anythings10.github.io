import React, { Fragment } from "react";
import { Typografi } from "../Components";

const HeroRigt = ({ item, children }) => {
  const { image, name, title, desc } = item;
  return (
    <Fragment>
      <div className="flex-shrink-0 mr-4" data-aos="fade-right">
        <img
          src={image}
          alt="Image"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
      <div
        className="text-center md:text-left flex flex-col"
        data-aos="fade-left">
        <Typografi
          variant="h2"
          child={name}
          className="font-extrabold text-lg md:text-xl lg:text-2xl"
        />
        <Typografi
          variant="h1"
          className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-purple-800 to-purple-600"
          child={title}
        />
        <Typografi
          variant="kecil"
          child={desc}
          className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg font-thin"
        />
        <div className="flex justify-center items-center md:justify-start md:items-start gap-2 md:gap-8 mt-3 md:mt-6">
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default HeroRigt;
