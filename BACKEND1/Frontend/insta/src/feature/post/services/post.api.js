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
