import { Typografi } from "./Components";

const GalleryList = ({ item }) => {
  const { span, image, title, description } = item;
  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-lg group ${
        span || ""
      }`}>
      <img
        src={image}
        alt={title}
        className="w-full h-48 md:h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Typografi
            variant="h4"
            className=" font-bold text-white"
            child={title}
          />
          {description && (
            <Typografi
              variant="kecil"
              className="text-white"
              child={description}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryList;
