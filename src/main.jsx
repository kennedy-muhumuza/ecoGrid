import React from "react";
import ReactDOM from "react-dom/client";
// import AppTest from "./AppTest.jsx";
import "./index.css";
import App from "./App.jsx";
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <AppTest /> */}
      <App />
    </Provider>
  </React.StrictMode>
);
