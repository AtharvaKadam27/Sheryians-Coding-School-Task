import React, { use } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { user, loading } = useSelector((state) => state.auth);
  console.log(loading, user);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Protected;
