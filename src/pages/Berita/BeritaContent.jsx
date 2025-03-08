import { useState, useMemo, useEffect } from "react";
import { useBerita } from "../../utils/context/BeritaProvider";
import BeritaList from "./BeritaList";
import BeritaModal from "./BeritaModal";
import { useLocation } from "react-router-dom";

const ITEMS_PER_PAGE = 6;

const BeritaContent = () => {
  const { state, dispatch } = useBerita();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const beritaId = params.get("id");

  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (beritaId) {
      setIsModalOpen(false);
      const selectedNews = state.beritaDummy.find(
        (item) => item.id.toString() === beritaId
      );
      if (selectedNews) {
        dispatch({ type: "READ_NEWS", payload: selectedNews });
        setTimeout(() => setIsModalOpen(true), 100);
      }
    }
  }, [beritaId, state.beritaDummy, dispatch]);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const beritaList = state.beritaDummy || [];
  const totalPages = Math.ceil(beritaList.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = beritaList.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  if (beritaList.length === 0) {
    return <p className="text-center">Belum ada berita untuk ditampilkan.</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {paginatedNews.map((item) => (
          <BeritaList key={item.id} item={item} onOpenModal={handleOpenModal} />
        ))}
      </div>
      <BeritaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="flex items-center mt-6 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          aria-label="Previous Page"
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50">
          {"< Prev"}
        </button>

        <span className="text-sm font-semibold" aria-live="polite">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          aria-label="Next Page"
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50">
          {"Next >"}
        </button>
      </div>
    </div>
  );
};

export default BeritaContent;
