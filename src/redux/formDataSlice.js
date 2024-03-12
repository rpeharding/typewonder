import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const formDataSlice = createSlice(
  {
    name: "formData",
    initialState,
    reducers: {
      setFormData: (state, { payload }) => {
        state.formData = payload;
      },
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//sets data
export const { setFormData } = formDataSlice.actions;

//gets data from store
export const selectFormData = (state) => state.formData.formData;

export default formDataSlice.reducer;
