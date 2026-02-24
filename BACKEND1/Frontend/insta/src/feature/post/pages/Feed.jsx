import React, { useEffect } from "react";
import Post from "../componenets/Post.jsx";
import usePost from "../hook/usePost.js";
import "../styles/feed.scss";

const Feed = () => {
  const { feed, handleGetFeed, loading } = usePost();
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
      <div className="feed">
        <div className="posts">
          {feed.map((post) => {
            return <Post user={post.user} post={post} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Feed;
