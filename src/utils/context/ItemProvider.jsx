import { createContext, useContext, useMemo } from "react";
import {
  highLight,
  highLight2,
  visitData,
  totalPenduduk,
  apbDes,
  userData,
  heroDummy,
  heroDummy2,
  heroDummy3,
  heroDummy4,
  householdData,
} from "../dummy";

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const ProviderItem = useMemo(
    () => ({
      highLight,
      highLight2,
      visitData,
      totalPenduduk,
      apbDes,
      userData,
      heroDummy,
      heroDummy2,
      heroDummy3,
      heroDummy4,
      householdData,
    }),
    [
      highLight,
      highLight2,
      visitData,
      totalPenduduk,
      apbDes,
      userData,
      heroDummy,
      heroDummy2,
      heroDummy3,
      heroDummy4,
      householdData,
    ]
  );
  return (
    <ItemContext.Provider value={ProviderItem}>{children}</ItemContext.Provider>
  );
};

export const useItemContext = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error("useItemContext must be used within a ItemProvider");
  }
  return context;
};
