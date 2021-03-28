import React from "react";
import { layoutConfig } from "../configs";
import { Navigation } from "./Navigation";

export const Sidebar = () => {
  return (
    <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto border-r border-gray-200">
      <div className="flex items-center flex-shrink-0 px-4">
        <img className="w-auto h-12" src={layoutConfig.brand.logo} alt={layoutConfig.brand.name} />
      </div>
      <div className="flex flex-col flex-grow mt-5">
        <Navigation />
      </div>
    </div>
  );
};
