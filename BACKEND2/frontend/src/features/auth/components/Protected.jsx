import React from "react";
import useAuth from "../hook/useAuth";
import { Navigate, useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Protected;
