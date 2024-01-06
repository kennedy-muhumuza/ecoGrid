import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  activeTab: "overview",
  isActive: false,
};

export const tabSlice = createSlice({
  name: "tabs",
  initialState: theInitialState,
  reducers: {
    setTab(state, action) {
      state.activeTab = action.payload.activeTab;
      state.isActive = !!state.activeTab;
      return;
    },
    reset(state) {
      state.activeTab = "overview";
      state.isActive = false;
    },
  },
});

export const tabActions = tabSlice.actions;
export default tabSlice;
