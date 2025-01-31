import React from "react";
import Tabs from "../components/Infografis/Tabs";
import { Outlet } from "react-router-dom";
import { ItemProvider } from "../utils/context/ItemProvider";
import { ApbDesProvider } from "../utils/context/ApbDesContext";

const Infografis = () => {
  return (
    <ApbDesProvider>
      <ItemProvider>
        <section className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 md:mt-15 mt-5">
          <Tabs />
          <Outlet />
        </section>
      </ItemProvider>
    </ApbDesProvider>
  );
};

export default Infografis;
