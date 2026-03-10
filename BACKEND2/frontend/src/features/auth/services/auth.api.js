import axios from "axios";

const auth = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

export async function register(username, email, password) {
  const response = await auth.post("/api/auth/register", {
    username,
    email,
    password,
  });
  return response.data;
}

export async function login(email, password) {
  const response = await auth.post("/api/auth/login", { email, password });

  return response.data;
}

export async function getMe() {
  const response = await auth.get("/api/auth/get-me");
  return response.data;
}

export async function logout() {
  const response = await auth.post("/api/auth/logout");
  return response.data;
}
