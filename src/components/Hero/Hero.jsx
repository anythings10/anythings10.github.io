import React from "react";
import { Typografi } from "../Components";
import heroImg from "../../assets/kades-bg.png";
import { sambutan } from "../../utils/dummy";
import { galleryDesa } from "../../utils/dummy";
import GalleryList from "../GalleryList";
const Hero = () => {
  return (
    <section className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        <div className="space-y-6" data-aos="fade-right">
          <Typografi
            variant="kecil"
            className="font-normal"
            child="✦ Sabutan . Kepala Desa"
          />
          <Typografi
            variant="h2"
            className="font-bold"
            child="Sofyan Basir Mahmud"
          />
          <Typografi
            variant="kecil"
            child={sambutan}
            className=" text-gray-600 font-normal"
          />
        </div>

        <div className="relative" data-aos="fade-up">
          <div className="bg-slate-50  p-3 shadow-xl overflow-hidden border border-gray-300 rounded-t-full">
            <img
              src={heroImg}
              alt="hero"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>

        <div
          className="hidden lg:block flex-col space-y-6"
          data-aos="fade-left">
          {galleryDesa.slice(3, 6).map((item, index) => (
            <GalleryList
              key={index}
              item={item}
              className="w-full h-48 md:h-48 object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
