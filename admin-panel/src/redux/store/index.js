import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "../reducers";

// const myMiddleWare = ({ getState, dispatch }) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(dispatch, getState);
//   }

//   next(action);
// };

// const myMiddleWare = function (store) {
//   return function (next) {
//     return function (action) {
//       console.log("store:", store);
//       console.log("next:", next);
//       console.log("action:", action);

//       if (typeof action === "function") {
//         return action(store.dispatch);
//       }

//       next(action);
//     };
//   };
// };

// const store = createStore(reducer, applyMiddleware(thunk));

const store = configureStore({
  reducer,
});

export default store;
