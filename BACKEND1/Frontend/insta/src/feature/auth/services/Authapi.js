import axios from "axios";

const authapi = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true,
});

async function registerUser(username, email, password) {
  try {
    const response = await authapi.post("/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
  }
}

async function loginUser(username, password) {
  try {
    const response = await authapi.post("/login", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
  }
}

export { registerUser, loginUser };
