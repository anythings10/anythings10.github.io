import { Input } from "../../components/Components";
import React from "react";
import { Button } from "../../components/Components";

const Bansos = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-purple-800 to-purple-600 text-center">
          Cek Penerima Bansos
        </h1>
      </div>

      <div className="bg-white border shadow-lg rounded-lg p-6 max-w-lg w-full flex flex-col items-center">
        {/* Bagian "Belum Ada Data" */}
        <div className="flex flex-col items-center justify-center text-gray-400 mb-8">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 4h.01m-6.938 4h13.856C18.345 20 20 18.345 20 16.062V7.938C20 5.655 18.345 4 16.062 4H7.938C5.655 4 4 5.655 4 7.938v8.124C4 18.345 5.655 20 7.938 20z"
              />
            </svg>
          </div>
          <p className="mt-4 font-semibold text-lg">Belum Ada Data</p>
        </div>

        {/* Input untuk NIK */}
        <div className="w-full">
          <form className="flex justify-center items-center rounded-full p-2 border border-gray-400 shadow-sm w-full max-w-md">
            <Input type="text" placeholder="Masukan NIK" inputType="search" />
            <Button buttonType="search" children="Cek NIK" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bansos;
