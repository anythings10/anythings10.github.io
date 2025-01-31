import { useBerita } from "../../utils/context/BeritaProvider";

const BeritaModal = ({ isOpen, onClose }) => {
  const { state } = useBerita();
  const news = state.selectedNews;

  if (!isOpen || !news) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600">
          ✖
        </button>
        <h2 className="text-xl font-bold">{news.name}</h2>
        <p className="text-sm text-gray-500 mb-2">{news.date}</p>
        <img
          src={news.image}
          alt="Berita"
          className="w-full h-56 object-cover rounded-md"
        />
        <p className="text-sm text-gray-700 mt-4">{news.desc}</p>
      </div>
    </div>
  );
};

export default BeritaModal;
