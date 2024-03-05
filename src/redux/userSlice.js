import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import sha256 from "sha256";
import { saveStore } from "./diskUtils";

export const userSlice = createSlice(
  {
    name: "user",
    initialState,
    reducers: {
      setNewUser: (state, { payload }) => {
        payload.password = sha256(payload.password + "cohort16");
        payload.id = state.users.length + 1;
        state.users.push(payload);
        saveStore(state);
      },
      setUpdatedUser: (state, { payload }) => {
        state.users[users.length - 1].push(payload);
      },
      setUserData: (state, { payload }) => {
        state.users = payload.users;
      },
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//sets data
export const { setUserData, setNewUser, setUpdatedUser } = userSlice.actions;

//gets data from store
export const selectUsers = (state) => state.user.users;

export default userSlice.reducer;
