import React, { createContext, useState } from "react";

const AuthenticationContext = createContext();

function AuthContext({ children }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <AuthenticationContext.Provider
      value={{ loading, setLoading, user, setUser }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export { AuthenticationContext, AuthContext };
