import { Route, Routes } from "react-router-dom";
import { ItemProvider } from "../../utils/context/ItemProvider";
import SejarahDesa from "./SejarahDesa";
import Section from "./Section";
import VisiMisi from "./VisiMisi";
import Stok from "./Stok";
import LembagaDetail from "./LembagaDetail";

const ProfileDesa = () => {
  return (
    <ItemProvider>
      <Routes>
        <Route index element={<Section />} />
        <Route path=":slug" element={<LembagaDetail />} />
      </Routes>
      <SejarahDesa />
      <VisiMisi />
      <Stok />
    </ItemProvider>
  );
};

export default ProfileDesa;
