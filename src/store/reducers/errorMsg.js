import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  isError: false,
  error: "",
};
export const errorMsgSlice = createSlice({
  name: "errorMsg",
  initialState: theInitialState,
  reducers: {
    showErrorMsg(state, action) {
      state.isError = !state.isError;
      state.error = action.payload.error;
    },
    hideErrorMsg(state) {
      state.isError = !state.isError;
      state.error = "";
    },
  },
});

export const errorMsgActions = errorMsgSlice.actions;
export default errorMsgSlice;
