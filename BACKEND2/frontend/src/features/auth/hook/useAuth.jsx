import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthState";
import { getMe, login, register } from "../services/auth.api";

function useAuth() {
  const context = useContext(AuthContext);
  const { loading, setLoading, user, setUser } = context;

  async function handleRegister(username, email, password) {
    setLoading(true);
    try {
      const response = await register(username, email, password);
      setUser(response.data);
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(email, password) {
    setLoading(true);
    try {
      const response = await login(email, password);

      setUser(response.user);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleGetMe() {
    setLoading(true);
    try {
      const response = await getMe();
      setUser(response.user);
    } catch (error) {
      console.error("Failed to get user info:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleGetMe();
  }, []);

  return {
    loading,
    user,
    handleLogin,
    handleRegister,
    handleGetMe,
    handleLogout,
  };
}

export default useAuth;
