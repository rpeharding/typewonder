import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./css/baseline.css";
import "./css/App.css";
import { setUserData } from "./redux/userSlice";
import { useEffect } from "react";
import testData from "./db.json";
import SignUp from "./scenes/SignUp";
import Interface from "./scenes/Interface";
import { setPastimesData } from "./redux/pastimeSlice";

export default function App() {
  //get instance of dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserData(testData));
    dispatch(setPastimesData(testData.pastimes));
  }, []);

  return (
    <>
      <Interface />
    </>
  );
}
