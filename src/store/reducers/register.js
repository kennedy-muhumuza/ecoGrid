import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  id: "",
  email: "",
  password: "",
  contact: "",
  country: "",
  userName: "",
  education: "",
  jobTitle: "",
  organization: "",
  yearsOfExperience: "",
};

export const registerSlice = createSlice({
  name: "register",
  initialState: theInitialState,
  reducers: {
    updateStep1(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.password = action.payload.password;
      return;
    },
    updateStep2(state, action) {
      state.contact = action.payload.contact;
      state.country = action.payload.country;
      state.userName = action.payload.userName;
      return;
    },
    updateStep3(state, action) {
      state.education = action.payload.education;
      state.jobTitle = action.payload.jobTitle;
      state.organization = action.payload.organization;
      state.yearsOfExperience = action.payload.yearsOfExperience;
      return;
    },
  },
});

export const registerActions = registerSlice.actions;
export default registerSlice;
