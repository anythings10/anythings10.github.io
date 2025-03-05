import { Typografi } from "../../components/Components";
import { useGalleryContext } from "../../utils/context/GalleryProvider";
import GalleryList from "../../components/GalleryList";
const Section6 = () => {
  const { galleryDesa } = useGalleryContext();
  return (
    <section
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="sm:h-screen h-full flex flex-col items-center justify-center max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <Typografi variant="h1" child="GALLERY DESA" className="font-bold " />
      <Typografi
        variant="paragraph"
        child="lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod, lacus eget aliquam tincidunt,  eget aliquam tincidunt"
        className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg font-thin mb-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {galleryDesa.map((item, index) => (
          <GalleryList key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Section6;
