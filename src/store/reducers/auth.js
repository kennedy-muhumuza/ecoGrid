import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  token: null,
  isLoggedIn: false,
  userName: "",
  userId: "",
  // status: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: theInitialState,
  reducers: {
    authenticate(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = !!state.token;
      state.userName = action.payload.userName;
      state.userId = action.payload.userId;

      // state.isLoggedIn = action.payload.token;
      // state.status = action.payload.status;
      return;
    },
    logout(state) {
      state.token = null;
      state.isLoggedIn = false;
      state.userName = "";
      state.userId = "";
      // state.status = "";
    },
    logIn(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = !!state.token;
      state.userId = action.payload.userId;
      // state.userName = action.payload.userName;
      // state.status = "";
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
