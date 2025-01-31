import React from "react";
import { ItemProvider } from "../utils/context/ItemProvider";
import Section from "../components/ProfileDesa/Section";
import VisiMisi from "../components/ProfileDesa/VisiMisi";
import Stok from "../components/ProfileDesa/Stok";
import SejarahDesa from "../components/ProfileDesa/SejarahDesa";

const ProfileDesa = () => {
  return (
    <ItemProvider>
      <SejarahDesa />
      <Section />
      <VisiMisi />
      <Stok />
    </ItemProvider>
  );
};

export default ProfileDesa;
