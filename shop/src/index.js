import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

let defState = [
  { id: 0, name: "GG", quantity: 2 },
  { id: 1, name: "NIKE", quantity: 33 },
];

function reducer(state = defState, action) {
  if (action.type === "수량증가") {
    let 카피 = [...state];
    카피[0].quantity++;
    return 카피;
  } else if (action.type === "수량감소") {
    let 카피 = [...state];
    카피[0].quantity--;
    return 카피;
  } else {
    return state;
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

console.log("HI");
