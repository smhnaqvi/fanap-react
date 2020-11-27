import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AdjustIcon from "@material-ui/icons/Adjust";
import CallToActionIcon from "@material-ui/icons/CallToAction";
import PanoramaFishEyeIcon from "@material-ui/icons/PanoramaFishEye";
import { DrawerVariant } from ".";

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(0, 1, 0, 1),
    ...theme.mixins.toolbar
  },
  drawerToggleBtn: { flexGrow: 1, justifyContent: "end" },
  drawerMinifyBtn: { transform: "rotate(-270deg)" },
  hide: { display: "none" }
}));

type DrawerProps = {
  smDown: boolean;
  open: boolean;
  variant: DrawerVariant;
  minified: boolean;
  onDrawerToggle: () => void;
  onVariantToggle: () => void;
  onMinifiedToggle: () => void;
};

const DrawerHeader = (props: DrawerProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const {
    smDown,
    open,
    variant,
    onDrawerToggle,
    onVariantToggle,
    onMinifiedToggle
  } = props;

  const isRTL = theme.direction === "rtl";
  const isPinned = variant === "permanent";

  const PinIcon = isPinned ? AdjustIcon : PanoramaFishEyeIcon;
  const ToggleIconLtr = open ? ChevronRightIcon : ChevronLeftIcon;
  const ToggleIconRtl = open ? ChevronLeftIcon : ChevronRightIcon;

  return (
    <section>
      <div className={classes.toolbar}>
        <div className={classes.drawerToggleBtn}>
          <IconButton onClick={onDrawerToggle}>
            {isRTL ? <ToggleIconLtr /> : <ToggleIconRtl />}
          </IconButton>
          {!smDown && (
            <IconButton
              className={clsx(classes.drawerMinifyBtn, {
                [classes.hide]: !isPinned
              })}
              onClick={onMinifiedToggle}
            >
              <CallToActionIcon fontSize="small" />
            </IconButton>
          )}
        </div>
        {!smDown && (
          <IconButton
            color={isPinned ? "primary" : "default"}
            onClick={onVariantToggle}
          >
            {smDown ? null : <PinIcon />}
          </IconButton>
        )}
      </div>
      <Divider />
    </section>
  );
};

export default DrawerHeader;
