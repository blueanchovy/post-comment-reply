import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostToList, selectPost } from "../features/postsSlice";
import "./AddPost.css";

function AddPost() {
  const dispatch = useDispatch();
  const PostList = useSelector(selectPost);

  const [newPost, setNewPost] = useState("");

  return (
    <div className="addPost">
      <div className="addPost__form">
        <form action="">
          <input
            value={newPost}
            placeholder="Enter To Do Item"
            onChange={(e) => {
              setNewPost(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();

              dispatch(
                addPostToList({
                  id: PostList[PostList.length - 1].id + 1,
                  key: PostList[PostList.length - 1].key + 1,
                  name: newPost,
                })
              );
              setNewPost("");
            }}
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPost;
