import AppRoutes from "./AppRoutes.jsx";
import AuthState from "./features/auth/AuthState.jsx";
import { SongContextProvider } from "./features/home/song.context.jsx";
import "./features/shared/styles/global.scss";

function App() {
  return (
    <div>
      <AuthState>
        <SongContextProvider>
          <AppRoutes />
        </SongContextProvider>
      </AuthState>
    </div>
  );
}

export default App;
