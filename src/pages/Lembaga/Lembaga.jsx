import React from "react";
import LembagaCard from "../../components/Card/LembagaCard";
import { lembaga } from "../../utils/dummy";
import { Typografi } from "../../components/Components";
const Lembaga = () => {
  return (
    <section className="flex flex-col max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 w-full h-screen ">
      <Typografi
        variant="h1"
        className="text-center font-extrabold mt-10"
        child="LEMBAGA"
      />

      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {lembaga.map((item) => (
          <LembagaCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Lembaga;
