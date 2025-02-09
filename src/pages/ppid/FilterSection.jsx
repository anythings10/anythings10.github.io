const FilterSection = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex flex-wrap gap-2">
        <input
          type="text"
          placeholder="Search Keyword..."
          className="border p-2 rounded flex-grow"
        />
        <select className="border p-2 rounded">
          <option>Publish Date</option>
        </select>
        <select className="border p-2 rounded">
          <option>Descending</option>
        </select>
        <button className="bg-gray-700 text-white px-4 py-2 rounded">
          APPLY FILTER
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
