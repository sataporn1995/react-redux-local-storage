import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: "", isLoggedIn: false };

const authSlice = createSlice({
  name: "authSliceAction",
  initialState,
  reducers: {
    updateAuth: (state, action) => ({ ...action.payload }),
  },
});

export const { updateAuth } = authSlice.actions;

export default authSlice.reducer;
