import React from "react";
import { useDispatch } from "react-redux";
import "./css/baseline.css";
import "./css/App.css";
import { setUsers } from "./redux/userSlice";
import { useEffect } from "react";
import testData from "./db.json";
import Interface from "./scenes/Interface";
import { setPastimesData } from "./redux/pastimeSlice";

import { ToastContainer } from "react-toastify";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsers(testData));
    dispatch(setPastimesData(testData.pastimes));
  }, []);

  return (
    <>
      <Interface />
      <ToastContainer />
    </>
  );
}
