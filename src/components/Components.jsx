import React, { Fragment } from "react";

const Typografi = ({ child, className, variant }) => {
  const Component =
    variant === "paragraph" ? "p" : variant === "sedang" ? "span" : "h1";

  return (
    <Component
      className={`font-poppins text-gray-800
          ${
            variant === "h1"
              ? "text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#7cb1c7] via-[#2b72ba] to-[#3680F2]"
              : ""
          }
          ${variant === "h2" ? "text-3xl sm:text-4xl" : ""}
          ${variant === "h3" ? "text-2xl sm:text-3xl" : ""}
          ${variant === "h4" ? "text-xl sm:text-2xl" : ""}
          ${variant === "h5" ? "text-lg sm:text-xl" : ""}
          ${variant === "h6" ? "text-base sm:text-lg" : ""}
          ${variant === "sedang" ? "text-base sm:text-lg" : ""}
          ${variant === "paragraph" ? "text-sm sm:text-base" : ""}
          ${variant === "kecil" ? "text-xs sm:text-sm" : ""}
          ${className}`}>
      {child}
    </Component>
  );
};

const Button = ({ className, buttonType, children, onClick }) => {
  return (
    <button
      className={`cursor-pointer text-center transition-all p-3  ${
        buttonType === "primary"
          ? "min-w-[100px] sm:min-w-[120px] text-[10px] sm:text-[12px] text-white bg-blue-500 border border-blue-500 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring shadow-md"
          : ""
      } ${
        buttonType === "secondary"
          ? "min-w-[100px] sm:min-w-[120px] text-[10px] sm:text-[12px] text-slate-100 border border-slate-200 rounded hover:bg-indigo-600 hover:text-white active:bg-indigo-500 hover:border-indigo-600 focus:outline-none focus:ring shadow-md"
          : ""
      } ${
        buttonType === "success"
          ? "min-w-[100px] sm:min-w-[120px] text-[10px] sm:text-[12px] text-white bg-green-600 hover:bg-green-700 active:bg-green-500 border border-green-600 rounded focus:outline-none focus:ring shadow-md"
          : ""
      } ${
        buttonType === "danger"
          ? "min-w-[100px] sm:min-w-[120px] text-[10px] sm:text-[12px] text-white bg-transparent hover:bg-blue-600 active:bg-white border border-white rounded focus:outline-none focus:ring shadow-md"
          : ""
      } ${
        buttonType === "search"
          ? "bg-slate-300 text-gray-800 font-bold text-sm px-6 py-2 rounded-full hover:bg-gray-200 transition duration-200 "
          : ""
      } ${
        buttonType === "card"
          ? "border-t-0 transition-transform duration-300 text-indigo-600 items-start flex text-[12px] cursor-pointer w-full rounded-br-lg"
          : ""
      } ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

const Input = ({ type, className, placeholder, inputType }) => {
  return (
    <Fragment>
      <input
        type={type}
        placeholder={placeholder}
        className={`${
          inputType === "search"
            ? "flex-1 bg-transparent text-gray-400 placeholder-gray-500 text-sm px-4 py-2 outline-none"
            : ""
        }  ${className}`}
      />
    </Fragment>
  );
};

export { Typografi, Button, Input };
