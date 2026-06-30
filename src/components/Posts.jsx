import { useState } from "react";
import { postData as initialPosts } from "../raw-data/post-data";

function Posts() {
  const [posts, setPosts] = useState(initialPosts);

  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleDislike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: Math.max(0, post.likes - 1) } : post
      )
    );
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <div className="post-header">
              <h2>Post Title #{post.id}</h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{post.likes}</span>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-actions">
              <button className="like-button" onClick={() => handleLike(post.id)}>
                Like
              </button>
              <button className="dislike-button" onClick={() => handleDislike(post.id)}>
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;

