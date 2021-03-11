import { createAction } from "@reduxjs/toolkit";
import request from "../../tools/request";

export const setPosts = createAction("POSTS");
export const setPost = createAction("POST");

// export function setPosts(data) {
//   return {
//     type: "POSTS",
//     payload: data,
//   };
// }

// export function setPost(data) {
//   return {
//     type: "POST",
//     payload: data,
//   };
// }

export function getPosts() {
  return function (dispatch, getState) {
    request("/posts").then((response) => dispatch(setPosts(response.data)));
  };
}

export function getPost(id) {
  return (dispatch) => {
    dispatch(setPost({}));
    request(`/posts/${id}`).then((response) =>
      dispatch(setPost(response.data))
    );
  };
}
