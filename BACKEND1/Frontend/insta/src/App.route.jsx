import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./feature/auth/pages/Register.jsx";
import Login from "./feature/auth/pages/Login";
import Feed from "./feature/post/pages/Feed.jsx";
import CreatePost from "./feature/post/pages/CreatePost.jsx";

const AppRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Feed />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoute;
