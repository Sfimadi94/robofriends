import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/App.js";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { searchReducer, requestRobotsReducer } from "./reducers";

const middleware = [thunk];
const logger = middleware.push(createLogger());

const rootReducer = combineReducers({ searchReducer, requestRobotsReducer });
const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
