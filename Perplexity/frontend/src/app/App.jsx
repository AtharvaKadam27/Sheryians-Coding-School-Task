import { useEffect } from "react";
import AppRoutes from "./AppRoutes";
import { useAuth } from "../features/auth/hook/useAuth";

function App() {
  const { handleGetMe } = useAuth();
  useEffect(() => {
    handleGetMe();
  }, []);
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
