import React from "react";
import { Typografi } from "../../components/Components";
import { BeritaProvider } from "../../utils/context/BeritaProvider";
import BeritaContent from "./BeritaContent";

const Berita = () => {
  return (
    <BeritaProvider>
      <section className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <Typografi
          variant="h1"
          child="B E R I T A"
          className="font-bold text-center p-6 text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-purple-800 to-purple-600 px-2 sm:px-4"
        />
        <Typografi
          variant="paragraph"
          child="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          className="text-center font-thin"
        />
        <BeritaContent />
      </section>
    </BeritaProvider>
  );
};

export default Berita;
