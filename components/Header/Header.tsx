import React from "react";
import { Box, Switch } from "@mui/material";
import { HeaderDiv } from "./style";

export default function Header() {
  return (
    <HeaderDiv
      sx={{
        padding: { xs: "5% 5% 15% 5%", md: "5% 10% 10% 10%" },
        borderRadius: { md: "0px 0px 0px 100px" },
        backgroundImage: {
          xs: "url(/assets/mobile/bg-pattern-header.svg)",
          md: "url(/assets/tablet/bg-pattern-header.svg)",
          lg: "url(/assets/desktop/bg-pattern-header.svg)",
        },
        backgroundSize: "100%",
      }}
    >
      <img src="assets/logos/devjobs.svg" />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <img src="assets/logos/light.svg" />
        <Switch></Switch>
        <img src="assets/logos/dark.svg" />
      </Box>
    </HeaderDiv>
  );
}
