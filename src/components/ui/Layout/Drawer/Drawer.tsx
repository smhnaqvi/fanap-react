import React from "react";
import withWidth, { isWidthDown, WithWidth } from "@material-ui/core/withWidth";
import {
  ResponsiveDrawer,
  DrawerHeader,
  DrawerContent,
  DrawerItem,
  DrawerItemProps,
  useDrawer
} from ".";

export const drawerWidth = 240;

type PropsType = {
  items: DrawerItemProps[][];
} & WithWidth;

const Drawer = ({ items, width }: PropsType) => {
  const smDown = isWidthDown("xs", width);
  const {
    drawer,
    toggleDrawerOpen,
    toggleDrawerMinified,
    setDrawerVariant
  } = useDrawer();

  const handleDrawerToggle = () => {
    toggleDrawerOpen();
  };

  const handleVariantToggle = () => {
    setDrawerVariant(
      drawer.variant === "permanent" ? "temporary" : "permanent"
    );
  };

  const handleMinifiedToggle = () => {
    toggleDrawerMinified();
  };

  return (
    <ResponsiveDrawer
      smDown={smDown}
      open={drawer.open}
      minified={drawer.minified}
      variant={drawer.variant}
      onDrawerToggle={handleDrawerToggle}
    >
      <DrawerHeader
        smDown={smDown}
        open={drawer.open}
        variant={drawer.variant}
        minified={drawer.minified}
        onDrawerToggle={handleDrawerToggle}
        onVariantToggle={handleVariantToggle}
        onMinifiedToggle={handleMinifiedToggle}
      />
      {items.map((list, index) => (
        <DrawerContent
          key={index}
          items={list}
          itemComponent={DrawerItem}
          divider
        />
      ))}
    </ResponsiveDrawer>
  );
};

export default withWidth()(Drawer);
