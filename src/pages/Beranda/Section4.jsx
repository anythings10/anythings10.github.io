import { useItemContext } from "../../utils/context/ItemProvider";
import heroBg from "../../assets/apbd-bg.svg";
import { Typografi } from "../../components/Components";
import FlatCardItem from "../../components/Card/FlatCarditem";
const paragraphContent = `
  Akses cepat dan transparan terhadap APB Desa serta proyek pembangunan desa yang terus berkembang dengan menggunakan sistem informasi desa yang terintegrasi dengan sistem informasi pemerintah.
`;
const Section4 = () => {
  const { apbDes } = useItemContext();
  return (
    <section
      className="flex md:flex-row flex-col items-center justify-center max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 gap-2 md:gap-4"
      data-aos="zoom-in-up">
      <div className="text-center md:text-left flex flex-col space-y-3">
        <Typografi variant="h1" child="APBDes" className="font-bold " />
        <Typografi
          variant="paragraph"
          child={paragraphContent}
          className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg font-thin"
        />
        <div className="flex flex-col gap-2 md:gap-4">
          {apbDes.map((item, index) => (
            <FlatCardItem key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="hidden md:block flex-shrink-0">
        <img
          src={heroBg}
          alt="Gambar APBD di depan latar belakang"
          className="object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </section>
  );
};

export default Section4;
