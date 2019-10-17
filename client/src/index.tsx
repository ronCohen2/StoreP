import React from "react";
import { render } from "react-dom";
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

// ReactDOM.render(
//   <Provider store={store}>
//     <AlertProvider template={AlertTemplate} {...options}>
//       <App />
//     </AlertProvider>
//   </Provider>,
//   document.getElementById("root")
// );
const Root = () => (
  // <AlertProvider template={AlertTemplate} {...options}>
  <Provider store={store}>
    <App />
  </Provider>

  // </AlertProvider>
);

render(<Root />, document.getElementById("root"));

// serviceWorker.unregister();
