import React, { Fragment } from "react";
import { Typografi } from "../Components";

const IconDescItem = ({ item }) => {
  const { icon: Icon, image, title, bgColor, value } = item;
  return (
    <Fragment>
      {value && (
        <div className="flex items-center justify-center sm:flex-row">
          <div className="p-2 md:p-3 rounded-tl-md rounded-bl-md bg-gradient-to-tr from-red-800 to-purple-600 text-center">
            <Typografi
              variant="paragraph"
              child={value}
              className="font-semibold text-white"
            />
          </div>
          <div className="bg-slate-100 p-2 md:p-3 rounded-tr-md rounded-br-md">
            <Typografi
              className="text-center font-thin "
              variant="paragraph"
              child={title}
            />
          </div>
        </div>
      )}

      {image && (
        <Fragment>
          <img
            src={image}
            alt={title}
            className="h-4 w-4 rounded-full object-cover sm:h-5 sm:w-5"
          />
          <Typografi
            className="text-center font-thin "
            variant="paragraph"
            child={title}
          />
        </Fragment>
      )}
      {Icon && (
        <Fragment>
          <span className={`p-2 sm:p-1 ${bgColor} rounded-full text-white`}>
            <Icon className="h-10 w-10 text-white sm:h-8 sm:w-8" />
          </span>
          <Typografi
            className="text-center font-thin "
            variant="paragraph"
            child={title}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default IconDescItem;
