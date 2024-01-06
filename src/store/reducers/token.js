import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  token: null,
  isSignedIn: false,
  userId: "",
};

export const tokenSlice = createSlice({
  name: "token",
  initialState: theInitialState,
  reducers: {
    addToken(state, action) {
      state.token = action.payload.token;
      state.isSignedIn = !!state.token;
      state.userId = action.payload.userId;
      return;
    },
    logout(state) {
      state.token = null;
      state.isSignedIn = false;
      state.userId = "";
    },
  },
});

export const tokenActions = tokenSlice.actions;
export default tokenSlice;
