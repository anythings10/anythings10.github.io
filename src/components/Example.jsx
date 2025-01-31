import React, { Fragment } from "react";
import { Typografi } from "./Components";

const Example = () => {
  const { icon: Icon, image, title, bgColor, value } = item;
  return (
    <div className="flex items-center gap-1 justify-between sm:flex-row md:gap-2">
      {value && (
        <div className="flex items-center bg-slate-300 gap-1 justify-between sm:flex-row md:gap-2">
          <div className="p-2 md:p-4 rounded-md bg-gradient-to-tr from-red-800 to-purple-600 text-center">
            <Typografi
              variant="paragraph"
              child={value}
              className="font-semibold text-white"
            />
          </div>
        </div>
      )}

      {image && (
        <img
          src={image}
          alt={title}
          className="h-4 w-4 rounded-full object-cover sm:h-5 sm:w-5"
        />
      )}
      {Icon && (
        <span className={`p-2 sm:p-1 ${bgColor} rounded-full text-white`}>
          <Icon className="h-10 w-10 text-white sm:h-8 sm:w-8" />
        </span>
      )}
      <Typografi
        className="text-center font-thin "
        variant="paragraph"
        child={title}
      />
    </div>
  );
};

export default Example;
