import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    login(email);
    navigate("/reservation");
  };
  return (
    <div className="login-page">
      <h2> Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Enter email"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter password"
          value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}export default Login;