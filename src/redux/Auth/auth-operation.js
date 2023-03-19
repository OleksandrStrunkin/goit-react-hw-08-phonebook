import { createAsyncThunk } from "@reduxjs/toolkit";
import { signup, login, logout, getCurrent } from "../../shared/auth-api";

export const register = createAsyncThunk(
    "auth/signup",
    async(data, {rejectWithValue}) => {
        try {
            const result = await signup(data);
            return result;
        }
        catch({response}) {
            return rejectWithValue(response);
        }
    }
)

export const logIn = createAsyncThunk(
    'auth/login',
    async(data, {rejectWithValue})=>{
        try {
            const result = await login(data);
            return result;
            
        } catch ({response}) {
            return rejectWithValue(response)
        }
    }
);

export const logOut = createAsyncThunk(
    "auth/logout",
    async(_, {rejectWithValue}) => {
        try {
            const data = await logout();
            return data;
        }
        catch({response}) {
            return rejectWithValue(response);
        }
    }
)

// export const current = createAsyncThunk(
//     'auth/current',
//     async (_, thunkAPI) => {
//         const {token} = thunkAPI.getState().auth;
//         if(!token) {
//             return thunkAPI.rejectWithValue(`No Valid`)
//         }
//         try {
//             const res = await getCurrent(token);
//             return res.data
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message)
//         }
//     }
// )

export const current = createAsyncThunk(
    "auth/current",
    async(_, {rejectWithValue, getState}) => {
        try {
            const {auth} = getState();
            const data = await getCurrent(auth.token);
            return data;
        }
        catch({response}){
            return rejectWithValue(response);
        }
    },
    {
        condition: (_, {getState}) => {
            const {auth} = getState();
            if(!auth.token){
                return false;
            }
        }
    }
)