const FileList = () => {
  const files = [
    { id: 1, title: "Contoh PPID 1", size: "282.68 KB", downloads: 14 },
    { id: 2, title: "PPID 2", size: "2.32 MB", downloads: 5 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <div className="grid md:grid-cols-2 gap-4">
        {files.map((file) => (
          <div
            key={file.id}
            className="flex items-center gap-4 border p-3 rounded">
            <img src="/pdf-icon.png" alt="PDF" className="w-8 h-8" />
            <div className="flex-grow">
              <h3 className="text-blue-500 font-semibold">{file.title}</h3>
              <p className="text-gray-500 text-sm">
                {file.downloads} downloads • {file.size}
              </p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              DOWNLOAD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileList;
