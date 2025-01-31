import { useBerita } from "../../utils/context/BeritaProvider";
import { useState } from "react";
import { HeartIcon, ShareIcon } from "@heroicons/react/16/solid";

const BeritaList = ({ item, onOpenModal }) => {
  const { name, desc, image, date } = item;
  const { dispatch } = useBerita();
  const [liked, setLiked] = useState(false);

  // Fungsi untuk membuka modal
  const handleReadMore = () => {
    dispatch({ type: "READ_NEWS", payload: item });
    onOpenModal();
  };

  // Fungsi Like Toggle
  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="bg-white rounded shadow-md p-4 flex flex-col h-full">
      <header className="flex items-center mb-2">
        <div>
          <h3 className="text-lg font-bold line-clamp-1">{name}</h3>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
      </header>

      <section className="flex-grow">
        <img
          src={image}
          alt="BERITA"
          className="w-full h-52 object-cover rounded-md"
        />
        <p className="text-sm text-gray-600 mt-2">{desc}</p>
      </section>

      <footer className="mt-auto flex items-center justify-between">
        <button
          onClick={handleReadMore}
          className="uppercase font-bold text-sm text-blue-700 hover:underline">
          Baca Berita
        </button>
        <div className="flex space-x-3">
          <button onClick={handleLike}>
            <HeartIcon
              className={`w-5 h-5 ${liked ? "text-red-500" : "text-gray-400"}`}
            />
          </button>
          <button>
            <ShareIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default BeritaList;
