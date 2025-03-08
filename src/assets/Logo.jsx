import React from "react";
import logo from "../assets/image-10.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center cursor-pointer">
        <img src={logo} alt="Logo" className="h-12" />
        <div>
          <h5 className="font-extrabold">Desa Alata Karya</h5>

          <h6 className="font-thin text-xs">Kab. Gorontalo Utara</h6>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
