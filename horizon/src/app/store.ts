import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../features/Settings/settingSlice";
import toastReducer from "../features/Settings/toastSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    toast: toastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;