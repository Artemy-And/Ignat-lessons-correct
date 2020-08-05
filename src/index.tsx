import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import {HashRouter} from "react-router-dom";


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById("root"));

let a = {
  name: "Artemy",
  age: 30,
};

