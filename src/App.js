import React from "react";
import "./App.css";
import AddPost from "./components/AddPost";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      {/* AddPost */}
      <AddPost />
      {/* Post */}
      <Posts />
      {/* PostComment */}
      {/* PostReply */}
    </div>
  );
}

export default App;
