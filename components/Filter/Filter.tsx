import React, { useState, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
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
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Filter by title…"
        ></input>
        <img onClick={modalHeandler} src="assets/mobile/icon-filter.svg" />
        <img
          onClick={() => dispatch(updateInput(input))}
          src="assets/search.svg"
        />
      </FilterDiv>
      {modal && (
        <ModalBackground ref={modalElement} onClick={handleModal}>
          <ModalDiv>
            <SearchLocationDiv>
              <img src="assets/searchLocation.svg" />
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
}));
