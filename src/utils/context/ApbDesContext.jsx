import { createContext, useContext, useMemo, useReducer } from "react";
import { apbDummyData } from "../dummy";

const ApbDesContext = createContext();
const initialState = {
  selectedYear: apbDummyData[0].year,
  data: apbDummyData[0],
  chartData: generateChartData(apbDummyData[0]),
};

function generateChartData(data) {
  return {
    labels: ["Pendapatan", "Belanja", "Surplus"],
    datasets: [
      {
        label: `Tahun ${data.year}`,
        data: [data.pendapatan, data.belanja, data.surplus],
        backgroundColor: ["#16a34a", "#dc2626", "#9333ea"],
        barPercentage: 0.9, // ✅ Pastikan bar mengisi lebih banyak ruang
        categoryPercentage: 0.8, // ✅ Ini membantu mengurangi padding antar bar
      },
    ],
  };
}

const apbDesReducer = (state, action) => {
  switch (action.type) {
    case "SET_YEAR":
      const newData = apbDummyData.find((item) => item.year === action.payload);
      return {
        ...state,
        selectedYear: action.payload,
        data: newData || state.data,
        chartData: generateChartData(newData || state.data),
      };
    default:
      return state;
  }
};

export const ApbDesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apbDesReducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return (
    <ApbDesContext.Provider value={value}>{children}</ApbDesContext.Provider>
  );
};

export const useApbDes = () => useContext(ApbDesContext);
