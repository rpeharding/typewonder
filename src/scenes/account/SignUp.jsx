import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, setNewUser } from "../../redux/userSlice";
import logo from "../../assets/type-wonder-orange-logo.svg";
import { setScreen } from "../../redux/authSlice";

const SignUp = ({ handleStep, onSubmit, onInput }) => {
  const dispatch = useDispatch();

  return (
    <div className="signup-container">
      <div className="signup-form">
        <img src={logo} />
        <h3>Sign Up</h3>
        <form onInput={onInput} onSubmit={onSubmit} className="form flex-col">
          <div className="flex-col form-input">
            <label htmlFor="firstName">First name</label>
            <input type="firstName" name="firstName" id="firstName" required />
          </div>
          <div className="flex-col form-input">
            <label htmlFor="lastName">Last name</label>
            <input type="lastName" name="lastName" id="lastName" required />
          </div>
          <div className="flex-col form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex-col form-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <button
            className="btn"
            onClick={() => {
              handleStep(1);
            }}
          >
            Next
          </button>
        </form>
      </div>
      <div className="auth-button-container">
        <p>Already have an account?</p>
        <h3
          className="underline"
          onClick={() => {
            dispatch(setScreen(1));
          }}
        >
          Login
        </h3>
      </div>
    </div>
  );
};

export default SignUp;
