import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const userSlice = createSlice(
  {
    name: "user",
    initialState,
    reducers: {
      setUserData: (state, { payload }) => {
        console.log(payload);
        state.users = payload.users;
      },
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//sets data
export const { setUserData } = userSlice.actions;

//gets data from store
export const selectUsers = (state) => state.user.users;
export default userSlice.reducer;
