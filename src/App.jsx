import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./css/baseline.css";
import "./css/App.css";
import Login from "./scenes/Login";
import HomeFeed from "./scenes/HomeFeed";
import Profile from "./scenes/Profile";
import TopNav from "./components/TopNav";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomeFeed />} />
        <Route path="/profile/" element={<Profile />} />
      </Routes>
    </>
  );
}
