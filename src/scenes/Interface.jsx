import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import HomeFeed from "./HomeFeed";
import Profile from "./Profile";

const Interface = () => {
  return (
    <>
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<HomeFeed />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
};

export default Interface;
