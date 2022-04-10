import { createSlice } from "@reduxjs/toolkit";
import { PostsList } from "../PostsList";

const initialState = {
  value: PostsList,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    addPostToList: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
    deletePostFromList: (state, action) => {
      console.log(action.payload);
      state.value = state.value.filter((Post) => Post.id !== action.payload);
    },
  },
});

export const { addPostToList, deletePostFromList } = postsSlice.actions;

export const selectPost = (state) => state.posts.value;

export default postsSlice.reducer;
