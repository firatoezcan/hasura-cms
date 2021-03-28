import cn from "classnames";
import React, { useState } from "react";
// Refactor this when bundle size actually matters
import * as HeroIcons from "heroicons-react";
import { isNestedNavItem, isSingleNavItem, NavItem, SingleNavItemType, NestedNavItemType } from "./types";

const NavItemStyle = ({ isActive }: { isActive: boolean }) =>
  cn("flex items-center w-full py-2 pl-2 pr-1 text-sm font-medium rounded-md group hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500", {
    "text-gray-900 bg-gray-100": isActive,
    "bg-white text-gray-600": !isActive,
  });

const IconStyle = ({ isActive }: { isActive: boolean }) => cn("mr-3 h-6 w-6 group-hover:text-gray-500", { "text-gray-500": isActive, "text-gray-400": !isActive });

const SingleNavItem = ({ title, href, icon }: SingleNavItemType) => {
  const Icon = icon ? HeroIcons[icon] : () => null;
  const isActive = location.pathname === href;
  return (
    <div>
      <a href={href} className={NavItemStyle({ isActive })}>
        <Icon className={IconStyle({ isActive })} />
        {title}
      </a>
    </div>
  );
};

const NestedNavItem = ({ title, icon, subItems }: NestedNavItemType) => {
  const [isOpen, setIsOpen] = useState(false);

  const Icon = icon ? HeroIcons[icon] : () => null;

  const isActive = false; // Parity with other NavItem Variant

  return (
    <div className="space-y-1">
      <button type="button" className={NavItemStyle({ isActive })} onClick={() => setIsOpen((e) => !e)}>
        <Icon className={IconStyle({ isActive })} />
        {title}
        <svg
          className={cn("ml-auto h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150", {
            "text-gray-400 rotate-90": isOpen,
            "text-gray-300": !isOpen,
          })}
          viewBox="0 0 20 20"
        >
          <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
        </svg>
      </button>
      {/* Expandable link section, show/hide based on state. */}
      <div className={cn({ hidden: !isOpen })}>
        {subItems.map((subItem, index) => {
          return <SingleNavItem key={subItem.title + subItem.href + index} {...subItem} />;
        })}
      </div>
    </div>
  );
};

const NavigationConfig: Array<NavItem> = [
  {
    title: "Create new model",
    href: "/model/create",
    icon: "DocumentAdd",
  },
];

export function Navigation() {
  return (
    <nav className="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
      {NavigationConfig.map((navItem, index) => {
        if (isSingleNavItem(navItem)) return <SingleNavItem key={navItem.title + navItem.href + index} {...navItem} />;
        if (isNestedNavItem(navItem)) return <NestedNavItem key={navItem.title + "nested" + index} {...navItem} />;
      })}
    </nav>
  );
}
