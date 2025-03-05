import React, { Fragment } from "react";
import { Typografi } from "../Components";
import { mision } from "../../utils/dummy";

const HeroLeft = ({ item, className }) => {
  const { image, name, title, desc, misi, namaDesa, alamatDesa } = item;
  return (
    <Fragment>
      <div
        data-aos="fade-right"
        className="space-y-5 mr-4 h-screen flex flex-col justify-center">
        <Typografi
          variant="h1"
          child={title}
          className="font-bold flex justify-center"
        />
        <Typografi
          variant="kecil"
          child={desc}
          className=" text-gray-700 text-justify font-normal"
        />
        {misi && (
          <div>
            <Typografi
              variant="h1"
              child={misi}
              className="font-bold flex justify-center "
            />
            {mision.map((item) => (
              <ul key={item.id}>
                <li className="list-disc">
                  <Typografi
                    variant="paragraph"
                    child={item.list}
                    className=" text-gray-700 text-justify font-normal"
                  />
                </li>
              </ul>
            ))}
          </div>
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
