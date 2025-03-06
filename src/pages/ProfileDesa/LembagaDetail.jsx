import { useParams } from "react-router-dom";
import { lembaga } from "../../utils/dummy";

const LembagaDetail = () => {
  const { slug } = useParams(); // Ambil slug dari URL
  const data = lembaga.find((item) => item.slug === slug);

  if (!data) {
    return (
      <h2 className="text-center text-red-500">Lembaga tidak ditemukan</h2>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <img
        src={data.image}
        alt={data.nama}
        className="w-24 h-24 mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center">{data.nama}</h2>
      <p className="text-gray-600 mt-2 text-center">
        Detail tentang {data.nama}
      </p>
    </div>
  );
};

export default LembagaDetail;
