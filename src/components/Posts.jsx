import { useState } from "react";
import { postData } from "../raw-data/post-data";
function Posts() {
  const [posts, setPosts] = useState([]);
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postData.map((post) => (
          <div className="post-item" key={post.id}>
            <div className="post-header">
              <h2>Post Title #{post.id}</h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{post.likes}</span>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-actions">
              <button className="like-button">Like</button>
              <button className="dislike-button">Dislike</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
