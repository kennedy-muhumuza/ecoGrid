import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  step: 1,
};
export const stepSlice = createSlice({
  name: "step",
  initialState: theInitialState,
  reducers: {
    nextStep(state, action) {
      state.step = action.payload.step;
      return;
    },
  },
});

export const stepActions = stepSlice.actions;
export default stepSlice;
