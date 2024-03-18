import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getStore, saveStore } from "./diskUtils";

const diskData = getStore();

export const userSlice = createSlice(
  {
    name: "user",
    initialState: diskData ? diskData : initialState,
    reducers: {
      setNewUser: (state, { payload }) => {
        payload.id = state.users.length + 1;
        state.users.push(payload);
        saveStore(state);
      },
      setLoggedInUser: (state, { payload }) => {
        state.loggedInUser = payload;
        console.log("setting logged in user");
      },
      setUsers: (state, { payload }) => {
        state.users = payload.users;
      },
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//sets data
export const { setLoggedInUser, setNewUser, setUsers } = userSlice.actions;

//gets data from store
export const selectUsers = (state) => state.user.users;
export const selectLoggedInUser = (state) => state.user.loggedInUser;

export default userSlice.reducer;
