import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const register = async (username, email, password) => {
  const response = await authApi.post("/api/auth/register", {
    username,
    email,
    password,
  });

  return response.data;
};

export const login = async (email, password) => {
  const response = await authApi.post("/api/auth/login", {
    email,
    password,
  });

  return response.data;
};

export const getMe = async () => {
  const response = await authApi.get("/api/auth/get-me");
  return response.data;
};
