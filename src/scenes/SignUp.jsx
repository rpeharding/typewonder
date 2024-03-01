import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewUser } from "../redux/authSlice";

const SignUp = () => {
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setNewUser(userInput));
  };

  return (
    <div>
      <form onInput={onInput}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="name">Name</label>
        <input type="name" name="name" id="name" />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
