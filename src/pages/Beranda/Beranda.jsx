import { GalleryProvider } from "../../utils/context/GalleryProvider";
import { ItemProvider } from "../../utils/context/ItemProvider";
import { NewsProvider } from "../../utils/context/NewsProvider";
import Section1 from "./Section1";
import Section6 from "./Section6";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section7 from "./Section7";

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
