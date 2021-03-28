import * as HeroIcons from "heroicons-react";

type BaseNavItemType = {
  title: string | ((isAdmin: boolean) => string);
  adminOnly?: boolean;
  icon?: keyof typeof HeroIcons;
  badge?: (isAdmin: boolean, isActive: boolean) => React.ReactElement;
};

export type SingleNavItemType = BaseNavItemType & {
  href: string;
};

export type NestedNavItemType = BaseNavItemType & {
  subItems: Array<SingleNavItemType>;
};

export type NavItem = SingleNavItemType | NestedNavItemType;

export const isSingleNavItem = (item: NavItem): item is SingleNavItemType => typeof ((item as unknown) as SingleNavItemType).href !== "undefined";
export const isNestedNavItem = (item: NavItem): item is NestedNavItemType => Array.isArray(((item as unknown) as NestedNavItemType).subItems);
