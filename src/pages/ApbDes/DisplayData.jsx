import { useApbDes } from "../../utils/context/ApbDesContext";
import { Typografi } from "../../components/Components";
import OptionSelect from "../../components/OptionSelect";
const formatCurrency = (value) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
    value
  );

const DisplayData = () => {
  const { state } = useApbDes();
  const {
    year,
    village,
    subdistrict,
    regency,
    province,
    pendapatan,
    belanja,
    pembiayaan,
    surplus,
  } = state.data;

  return (
    <section className="items-center justify-center mt-10">
      <div className="flex justify-between">
        <Typografi
          variant="h3"
          className="font-bold text-start text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-purple-800 to-purple-600"
          child={`DATA APB ${village} TAHUN ${year}`}
        />
        <OptionSelect />
      </div>
      <Typografi
        variant="kecil"
        className="font-thin"
        child={`${village}, ${subdistrict}, ${regency}, ${province}`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <Typografi variant="paragraph" child="Pendapatan" />
          <Typografi
            variant="paragraph"
            child={formatCurrency(pendapatan)}
            className="text-green-700 text-2xl font-bold"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <Typografi variant="paragraph" child="Belanja" />
          <Typografi
            variant="paragraph"
            child={formatCurrency(belanja)}
            className="text-red-700 text-2xl font-bold"
          />
        </div>
      </div>
      <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
        <Typografi variant="paragraph" child="Pembiayaan" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <Typografi variant="paragraph" child="Penerimaan" />
            <Typografi
              variant="paragraph"
              child={formatCurrency(pembiayaan.penerimaan)}
              className="text-green-700 font-bold"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <Typografi variant="paragraph" child="Pengeluaran" />
            <Typografi
              variant="paragraph"
              child={formatCurrency(pembiayaan.pengeluaran)}
              className="text-red-700 font-bold"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 bg-white p-4 rounded-lg shadow-sm border">
        <Typografi
          variant="paragraph"
          child="Surplus"
          className="flex justify-center items-center"
        />
        <Typografi
          variant="paragraph"
          child={formatCurrency(surplus)}
          className="text-green-700 flex justify-center items-center font-bold"
        />
      </div>
    </section>
  );
};

export default DisplayData;
