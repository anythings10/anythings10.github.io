import { useBerita } from "../../utils/context/BeritaProvider";
import { motion, AnimatePresence } from "framer-motion";

const BeritaModal = ({ isOpen, onClose }) => {
  const { state } = useBerita();
  const news = state.selectedNews;
  if (!isOpen || !news) return null;
  return (
    <AnimatePresence>
      {isOpen && news && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          {/* Animasi Modal */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-white overflow-y-auto">
            {/* Tombol Tutup */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-2 z-50">
              ✖
            </button>

            {/* Konten Modal */}
            <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              {/* Judul Berita */}
              <h2 className="text-2xl font-bold text-gray-900">{news.name}</h2>

              {/* Gambar Berita Full */}
              <img
                src={news.image}
                alt="Berita"
                className="w-full h-96 object-cover rounded-lg mt-4"
              />

              {/* Tanggal & Jumlah Pembaca */}
              <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                <p>{news.date}</p>
                <p>👁️ {news.views} pembaca</p>
              </div>

              {/* Konten Berita */}
              <p className="text-gray-700 mt-6 leading-relaxed">{news.desc}</p>

              {/* Sumber Berita & Nama Jurnalis */}
              <div className="mt-6 border-t pt-4 text-gray-600 text-sm">
                <p>
                  <span className="font-semibold">Sumber: </span>
                  {news.source}
                </p>
                <p>
                  <span className="font-semibold">Jurnalis: </span>
                  {news.journalist}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BeritaModal;
