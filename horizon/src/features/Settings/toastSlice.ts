import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ToastState {
  message: string;
  type: "success" | "error" | "warning" | "";
}

const initialState: ToastState = {
  message: "",
  type: "",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast(
      state,
      action: PayloadAction<{
        message: string;
        type: "success" | "error" | "warning";
      }>
    ) {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },

    clearToast(state) {
      state.message = "";
      state.type = "";
    },
  },
});

export const { showToast, clearToast } = toastSlice.actions;

export default toastSlice.reducer;