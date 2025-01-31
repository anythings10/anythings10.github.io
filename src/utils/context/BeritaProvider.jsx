import { useContext, createContext, useMemo, useReducer } from "react";
import { beritaDummy } from "../dummy";

const BeritaContext = createContext();

const initialState = {
  beritaDummy,
  selectedNews: null,
};

const beritaReducer = (state, action) => {
  switch (action.type) {
    case "READ_NEWS":
      return { ...state, selectedNews: action.payload };
    default:
      return state;
  }
};

export const BeritaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(beritaReducer, initialState);
  const valueBerita = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <BeritaContext.Provider value={valueBerita}>
      {children}
    </BeritaContext.Provider>
  );
};

export const useBerita = () => useContext(BeritaContext);
