import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";
import './Login.css';

function Login() {
  const { login, register, googleLogin } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    try {
        await login({ username, password });
    } catch (err) {
      setError("Invalid credentials or user already exists");
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleRegister = async () => {
    setError("");

    if (!emailRegex.test(username)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      await register({ username, password, name });
    } catch (err) {
      setError("Registration failed");
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse?.credential;
      if (!token) {
        throw new Error("Missing Google credential");
      }
      await googleLogin(token);
    } catch (err) {
      console.error(
        "Google login failed:",
        err?.response?.data || err.message || err
      );
      setError("Google login failed");
    }
  };

  const handleGoogleError = () => {
    setError("Google login was cancelled or failed.");
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? "Register" : "Login"} to SmartStocks</h2>

      {isRegistering && (
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={isRegistering ? handleRegister : handleLogin}>
        {isRegistering ? "Register" : "Login"}
      </button>

      <div className="divider">
        <span>OR</span>
      </div>

      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
      />

      {error && <p className="error">{error}</p>}

      <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
        {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
        <span
          style={{
            color: "#2563eb",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? "Login here" : "Register here"}
        </span>
      </p>
    </div>
  );
}

export default Login;
