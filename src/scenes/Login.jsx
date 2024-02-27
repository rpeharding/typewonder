import React from "react";
import logo from "../assets/type-wonder-orange-logo.svg";

const Login = () => {
  return (
    <div className="login-container">
      <img src={logo} />
      <h3>Login</h3>
      <form className="form flex-col">
        <label>email</label>
        <input type="email" name="email" id="email" placeholder="enter email" />
        <label>password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="enter password"
        />
        <submit className="btn">Login</submit>
      </form>
      <h3>New here? Sign Up</h3>
    </div>
  );
};

export default Login;
