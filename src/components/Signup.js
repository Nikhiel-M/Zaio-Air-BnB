import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import { openModal } from "../actions/modalActions";
import "./Signup.css"

const Signup = () => {
  const [name, setName] = useState(""); // Added name state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister || {};

  useEffect(() => {
    if (userInfo) {
      dispatch(openModal("close", ""));
    }
  }, [userInfo, dispatch]);

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password })); // Include name in payload
     dispatch(openModal("close", "")); 
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSignup}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className="browser-default"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            className="browser-default"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className="browser-default"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
        </div>
        <button className="sign-up-button" type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;