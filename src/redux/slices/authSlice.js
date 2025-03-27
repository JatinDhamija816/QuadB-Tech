import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("user"));
if (!storedUser) {
  localStorage.setItem("user", JSON.stringify({ isLoggedIn: false }));
}

const initialState = storedUser || { isLoggedIn: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (_, action) => {
      const user = { isLoggedIn: true, username: action.payload.username };
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    },
    logout: () => {
      localStorage.setItem("user", JSON.stringify({ isLoggedIn: false }));
      return { isLoggedIn: false };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
