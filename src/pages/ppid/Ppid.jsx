import FileList from "./FilleList";
import FilterSection from "./FilterSection";
import InformationBoard from "./InformationBoard";

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <FilterSection />
        <FileList />
        <InformationBoard />
      </div>
    </div>
  );
}

export default App;
