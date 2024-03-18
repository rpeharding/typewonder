import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Index from "./account";
import LoggedInProfile from "./LoggedInProfile";

const Interface = () => {
  return (
    <>
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile/" element={<LoggedInProfile />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
};

export default Interface;
