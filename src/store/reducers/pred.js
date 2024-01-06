import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  activePred: "general",
  isPredActive: false,
};

export const predSlice = createSlice({
  name: "pred",
  initialState: theInitialState,
  reducers: {
    setPred(state, action) {
      state.activePred = action.payload.activePred;
      state.isPredActive = !!state.activePred;
      return;
    },
    reset(state) {
      state.activePred = "general";
      state.isPredActive = false;
    },
  },
});

export const predActions = predSlice.actions;
export default predSlice;
