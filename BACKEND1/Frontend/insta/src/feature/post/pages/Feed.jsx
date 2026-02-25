import React, { useEffect } from "react";
import Post from "../componenets/Post.jsx";
import usePost from "../hook/usePost.js";
import "../styles/feed.scss";
import Nav from "../../shared/components/Nav.jsx";

const Feed = () => {
  const { feed, handleGetFeed, loading, handleLikePost, handleUnlikePost } =
    usePost();
  useEffect(() => {
    handleGetFeed();
  }, []);

  if (loading || !feed) {
    return (
      <main>
        <h1>Feed is loading...</h1>
      </main>
    );
  }
  return (
    <main className="feed-page">
      <Nav />
      <div className="feed">
        <div className="posts">
          {feed.map((post) => {
            return (
              <Post
                user={post.user}
                post={post}
                handleLikePost={handleLikePost}
                handleUnlikePost={handleUnlikePost}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Feed;
