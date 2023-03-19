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
  extraReducers: (builder) => {
  builder
    .addCase(register.pending, state => {
      state.isloading = true;
      state.error = null;
    })
    .addCase(register.fulfilled, (state, { payload }) => {
      const { user, token } = payload;
      state.user = user;
      state.token = token;
      state.isloading = false;
      state.isLogin = true;
    })
    .addCase(register.rejected, (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    })
    .addCase(logIn.pending, state => {
      state.isloading = true;
      state.error = null;
    })
    .addCase(logIn.fulfilled, (state, { payload }) => {
      const { user, token } = payload;
      state.user = user;
      state.token = token;
      state.isloading = false;
      state.isLogin = true;
    })
    .addCase(logIn.rejected, (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    })
    .addCase(logOut.pending, state => {
      state.isloading = true;
      state.error = null;
    })
    .addCase(logOut.fulfilled, (state, { payload }) => {
      state.user = {};
      state.token = '';
      state.isloading = false;
      state.isLogin = false;
    })
    .addCase(logOut.rejected, (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    })
    .addCase(current.pending, state => {
      state.isloading = true;
      state.error = null;
    })
    .addCase(current.fulfilled, (state, {payload}) => {
      state.isloading = false;
      state.user = payload.data;
      // state.token = token;
      state.isLogin = true;
    })
    .addCase(current.rejected, (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    })
  },
});

export default authSlice.reducer;


