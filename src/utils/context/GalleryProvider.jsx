import { createContext, useContext, useMemo } from "react";
import { galleryDesa } from "../dummy";

const GalleryContext = createContext();
export const GalleryProvider = ({ children }) => {
  const ProviderGallery = useMemo(() => ({ galleryDesa }), [galleryDesa]);
  return (
    <GalleryContext.Provider value={ProviderGallery}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGalleryContext = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGalleryContext must be used within a GalleryProvider");
  }
  return useContext(GalleryContext);
};
