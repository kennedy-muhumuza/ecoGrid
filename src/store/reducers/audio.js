import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  audioPath: "",
};
export const audioSlice = createSlice({
  name: "audio",
  initialState: theInitialState,
  reducers: {
    playAudio(state, action) {
      state.audioPath = action.payload.audioPath;
      return;
    },
    stopAudio(state) {
      state.audioPath = "";
    },
  },
});

export const audioActions = audioSlice.actions;
export default audioSlice;
