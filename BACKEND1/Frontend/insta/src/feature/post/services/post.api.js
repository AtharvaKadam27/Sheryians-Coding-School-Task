import axios from "axios";

const postapi = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

export const getFeed = async () => {
  const response = await postapi.get("/api/post/feed");
  console.log(response);
  return response.data;
};

export const createPost = async (caption, postImage) => {
  const formdata = new FormData();
  formdata.append("caption", caption);
  formdata.append("image", postImage);

  const response = await postapi.post("/api/post/create", formdata, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const postLike = async (postid) => {
  const response = await postapi.post(`/api/like/post/${postid}`);
  return response.data;
};

export const postUnlike = async (postid) => {
  const response = await postapi.delete(`/api/like/post/unlike/${postid}`);
  return response.data;
};
