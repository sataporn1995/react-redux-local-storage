import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StateProvider from "./store/StateProvider";

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
