import { createSlice } from "@reduxjs/toolkit";

const credentialsSlice = createSlice({
  name: "credentials",
  initialState: {
    recentUsers: JSON.parse(localStorage.getItem("recentUsers")) || [],
    userFacebook: JSON.parse(localStorage.getItem("userFacebook")) || {},
    isLogin: JSON.parse(localStorage.getItem("userFacebook")) || false,
  },
  reducers: {
    setUserFacebook: (state, actions) => {
      state.userFacebook = actions.payload;
    },
    setIsLogin: (state, actions) => {
      state.isLogin = actions.payload;
      state.userFacebook =
        JSON.parse(localStorage.getItem("userFacebook")) || {};
    },
    setRecentUsers: (state, actions) => {
      state.recentUsers = actions.payload;
    },
  },
});

export const { setUserFacebook, setIsLogin, setRecentUsers } =
  credentialsSlice.actions;

export default credentialsSlice.reducer;
