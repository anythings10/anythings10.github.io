const SimpleTable = ({ items }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden border">
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-indigo-600">
            <th className="w-3/4 py-4 px-6 text-left text-gray-100 font-bold uppercase">
              Pekerjaan
            </th>
            <th className="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase">
              Jumlah
            </th>
          </tr>
        </thead>
      </table>
      <div className="max-h-64 overflow-y-auto">
        <table className="w-full table-fixed">
          <tbody className="bg-white">
            {items.map(({ pekerjaan, jumlah }, index) => (
              <tr key={index}>
                <td className="py-4 px-6 border-b border-gray-200">
                  {pekerjaan}
                </td>
                <td className="py-4 px-6 border-b flex items-center justify-center border-gray-200">
                  {jumlah}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimpleTable;
