import React, { Fragment } from "react";
import { Typografi } from "../Components";
import { Link } from "react-router-dom";

const ButtonCardList = ({ item }) => {
  const { icon: Icon, name, desc, bgColor, path, image, date } = item;
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg bg-gray-300 backdrop-blur-md bg-opacity-30 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex-1 p-6">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover rounded-md"
          />
        )}
        {Icon && (
          <Fragment>
            <span
              className={`absolute top-6 left-6 z-0 h-16 w-16 rounded-full ${bgColor} transition-transform duration-300 group-hover:scale-150`}></span>
            <div className="relative z-10">
              <span
                className={`flex h-16 w-16 items-center justify-center rounded-full ${bgColor} transition-colors duration-300 group-hover:bg-opacity-80`}>
                <Icon className="h-8 w-8 text-white" />
              </span>
            </div>
          </Fragment>
        )}

        <Typografi
          variant="h5"
          className="font-semibold mt-2 overflow-hidden whitespace-nowrap text-ellipsis"
          child={name}
        />
        {date && (
          <Typografi
            variant="kecil"
            className="font-thin text-gray-400 "
            child={date}
          />
        )}
        <Typografi
          variant="kecil"
          className="font-thin text-gray-700 line-clamp-2"
          child={desc}
        />
      </div>
      <div>
        {path && (
          <Link
            to={path}
            className="hover:text-gray-700 pb-6 pl-6 border-t-0 transition-transform duration-300 text-indigo-600 items-start flex text-[12px] cursor-pointer w-full rounded-br-lg">
            Kunjunggi »
          </Link>
        )}
      </div>
    </div>
  );
};

export default ButtonCardList;
