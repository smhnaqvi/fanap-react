import React, { PropsWithChildren } from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  ThemeProvider,
  createMuiTheme,
  jssPreset
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./fonts/shabnam/shabnam.css";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  direction: "rtl",
  typography: { fontFamily: "Shabnam, Arial" }
});

export default function ThemeWrapper({ children }: PropsWithChildren<unknown>) {
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
}
