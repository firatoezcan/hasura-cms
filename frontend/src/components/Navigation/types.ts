import * as HeroIcons from "heroicons-react";

type BaseNavItem = {
  title: string | ((isAdmin: boolean) => string);
  adminOnly?: boolean;
  icon?: keyof typeof HeroIcons;
  badge?: (isAdmin: boolean, isActive: boolean) => React.ReactElement;
};

export type SingleNavItem = BaseNavItem & {
  href: string;
};

export type NestedNavItem = BaseNavItem & {
  subItems: Array<SingleNavItem>;
};

export type NavItem = SingleNavItem | NestedNavItem;

export const isSingleNavItem = (item: NavItem): item is SingleNavItem => typeof ((item as unknown) as SingleNavItem).href !== "undefined";
export const isNestedNavItem = (item: NavItem): item is NestedNavItem => Array.isArray(((item as unknown) as NestedNavItem).subItems);
