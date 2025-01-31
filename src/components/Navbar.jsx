import { NavLink } from "react-router-dom";
import { NavItems } from "../utils/dummy";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "../assets/Logo";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 ${
        isScrolled
          ? "backdrop-filter text-gray-900 bg-indigo-700 backdrop-blur-lg bg-opacity-30 border-b border-gray-400 shadow-sm"
          : "bg-transperent text-gray-100  bg-indigo-700"
      }`}>
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <div className="hidden md:flex space-x-4">
            {NavItems.map((item) => (
              <div key={item.path} className="mx-2">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `hover:font-extrabold p-2 text-[16px] transition-all ${
                      isActive ? "font-extrabold" : "font-thin"
                    }`
                  }>
                  {item.name}
                </NavLink>
              </div>
            ))}
          </div>
          <h1 className="hidden md:flex font-extrabold text-lg">DesaDigital</h1>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              {isOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>
          {isOpen && (
            <div className="md:hidden bg-white shadow-md rounded-lg py-2 absolute top-16 left-0 w-full">
              {NavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}>
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
