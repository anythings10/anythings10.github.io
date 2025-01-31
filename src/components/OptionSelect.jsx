import { useApbDes } from "../utils/context/ApbDesContext";
const OptionSelect = () => {
  const { state, dispatch } = useApbDes();

  const handleChange = (event) => {
    dispatch({ type: "SET_YEAR", payload: Number(event.target.value) });
  };

  return (
    <select
      className="border p-2 rounded-md shadow-sm"
      value={state.selectedYear}
      onChange={handleChange}>
      {Array.from(new Set(state.data.allYears)).map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default OptionSelect;
