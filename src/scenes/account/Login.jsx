import React from "react";
import logo from "../../assets/type-wonder-orange-logo.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoggedIn, setMessage } from "../../redux/authSlice";
import { selectUser } from "../../redux/authSlice";
import sha256 from "sha256";
import { useSelector } from "react-redux";
import { setScreen } from "../../redux/authSlice";

const Login = () => {
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const hashedPassword = sha256(userInput.password + "cohort16");
    if (user.password === hashedPassword) {
      console.log("passwords match");
      dispatch(setScreen(2));
      dispatch(setLoggedIn());
      dispatch(setMessage("Logging you in"));
    } else {
      console.log("bad creds");
      dispatch(setMessage("Incorrect details, try again"));
    }
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <img className="auth-logo" src={logo} />
        <h3>Login</h3>
        <form className="form flex-col" onInput={onInput} onSubmit={onSubmit}>
          <div className="flex-col form-input">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter email"
            />
          </div>
          <div className="flex-col form-input">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter password"
            />
          </div>
          <button className="btn">Login</button>
        </form>
      </div>
      <div className="auth-button-container">
        <p>Don't have an account?</p>
        <button
          className="btn"
          onClick={() => {
            dispatch(setScreen(0));
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
