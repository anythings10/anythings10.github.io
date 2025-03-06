import { Typografi } from "../Components";
import { Link } from "react-router-dom";

const LembagaCard = ({ item }) => {
  const { image, nama, slug } = item;
  return (
    <div className="bg-gray-100 p-6 rounded-2xl shadow-md flex flex-col items-center text-center w-full">
      <img src={image} alt={nama} className="w-20 h-20 mb-4 object-contain" />
      <Typografi variant="h6" className="font-bold" child={nama} />
      <Link to={`/lembaga`} className="text-blue-500 mt-2">
        <Typografi
          variant="kecil"
          className="font-bold text-sky-600"
          child="Kunjungi →"
        />
      </Link>
    </div>
  );
};

export default LembagaCard;
