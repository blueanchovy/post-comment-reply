import React from "react";
import { useDispatch } from "react-redux";
import { deletePostFromList } from "../features/postsSlice";
import "./Post.css";

function Post({ id, name }) {
  const dispatch = useDispatch();
  return (
    <div className="post">
      <div className="post__data">
        <div className="post__avatar">U</div>
        <div className="post__name">{name}</div>
      </div>
      <div className="post__actions">
        <div className="post__button">
          {/* <button onClick={() => dispatch(replyToPost(id))}>Reply</button> */}
          <button>Reply</button>
        </div>
        <div className="post__button">
          <button onClick={() => dispatch(deletePostFromList(id))}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
