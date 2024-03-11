import { Routes, Route } from "react-router-dom";
import Login from "./account/Login";
import SignUp from "./account/SignUp";
import HomeFeed from "./HomeFeed";
import Profile from "./Profile";
import Index from "./account";

const Interface = () => {
  return (
    <>
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
};

export default Interface;
