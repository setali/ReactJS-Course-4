import { combineReducers } from "redux";
import { persons } from "./person";
import { posts, post } from "./post";

export default combineReducers({
  persons,
  posts,
  post,
});

// export default function reducer(state = [], action) {
//   console.log(state, action);

//   switch (action.type) {
//     case "PERSONS":
//       return { ...state, persons: action.payload };
//       break;

//     case "POSTS":
//       return { ...state, posts: action.payload };
//       break;

//     default:
//       return state;
//   }
// }
