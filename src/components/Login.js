import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { openModal } from '../actions/modalActions'; 
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
    dispatch(openModal("closed", ""));
    }
  }, [dispatch, userInfo])

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="login-form">
      <h2>Log in or Sign up</h2>
      {error && <h2>{error}</h2>}
      {loading && <h2>Loading...</h2>}
      <form onSubmit={submitLogin}>
        <button className="facebook-login">Connect With Facebook</button>
        <button className="google-login">Connect With Google</button>
        <div className="login-or center">
          <span className="or-spacer">or</span>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="browser-default"
          placeholder="Email address"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="browser-default"
          placeholder="Password"
          required
        />
        <button className="sign-up-button">Login</button>
        <div className="divider"></div>
        <div>Don't have an account? Sign up</div>
      </form>
    </div>
  );
};

export default Login;
