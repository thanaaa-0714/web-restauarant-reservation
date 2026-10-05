import React, {
  useState
} from "react";
import {
  useNavigate
} from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =useState("");
  const handleSignup = (e) => { e.preventDefault();
    if (!email || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (!email.includes("@")) {
      alert("Enter a valid email.");
      return;
    }
    const user = {
      email: email,
      password: password
    };
    localStorage.setItem(
      "signupUser",
      JSON.stringify(user)
    );
    alert("Signup successful!");
    navigate("/login");
  };
  return (
    <div className="form-page">
      <h2> Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label>Email</label>
        <input type="email" placeholder="Enter email" value={email}
          onChange={(e) => setEmail(e.target.value) } /><br/><br/>
        <label>Password</label>
        <input type="password" placeholder="Enter password" value={password}
          onChange={(e) => setPassword(e.target.value) }/><br/><br/>
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm password" value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value) } /><br/><br/>
        <button type="submit"> Sign Up</button>
      </form>
      <p>Already have an account?</p>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
}export default Signup;