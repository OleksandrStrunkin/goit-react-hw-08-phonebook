import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, current } from "./auth-operation";

const initialState ={
    user: {},
    token: '',
    isLogin: false,
    isloading: false,
    error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: state => {
      state.isloading = true;
      state.error = null;
    },
    [register.fulfilled]: (state, { payload }) => {
      const { user, token } = payload;
      state.user = user;
      state.token = token;
      state.isloading = false;
      state.isLogin = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },
    [logIn.pending]: state => {
      state.isloading = true;
      state.error = null;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      const { user, token } = payload;
      state.user = user;
      state.token = token;
      state.isloading = false;
      state.isLogin = true;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },
    [logOut.pending]: state => {
      state.isloading = true;
      state.error = null;
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.user = {};
      state.token = '';
      state.isloading = false;
      state.isLogin = false;
    },
    [logOut.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },
    [current.pending]: state => {
      state.isloading = true;
      state.error = null;
    },
    [current.fulfilled]: (state, { payload }) => {
      const { user, token } = payload;
      state.user = user;
      state.token = token;
      state.isloading = false;
      state.isLogin = true;
    },
    [current.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;