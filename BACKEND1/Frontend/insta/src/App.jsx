import React from "react";
import "./App.scss";
import AppRoute from "./App.route";
import { AuthContext } from "./feature/auth/AuthContext.jsx";

function App() {
  return (
    <div>
      <AuthContext>
        <AppRoute />
      </AuthContext>
    </div>
  );
}

export default App;
