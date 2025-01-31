import React, { Fragment } from "react";
import { Typografi } from "../Components";

const HeroLeft = ({ item, className }) => {
  const {
    image,
    name,
    title,
    desc,
    misi,
    paragraphMisi,
    namaDesa,
    alamatDesa,
  } = item;
  return (
    <Fragment>
      <div data-aos="fade-right">
        <Typografi
          variant="h1"
          child={title}
          className="font-bold flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-purple-800 to-purple-600"
        />
        <Typografi
          variant="paragraph"
          child={desc}
          className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg font-thin"
        />
        {misi && (
          <Fragment>
            <Typografi
              variant="h1"
              child={misi}
              className="font-bold flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-purple-800 to-purple-600"
            />
            <Typografi
              variant="paragraph"
              child={paragraphMisi}
              className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg font-thin"
            />
          </Fragment>
        )}
      </div>
      <div data-aos="fade-left">
        <img src={image} alt={name} className={className} />
        {namaDesa && (
          <Fragment>
            <Typografi
              variant="h3"
              child={namaDesa}
              className="font-bold flex justify-center"
            />
            <Typografi
              variant="kecil"
              child={alamatDesa}
              className="flex justify-center text-gray-700 font-thin"
            />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default HeroLeft;
