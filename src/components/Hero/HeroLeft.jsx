import React, { Fragment } from "react";
import { Typografi } from "../Components";
import { mision } from "../../utils/dummy";

const HeroLeft = ({ item, className }) => {
  const { image, name, title, desc, misi, namaDesa, alamatDesa } = item;

  return (
    <Fragment>
      <div
        data-aos="fade-right"
        className="flex flex-col md:flex-row items-center justify-center gap-6 h-auto md:h-screen w-full">
        {/* Bagian Kiri */}
        <div className="space-y-5 mr-4 w-full md:w-1/2 flex flex-col justify-center">
          <Typografi
            variant="h1"
            child={title}
            className="font-bold flex justify-center"
          />
          <Typografi
            variant="kecil"
            child={desc}
            className="text-gray-700 text-justify font-normal"
          />
          {misi && (
            <div>
              <Typografi
                variant="h1"
                child={misi}
                className="font-bold flex justify-center"
              />
              {mision.map((item) => (
                <ul key={item.id}>
                  <li className="list-disc">
                    <Typografi
                      variant="paragraph"
                      child={item.list}
                      className="text-gray-700 text-justify font-normal"
                    />
                  </li>
                </ul>
              ))}
            </div>
          )}
        </div>

        {/* Bagian Kanan */}
        <div data-aos="fade-left" className="w-full md:w-1/2">
          <img
            src={image}
            alt={name}
            className={className + " w-full flex justify-center"}
          />
          {namaDesa && (
            <div>
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
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default HeroLeft;
