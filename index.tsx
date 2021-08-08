import React from "react";
import { render } from "react-dom";
import "./style.css";

import { createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";

import App from "./App";

const store = createStore(reducers);
const root = (
  <Provider store={store}>
    <App />
  </Provider>
);
render(root, document.getElementById("root"));
