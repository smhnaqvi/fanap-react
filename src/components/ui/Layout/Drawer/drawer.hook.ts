// import React from "react";
import { atom, useRecoilState } from "recoil";
import { DrawerProps } from "@material-ui/core/Drawer";

export type DrawerVariant = DrawerProps["variant"];

export const drawerState = atom({
  key: "drawerState",
  default: {
    open: false,
    minified: false,
    variant: "permanent" as DrawerVariant
  }
});

export function useDrawer() {
  const [drawer, setDrawer] = useRecoilState(drawerState);

  const toggleDrawerOpen = () =>
    setDrawer(state => ({ ...state, minified: false, open: !state.open }));

  const toggleDrawerMinified = () =>
    setDrawer(state => ({ ...state, open: false, minified: !state.minified }));

  const setDrawerVariant = (variant: DrawerVariant) =>
    setDrawer(state => ({ ...state, variant }));

  return { drawer, toggleDrawerOpen, toggleDrawerMinified, setDrawerVariant };
}
