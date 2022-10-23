import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";
import { items_data } from "./fixtures/items";
import App from "./App";

const browserHistory = createBrowserHistory();
const middleWares = [
  applyMiddleware(thunkMiddleware),
  applyMiddleware(routerMiddleware(browserHistory))
];

const reducer = (state = [], action) => {
  let latestState = [];
  const { items = items_data } = state;
  switch (action.type) {
    case "addToCart":
      latestState = items.map(item => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return Object.assign({}, state, { items: latestState });
    case "removeFromCart":
      latestState = items.map(item => {
        if (item.id === action.payload) {
          return { ...item, quantity: Math.max(item.quantity - 1, 0) };
        }
        return item;
      });
      return Object.assign({}, state, { items: latestState });
    default:
      return state;
  }
};

const initialState = {
  items: items_data
};

const middlewares = (() => compose(...middleWares))();

const store = createStore(reducer, initialState, middlewares);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
