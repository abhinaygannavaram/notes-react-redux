import React from "react";

import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

import "./index.css";

import App from "./App";

import configureStore from "./store/configureStore";

import { startUserNotes, startUserAccount } from "./actions/usersAction";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

const store = configureStore();

// console.log(store)

console.log("state", store.getState());

store.subscribe(() => {
  console.log("state updated", store.getState());
});

//handle page reload

if (localStorage.getItem("token")) {
  store.dispatch(startUserNotes());

  store.dispatch(startUserAccount());
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
