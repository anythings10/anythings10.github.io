import { useState } from "react";

const InformationBoard = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "Himbauan Kebersihan, 03 September 2024",
      content:
        "Diberitahukan untuk seluruh masyarakat Desa Alata Karya agar membersihkan lingkungan rumah masing-masing untuk mencegah penyakit Demam Berdarah",
    },
    {
      title: "Rapat Bersama BPD, 03 September 2024",
      content: "",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold text-gray-800">Papan Informasi</h2>
      {items.map((item, index) => (
        <div key={index} className="mt-2 border rounded overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex justify-between items-center w-full p-3 bg-yellow-400 font-bold">
            {item.title}
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="p-3 bg-white">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InformationBoard;
