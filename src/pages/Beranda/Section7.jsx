import { Typografi } from "../../components/Components";
import { useBerita } from "../../utils/context/BeritaProvider";
import BeritaList from "../Berita/BeritaList";
import { useNavigate } from "react-router-dom";
const Section7 = () => {
  const { state, dispatch } = useBerita();
  const beritaTerbaru = state.beritaDummy.slice(0, 4);
  const navigate = useNavigate();

  const handleReadMore = (newsItem) => {
    dispatch({ type: "READ_NEWS", payload: newsItem });
    navigate(`/berita?id=${newsItem.id}`);
  };
  return (
    <section
      data-aos="zoom-out"
      className="h-full md:h-screen relative flex flex-col items-center justify-center max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 lg:py-24">
      <Typografi variant="h1" child="BERITA DESA" className="font-bold " />
      <Typografi
        variant="paragraph"
        child="lorem ipsum dolor sit amet, consectetur adipiscing elit."
        className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg font-thin mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {beritaTerbaru.map((item) => (
          <BeritaList
            key={item.id}
            item={item}
            onOpenModal={() => handleReadMore(item)}
          />
        ))}
      </div>
    </section>
  );
};

export default Section7;
