import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./reducers/register";
import errorMsgSlice from "./reducers/errorMsg";
import authSlice from "./reducers/auth";
import tokenSlice from "./reducers/token";
import tabSlice from "./reducers/tabs";
import audioSlice from "./reducers/audio";
import stepSlice from "./reducers/step";
import specialSlice from "./reducers/specialToken";
import histTabSlice from "./reducers/histTabs";
import mainTabSlice from "./reducers/mainTabs";
import predSlice from "./reducers/pred";

const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
    errorMsg: errorMsgSlice.reducer,
    auth: authSlice.reducer,
    token: tokenSlice.reducer,
    tabs: tabSlice.reducer,
    audio: audioSlice.reducer,
    step: stepSlice.reducer,
    special: specialSlice.reducer,
    histTabs: histTabSlice.reducer,
    mainTabs: mainTabSlice.reducer,
    pred: predSlice.reducer,
  },
});

export default store;
