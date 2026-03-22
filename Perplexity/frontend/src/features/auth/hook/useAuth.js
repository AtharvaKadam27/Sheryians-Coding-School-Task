import { register, login, getMe } from "../service/auth.api.js";
import { useDispatch } from "react-redux";
import { setUser, setError, setLoading } from "../auth.slice.js";

export const useAuth = () => {
  const dispatch = useDispatch();

  const handleRegister = async (username, email, password) => {
    try {
      dispatch(setLoading(true));
      const response = await register(username, email, password);
      return response;
    } catch (error) {
      dispatch(setError(error.response?.data?.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleLogin = async (email, password) => {
    try {
      dispatch(setLoading(true));
      const response = await login(email, password);
      dispatch(setUser(response.user));
    } catch (error) {
      dispatch(setError(error.response?.data?.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  async function handleGetMe() {
    try {
      dispatch(setLoading(true));
      const data = await getMe();
      dispatch(setUser(data.user));
    } catch (err) {
      dispatch(
        setError(err.response?.data?.message || "Failed to fetch user data"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  }

  return {
    handleRegister,
    handleLogin,
    handleGetMe,
  };
};
