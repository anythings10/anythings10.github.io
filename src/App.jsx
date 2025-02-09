import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import useAOS from "./utils/hooks/useAOS";
import Footer from "./components/Footer";
import ScrollTop from "./utils/ScrollTop";
import Infografis from "./pages/Infografis/Infografis";
import Kependudukan from "./pages/Infografis/Kependudukan";
import Stunting from "./pages/Infografis/Stunting";
import Bansos from "./pages/Infografis/Bansos";
import NotFound from "./pages/NotFound";
import Berita from "./pages/Berita/Berita";
import ApbDes from "./pages/ApbDes/ApbDes";
import Beranda from "./pages/Beranda/Beranda";
import ProfileDesa from "./pages/ProfileDesa/ProfileDesa";
import Idm from "./pages/Infografis/Idm";
import Ppid from "./pages/ppid/Ppid";

const App = () => {
  useAOS();
  return (
    <Router>
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/profile-desa" element={<ProfileDesa />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/ppid" element={<Ppid />} />

        <Route path="/infografis" element={<Infografis />}>
          <Route path="/infografis" element={<Kependudukan />} />
          <Route path="/infografis/stunting" element={<Stunting />} />
          <Route path="/infografis/apbdes" element={<ApbDes />} />
          <Route path="/infografis/bansos" element={<Bansos />} />
          <Route path="/infografis/idm" element={<Idm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
