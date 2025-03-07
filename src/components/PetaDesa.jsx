import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const PetaDesa = () => {
  const desaPosition = [-7.250445, 112.768845]; // Ganti dengan koordinat desa kamu

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-10 z-10">
      {/* Judul & Deskripsi */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Peta Desa</h2>
        <p className="text-gray-600 mt-2">
          Berikut adalah peta desa yang menampilkan lokasi strategis seperti
          kantor desa, fasilitas umum, dan batas wilayah.
        </p>
      </div>

      {/* Peta */}
      <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg border z-0">
        <MapContainer
          center={desaPosition}
          zoom={15}
          scrollWheelZoom={false}
          className="w-full h-full z-0">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={desaPosition}>
            <Popup>Ini adalah lokasi desa kamu!</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default PetaDesa;
