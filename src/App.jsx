import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import useAOS from "./utils/hooks/useAOS";
import Footer from "./components/Footer";
import ScrollTop from "./utils/ScrollTop";

// Lazy Load Pages
const Beranda = lazy(() => import("./pages/Beranda/Beranda"));
const ProfileDesa = lazy(() => import("./pages/ProfileDesa/ProfileDesa"));
const Berita = lazy(() => import("./pages/Berita/Berita"));
const Ppid = lazy(() => import("./pages/ppid/Ppid"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Lembaga = lazy(() => import("./pages/Lembaga/Lembaga"));

// Lazy Load Infografis Pages
const Infografis = lazy(() => import("./pages/Infografis/Infografis"));
const Kependudukan = lazy(() => import("./pages/Infografis/Kependudukan"));
const Stunting = lazy(() => import("./pages/Infografis/Stunting"));
const Bansos = lazy(() => import("./pages/Infografis/Bansos"));
const ApbDes = lazy(() => import("./pages/ApbDes/ApbDes"));
const Idm = lazy(() => import("./pages/Infografis/Idm"));

const App = () => {
  useAOS();

  return (
    <Router>
      <ScrollTop />
      <Navbar />
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        <Routes>
          {/* Halaman Utama */}
          <Route path="/" element={<Beranda />} />
          <Route path="/profile-desa/*" element={<ProfileDesa />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/ppid" element={<Ppid />} />
          <Route path="/lembaga" element={<Lembaga />} />

          {/* Nested Route untuk Infografis */}
          <Route path="/infografis" element={<Infografis />}>
            <Route index element={<Kependudukan />} /> {/* Default */}
            <Route path="stunting" element={<Stunting />} />
            <Route path="apbdes" element={<ApbDes />} />
            <Route path="bansos" element={<Bansos />} />
            <Route path="idm" element={<Idm />} />
          </Route>

          {/* Halaman Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
