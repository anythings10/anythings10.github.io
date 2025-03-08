import { Route, Routes } from "react-router-dom";
import { ItemProvider } from "../../utils/context/ItemProvider";
import SejarahDesa from "./SejarahDesa";
import VisiMisi from "./VisiMisi";
import Stok from "./Stok";
import LembagaDetail from "./LembagaDetail";
import Hero from "../../components/Hero/Hero";
import Section from "./Section";

const ProfileDesa = () => {
  return (
    <ItemProvider>
      <Hero />
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
