import React, { useState } from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateInput } from "@/store/inputSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");
  const inputValue = useSelector(
    (store: { inputValue: string }) => store.inputValue
  );
  console.log(inputValue);
  console.log(input);
  const [modal, setModal] = useState(false);
  const modalHeandler = () => {
    setModal(!modal);
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
      {modal ? <ModalDiv></ModalDiv> : null}
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

const ModalDiv = styled(Box)(() => ({
  backgroundColor: " red",
  width: "80%",
  position: "absolute",
  height: "20%",
  borderRadius: "6px",
  left: "10%",
}));
