import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  location: "",
  fullTime: false,
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateInput: (state, action) => {
      state.input = action.payload;
    },
    updateLocation: (state, action) => {
      state.location = action.payload;
    },
    updatefullTime: (state, action) => {
      state.fullTime = action.payload;
    },
  },
});
export const { updateInput, updateLocation, updatefullTime } =
  searchSlice.actions;

export default searchSlice.reducer;
