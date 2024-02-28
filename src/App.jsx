import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./css/baseline.css";
import "./css/App.css";
import Login from "./scenes/Login";
import HomeFeed from "./scenes/HomeFeed";
import Profile from "./scenes/Profile";
import { setUserData } from "./redux/userSlice";
import { useEffect } from "react";
import testData from "./db.json";

export default function App() {
  //get instance of dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserData(testData));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomeFeed />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </>
  );
}
