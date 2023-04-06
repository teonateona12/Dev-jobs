import React from "react";
import { Box, Button, Switch } from "@mui/material";
import { HeaderDiv } from "./style";
type HomeProps = {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
};
export default function Header(props: HomeProps) {
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
      <Box component="img" src="assets/logos/devjobs.svg" />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box component="img" src="assets/logos/light.svg" />
        <Switch onClick={props.toggleTheme} color={"info"}></Switch>
        <Box component="img" src="assets/logos/dark.svg" />
      </Box>
    </HeaderDiv>
  );
}
