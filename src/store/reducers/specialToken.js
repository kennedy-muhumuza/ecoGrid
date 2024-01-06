import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  token: null,
};

export const specialSlice = createSlice({
  name: "special",
  initialState: theInitialState,
  reducers: {
    addToken(state, action) {
      state.token = action.payload.token;
      return;
    },
  },
});

export const specialActions = specialSlice.actions;
export default specialSlice;
