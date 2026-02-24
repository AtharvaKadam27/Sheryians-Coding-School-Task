import { useContext } from "react";
import { loginUser, registerUser } from "../services/Authapi";
import { AuthenticationContext } from "../AuthContext.jsx";

function useAuth() {
  const context = useContext(AuthenticationContext);
  const { loading, setLoading, user, setUser } = context;

  async function handleLogin(username, password) {
    setLoading(true);
    try {
      const response = await loginUser(username, password);
      if (response) {
        setUser(response.user);
        console.log("Login successful:", response);
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister(username, email, password) {
    setLoading(true);
    try {
      const response = await registerUser(username, email, password);
      if (response) {
        setUser(response.user);
        console.log("Registration successful:", response);
      }
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  }

  return { loading, user, handleLogin, handleRegister };
}

export default useAuth;
