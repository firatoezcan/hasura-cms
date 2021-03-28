import { Transition } from "@headlessui/react";
import cn from "classnames";
import { MenuAlt2, X } from "heroicons-react";
import React, { FC, useState } from "react";
import { layoutConfig } from "../configs";
import { Navigation } from "./Navigation";
import { Sidebar } from "./Sidebar";

type BadgeProps = {
  active: boolean;
};

const Badge: FC<BadgeProps> = ({ active, children }) => {
  return <span className={cn("ml-auto inline-block py-0.5 px-3 text-xs rounded-full", { "bg-gray-50": active, "bg-gray-200 text-gray-600": !active })}>{children}</span>;
};

export const Layout: FC = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <div className={cn("md:hidden", { "pointer-events-none": !isSidebarOpen })}>
        <div className="fixed inset-0 z-40 flex">
          <Transition
            show={isSidebarOpen}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
          />

          <Transition
            className="relative flex flex-col flex-1 w-full max-w-xs bg-white"
            show={isSidebarOpen}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="absolute top-0 right-0 pt-2 -mr-12">
              <button
                className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img className="w-auto h-12" src={layoutConfig.brand.logo} alt={layoutConfig.brand.name} />
              </div>
              <div className="mt-5">
                <Navigation />
              </div>
            </div>
            <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
              <a href="/" className="flex-shrink-0 block group">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=JrviWksabN&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                    <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                  </div>
                </div>
              </a>
            </div>
          </Transition>
          <div className="flex-shrink-0 w-14">{/* Dummy element to force sidebar to shrink to fit close icon */}</div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden bg-white md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <Sidebar />
        </div>
      </div>

      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <div className="pt-1 pl-1 md:hidden sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2 className="w-6 h-6" />
          </button>
        </div>
        <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none" tabIndex={0}>
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};
