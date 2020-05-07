import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import rootReducer from "./redux/reducer";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import rootSaga from "./redux/sagas";
import { composeWithDevTools } from "redux-devtools-extension";

const saga = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
