import Section1 from "../components/Beranda/Section1";
import Section2 from "../components/Beranda/Section2";
import Section3 from "../components/Beranda/Section3";
import Section4 from "../components/Beranda/Section4";
import Section5 from "../components/Beranda/Section5";
import Section6 from "../components/Beranda/Section6";
import Section7 from "../components/Beranda/Section7";
import { GalleryProvider } from "../utils/context/GalleryProvider";
import { ItemProvider } from "../utils/context/ItemProvider";
import { NewsProvider } from "../utils/context/NewsProvider";

const Beranda = () => {
  return (
    <ItemProvider>
      <GalleryProvider>
        <NewsProvider>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
        </NewsProvider>
      </GalleryProvider>
    </ItemProvider>
  );
};

export default Beranda;
