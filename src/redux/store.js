import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import pastimesReducer from "./pastimeSlice";
import authReducer from "./authSlice";
import formDataReducer from "./formDataSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    pastimes: pastimesReducer,
    auth: authReducer,
    formData: formDataReducer,
  },
});
