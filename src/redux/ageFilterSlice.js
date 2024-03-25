import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const ageFilterSlice = createSlice(
  {
    name: "ageFilter",
    initialState,
    reducers: {
      setAgeRange: (state, { payload }) => {
        state[payload.id] = payload.value;
      },
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//sets data
export const { setAgeRange } = ageFilterSlice.actions;

//gets data from store
export const selectAgeRange = (state) => state.ageFilter;
export default ageFilterSlice.reducer;
