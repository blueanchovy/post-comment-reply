import React from "react";
import { useSelector } from "react-redux";
import { selectPost } from "../features/postsSlice";
import Post from "./Post";
import "./Posts.css";

function Posts() {
  const PostList = useSelector(selectPost);
  return (
    <div className="Posts">
      {PostList.map((post, key) => {
        return post.name ? (
          <Post id={post.id} name={post.name} key={key} />
        ) : (
          ""
        );
      })}
    </div>
  );
}

export default Posts;
