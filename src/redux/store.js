import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import pastimesReducer from "./pastimeSlice";
import authReducer from "./authSlice";
import formDataReducer from "./formDataSlice";
import ageFilterReducer from "./ageFilterSlice";
import locationFilterReducer from "./locationFilterSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    pastimes: pastimesReducer,
    auth: authReducer,
    formData: formDataReducer,
    ageFilter: ageFilterReducer,
    locationFilter: locationFilterReducer,
  },
});
