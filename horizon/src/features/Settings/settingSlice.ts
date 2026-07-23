import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  language: "english",
  notifications: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
});

export default settingsSlice.reducer;