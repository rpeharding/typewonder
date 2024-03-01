import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const pastimesSlice = createSlice(
  {
    name: "pastimes",
    initialState,
    reducers: {
      setPastimesData: (state, { payload }) => {
        state.pastimes = payload;
      },
      setPastimeFilters: (state, { payload }) => {
        if (state.pastimeFilters.includes(payload)) {
          state.pastimeFilters.splice(state.pastimeFilters.indexOf(payload), 1);
        } else {
          state.pastimeFilters.push(payload);
        }
      },
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//sets data
export const { setPastimesData, setPastimeFilters } = pastimesSlice.actions;

//gets data from store
export const selectPastimeFilters = (state) => state.pastimes.pastimeFilters;
export const selectPastimes = (state) => state.pastimes.pastimes;
export default pastimesSlice.reducer;
