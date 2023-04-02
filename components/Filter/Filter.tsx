import React from "react";
import { Box, Switch } from "@mui/material";
import styled from "@emotion/styled";

export default function Filter() {
  return (
    <FilterDiv>
      <input type="text" placeholder="Filter by title…"></input>
      <img src="assets/mobile/icon-filter.svg" />
      <img src="assets/search.svg" />
    </FilterDiv>
  );
}

const FilterDiv = styled(Box)(() => ({
  backgroundColor: " #FFFFFF",
  width: "80%",
  margin: "auto",
  padding: "16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "-5%",
  borderRadius: "6px",
}));
