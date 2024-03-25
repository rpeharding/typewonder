import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const locationFilterSlice = createSlice(
  {
    name: "locationFilter",
    initialState,
    reducers: {
      setLocationRange: (state, { payload }) => {
        state.minDistance = payload.minDistance;
        state.maxDistance = payload.maxDistance;
      },
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//sets data
export const { setLocationRange } = locationFilterSlice.actions;

//gets data from store
export const selectLocationRange = (state) => state.locationFilter;
export default locationFilterSlice.reducer;
