import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import useAOS from "./utils/hooks/useAOS";
import Footer from "./components/Footer";
import ProfileDesa from "./pages/ProfileDesa";
import ScrollTop from "./utils/ScrollTop";
import Infografis from "./pages/Infografis";
import Kependudukan from "./pages/Kependudukan";
import Stunting from "./pages/Stunting";
import ApbDes from "./pages/ApbDes";
import Bansos from "./pages/Bansos";
import NotFound from "./pages/NotFound";
import Berita from "./pages/Berita/Berita";

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
        <Route path="/infografis" element={<Infografis />}>
          <Route path="/infografis" element={<Kependudukan />} />
          <Route path="/infografis/stunting" element={<Stunting />} />
          <Route path="/infografis/apbdes" element={<ApbDes />} />
          <Route path="/infografis/bansos" element={<Bansos />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
