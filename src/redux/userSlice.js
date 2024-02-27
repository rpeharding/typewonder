import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// export const {} = userSlice.actions;

// export const selectCount = (state) => state.counter.value;
export const selectUser = (state) => state.user.users;
export default userSlice.reducer;
