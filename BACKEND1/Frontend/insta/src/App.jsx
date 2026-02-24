import React from "react";
import "./App.scss";
import AppRoute from "./App.route";
import { AuthContext } from "./feature/auth/AuthContext.jsx";
import { PostContextProvider } from "./feature/post/post.context.jsx";

function App() {
  return (
    <div>
      <AuthContext>
        <PostContextProvider>
          <AppRoute />
        </PostContextProvider>
      </AuthContext>
    </div>
  );
}

export default App;
