import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import sha256 from "sha256";

export const authSlice = createSlice(
  {
    name: "auth",
    initialState,
    reducers: {
      setNewUser: (state, { payload }) => {
        payload.password = sha256(payload.password + "cohort16");
        state.user = payload;
      },
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//sets data
export const { setNewUser } = authSlice.actions;

//gets data from store
export const selectAuth = (state) => state.user.users;
export default authSlice.reducer;
