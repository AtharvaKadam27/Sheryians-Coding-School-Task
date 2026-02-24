import { PostContext } from "../post.context.jsx";
import { useContext } from "react";
import { getFeed } from "../services/post.api.js";

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

  return { loading, setLoading, post, setPost, feed, setFeed, handleGetFeed };
};

export default usePost;
