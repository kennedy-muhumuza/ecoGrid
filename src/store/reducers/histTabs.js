import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  activeHistTab: "renewables",
  isHistActive: false,
};

export const histTabSlice = createSlice({
  name: "histTabs",
  initialState: theInitialState,
  reducers: {
    setHistTab(state, action) {
      state.activeHistTab = action.payload.activeHistTab;
      state.isHistActive = !!state.activeHistTab;
      return;
    },
    reset(state) {
      state.activeHistTab = "renewables";
      state.isHistActive = false;
    },
  },
});

export const histTabActions = histTabSlice.actions;
export default histTabSlice;
