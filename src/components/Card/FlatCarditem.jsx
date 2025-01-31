import React from "react";
import { Typografi } from "../Components";

function FlatCardItem({ item }) {
  const { total, title } = item;
  return (
    <div className="rounded-lg p-6 border border-gray-400 shadow-sm ">
      <Typografi
        child={title}
        variant="h5"
        className=" flex text-left text-gray-700"
      />
      <Typografi
        child={total}
        variant="h1"
        className="flex justify-end text-gray-700"
      />
    </div>
  );
}

export default FlatCardItem;
