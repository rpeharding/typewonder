import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, setNewUser } from "../../redux/userSlice";
import logo from "../../assets/type-wonder-orange-logo.svg";
import { setScreen } from "../../redux/authSlice";
import { selectFormData, setFormData } from "../../redux/formDataSlice";

const SignUp = ({ handleStep, onSubmit, onInput, hashPassword }) => {
  const dispatch = useDispatch();

  return (
    <div className="signup-container">
      <div className="signup-form">
        <img className="auth-logo" src={logo} />
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
            <input type="email" name="email" id="email" required />
          </div>
          <div className="flex-col form-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={(e) => {
                hashPassword(e.target.value);
              }}
            />
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
          className="underline link-light"
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
