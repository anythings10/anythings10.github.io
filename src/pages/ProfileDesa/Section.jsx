import LembagaCard from "../../components/Card/LembagaCard";
import { Button } from "../../components/Components"; // Pastikan ini diekspor dengan benar
import HeroRight from "../../components/Hero/HeroRight";
import { useItemContext } from "../../utils/context/ItemProvider";
import { lembaga } from "../../utils/dummy";
import { useState } from "react";

const Section = () => {
  const { heroDummy } = useItemContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="flex flex-col max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 w-full">
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {lembaga.slice(0, isOpen ? 8 : 4).map((item) => (
          <LembagaCard key={item.id} item={item} />
        ))}
      </div>

      <div className="flex justify-center mt-8" data-aos="fade-up">
        <Button buttonType="primary" onClick={toggleDropdown}>
          {isOpen ? "Tampilkan Lebih Sedikit" : "Lihat Semua"}
        </Button>
      </div>
    </section>
  );
};

export default Section;
