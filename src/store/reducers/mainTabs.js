import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  activeMainTab: "current",
  isMainActive: false,
};

export const mainTabSlice = createSlice({
  name: "mainTabs",
  initialState: theInitialState,
  reducers: {
    setMainTab(state, action) {
      state.activeMainTab = action.payload.activeMainTab;
      state.isMainActive = !!state.activeMainTab;
      return;
    },
    reset(state) {
      state.activeMainTab = "current";
      state.isMainActive = false;
    },
  },
});

export const mainTabActions = mainTabSlice.actions;
export default mainTabSlice;
