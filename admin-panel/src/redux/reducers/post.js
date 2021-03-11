import { createReducer } from "@reduxjs/toolkit";
import { setPost, setPosts } from "../actions/post";

export const posts = createReducer([], {
  [setPosts]: (state, { payload }) => payload,
});

export const post = createReducer(
  {},
  {
    [setPost]: (state, action) => action.payload,
  }
);

// export function posts(state = [], action) {
//   switch (action.type) {
//     case "POSTS":
//       return action.payload;
//       break;

//     default:
//       return state;
//   }
// }

// export function post(state = {}, action) {
//   switch (action.type) {
//     case "POST":
//       return action.payload;
//       break;

//     default:
//       return state;
//   }
// }
