import { ItemProvider } from "../../utils/context/ItemProvider";
import SejarahDesa from "./SejarahDesa";
import Section from "./Section";
import VisiMisi from "./VisiMisi";
import Stok from "./Stok";

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
