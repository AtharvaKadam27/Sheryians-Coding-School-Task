import React from "react";
import { useState, useRef } from "react";
import usePost from "../hook/usePost";
import "../styles/createpost.scss";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const postImage = useRef(null);
  const { loading, handleCreatePost } = usePost();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const file = postImage.current.files[0];
    await handleCreatePost(caption, file);
    navigate("/");
  }

  if (loading) {
    return <h1>Creating Post...</h1>;
  }

  return (
    <main className="create-post-page">
      <div className="form-container">
        <h1>Create post</h1>
        <form onSubmit={handleSubmit}>
          <label className="post-image-label" htmlFor="postImage">
            Select image
          </label>
          <input
            ref={postImage}
            hidden
            type="file"
            name="postImage"
            id="postImage"
          />
          <input
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            type="text"
            name="caption"
            id="caption"
            placeholder="Enter Caption"
          />
          <button className="button primary-button">create post</button>
        </form>
      </div>
    </main>
  );
};

export default CreatePost;
