import React from "react";
import { useTheme, Box, Typography } from "@material-ui/core";

export default function SplashScreen() {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      height="100vh"
      width="100%"
      alignItems="center"
      justifyContent="center"
      style={{ backgroundColor: theme.palette.warning.light }}
    >
      <Typography variant="h3" color="primary">
        <Box fontWeight="">درحال بارگذاری</Box>
      </Typography>
    </Box>
  );
}
