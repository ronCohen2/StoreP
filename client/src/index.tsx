import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../src/store/reducer/rootReducer";
import * as serviceWorker from "./serviceWorker";
import { StoreInterface } from "./type/store";
const store = createStore(
  rootReducer,
  composeWithDevTools(compose(applyMiddleware(thunk)))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
