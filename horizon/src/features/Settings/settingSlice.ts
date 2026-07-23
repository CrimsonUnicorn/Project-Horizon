import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  language: "english",
  notifications: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme(state, action : PayloadAction<string>) {
      state.theme = action.payload;
    },
    setLanguage(state, action : PayloadAction<string>) {
      state.language = action.payload;
    },
    setNotifications(state, action : PayloadAction<boolean>) {
      state.notifications = action.payload;
    },
  },
});

export const { setTheme, setLanguage, setNotifications } = settingsSlice.actions;

export default settingsSlice.reducer;
