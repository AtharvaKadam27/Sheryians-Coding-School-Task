import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../hook/useAuth";
import "../styles/auth.style.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleRegister } = useAuth();
  const { loading, error } = useSelector((state) => state.auth);

  const onSubmit = async (event) => {
    event.preventDefault();
    await handleRegister(username, email, password);
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Create Account</h1>
          <p>Register to start your journey</p>
        </div>

        <form className="auth-form" onSubmit={onSubmit}>
          <label className="auth-label" htmlFor="register-username">
            Username
          </label>
          <input
            id="register-username"
            type="text"
            className="auth-input"
            placeholder="john_doe"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />

          <label className="auth-label" htmlFor="register-email">
            Email
          </label>
          <input
            id="register-email"
            type="email"
            className="auth-input"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label className="auth-label" htmlFor="register-password">
            Password
          </label>
          <input
            id="register-password"
            type="password"
            className="auth-input"
            placeholder="Create password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {error ? <p className="auth-error">{error}</p> : null}

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
