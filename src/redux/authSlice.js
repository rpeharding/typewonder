import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getStore, saveStore } from "./diskUtils";

const diskData = getStore();

export const authSlice = createSlice(
  {
    name: "auth",
    initialState: diskData ? diskData : initialState,
    reducers: {
      setScreen: (state, { payload }) => {
        state.screen = payload;
        saveStore(state);
      },
      setMessage: (state, { payload }) => {
        state.message = payload;
        saveStore(state);
      },
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//sets data
export const { setNewUser, setScreen, setMessage } = authSlice.actions;

//gets data from store
export const selectScreen = (state) => state.auth.screen;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
