import React, { useState, useRef } from "react";
import { Box, Button, Typography, Input } from "@mui/material";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import {
  updateInput,
  updateLocation,
  updatefullTime,
} from "@/store/searchSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [modal, setModal] = useState(false);
  const [fullTime, setFullTime] = useState(false);
  const modalElement = useRef<any>(null);
  const modalHeandler = () => {
    setModal(true);
  };
  const handleModal: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === modalElement.current) {
      setModal(false);
    }
  };
  return (
    <>
      <FilterDiv>
        <FilterCont>
          <Input
            sx={{
              order: { md: "2" },
            }}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            placeholder="Filter by title…"
          ></Input>
          <Box
            sx={{
              display: { md: "none" },
              margin: "auto",
            }}
            component="img"
            onClick={modalHeandler}
            src="assets/mobile/icon-filter.svg"
          />
          <Box
            sx={{
              order: { md: "1" },
            }}
            component="img"
            src="assets/search.svg"
          />
        </FilterCont>
        <FilterCont sx={{ display: { xs: "none", md: "flex" } }}>
          <SearchLocationDiv>
            <Box component="img" src="assets/searchLocation.svg" />
            <input
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="Filter by location…"
            ></input>
          </SearchLocationDiv>
        </FilterCont>
        <FilterCont sx={{ display: { xs: "none", md: "flex" } }}>
          <SearchFullTime>
            <input
              onClick={() => setFullTime(!fullTime)}
              type="checkbox"
            ></input>
            <Typography>Full Time Only</Typography>
          </SearchFullTime>
          <SearchButton
            sx={{
              width: { md: "40%" },
              marginTop: { md: "0" },
            }}
            onClick={() => {
              dispatch(updateInput(input));
              dispatch(updatefullTime(fullTime));
              dispatch(updateLocation(location));
              setModal(false);
            }}
          >
            Search
          </SearchButton>
        </FilterCont>
      </FilterDiv>
      {modal && (
        <ModalBackground ref={modalElement} onClick={handleModal}>
          <ModalDiv>
            <SearchLocationDiv>
              <Box component="img" src="assets/searchLocation.svg" />
              <input
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                placeholder="Filter by location…"
              ></input>
            </SearchLocationDiv>
            <Box
              sx={{
                height: "1px",
                backgroundColor: "#6E8098",
              }}
            ></Box>
            <Box
              sx={{
                padding: "27px",
              }}
            >
              <SearchFullTime>
                <input
                  onClick={() => setFullTime(!fullTime)}
                  type="checkbox"
                ></input>
                <Typography>Full Time Only</Typography>
              </SearchFullTime>
              <SearchButton
                onClick={() => {
                  dispatch(updatefullTime(fullTime));
                  dispatch(updateLocation(location));
                  setModal(false);
                }}
              >
                Search
              </SearchButton>
            </Box>
          </ModalDiv>
        </ModalBackground>
      )}
    </>
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

const ModalBackground = styled(Box)(() => ({
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: "0",
}));

const ModalDiv = styled(Box)(() => ({
  backgroundColor: " #FFFFFF",
  width: "80%",
  borderRadius: "6px",
}));

const SearchLocationDiv = styled(Box)(() => ({
  display: "flex",
  gap: "20px",
  padding: "27px",
}));

const SearchFullTime = styled(Box)(() => ({
  display: "flex",
  gap: "20px",
}));

const SearchButton = styled(Button)(() => ({
  backgroundColor: "#5964E0 ",
  padding: "10px",
  width: "100%",
  color: "#FFFFFF",
  marginTop: "20px",
  fontWeight: "700",
}));

const FilterCont = styled(Box)(() => ({
  display: "flex",
  gap: "30px",
}));
