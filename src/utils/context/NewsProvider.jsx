import { useContext, useMemo, createContext } from "react";
import { beritaDummy } from "../dummy";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const providerNews = useMemo(() => ({ beritaDummy }), [beritaDummy]);
  return (
    <NewsContext.Provider value={providerNews}>{children}</NewsContext.Provider>
  );
};
export const useNewsContext = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNewsContext must be used within a NewsProvider");
  }
  return useContext(NewsContext);
};
