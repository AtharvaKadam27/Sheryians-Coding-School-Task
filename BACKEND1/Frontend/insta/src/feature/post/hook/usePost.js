import { PostContext } from "../post.context.jsx";
import { useContext, useEffect } from "react";
import {
  createPost,
  getFeed,
  postLike,
  postUnlike,
} from "../services/post.api.js";

const usePost = () => {
  const context = useContext(PostContext);

  const { loading, setLoading, post, setPost, feed, setFeed } = context;

  const handleGetFeed = async () => {
    setLoading(true);
    const data = await getFeed();
    console.log(data);
    setFeed(data.posts);
    setLoading(false);
  };

  const handleCreatePost = async (caption, postIamge) => {
    setLoading(true);
    const data = await createPost(caption, postIamge);
    setFeed((prev) => [data.post, ...prev]);
    setLoading(false);
  };

  const handleLikePost = async (postid) => {
    const data = await postLike(postid);
    await handleGetFeed();
  };

  const handleUnlikePost = async (postid) => {
    const data = await postUnlike(postid);
    await handleGetFeed();
  };

  useEffect(() => {
    handleGetFeed();
  }, []);

  return {
    loading,
    setLoading,
    post,
    setPost,
    feed,
    setFeed,
    handleGetFeed,
    handleCreatePost,
    handleLikePost,
    handleUnlikePost,
  };
};

export default usePost;
