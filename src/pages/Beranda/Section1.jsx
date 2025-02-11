import IconDescItem from "../../components/Card/IconDescItem";
import { Button, Typografi, Input } from "../../components/Components";
import { useItemContext } from "../../utils/context/ItemProvider";

const Section1 = () => {
  const { highLight, highLight2 } = useItemContext();

  return (
    <section
      data-aos="fade-up"
      className="sm:h-screen h-screen relative flex flex-col justify-center items-center sm:items-center">
      <Typografi
        variant="h1"
        child="SELAMAT DATANG DI WEBSITE"
        className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-purple-800 to-purple-600 px-2 sm:px-4"
      />
      <Typografi
        variant="h1"
        child="DESA ALATA KARYA"
        className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-purple-800 to-purple-600"
      />

      <div className="flex flex-nowrap justify-center items-center gap-4 mt-12">
        {highLight.map((item, index) => (
          <IconDescItem key={index} item={item} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <form className="flex justify-center items-center rounded-full p-2 border border-gray-400 shadow-sm w-full max-w-md">
          <Input type="text" placeholder="Masukan NIK" inputType="search" />
          <Button buttonType="search" children="Buat Surat" />
        </form>
      </div>

      <div className="absolute hidden md:flex justify-center items-center gap-8 inset-x-0 bottom-0">
        {highLight2.map((item, index) => (
          <IconDescItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Section1;
