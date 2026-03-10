import AppRoutes from "./AppRoutes.jsx";
import AuthState from "./features/auth/AuthState.jsx";
import "./features/shared/styles/global.scss";

function App() {
  return (
    <div>
      <AuthState>
        <AppRoutes />
      </AuthState>
    </div>
  );
}

export default App;
