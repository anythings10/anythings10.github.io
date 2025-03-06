import React from "react";
import logo from "../assets/image-10.png";
const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="Logo" className="h-12" />
      <div>
        <h5 className="font-extrabold">Desa Alata Karya</h5>

        <h6 className="font-thin text-xs">Kab. Gorontalo Utara</h6>
      </div>
    </div>
  );
};

export default Logo;
