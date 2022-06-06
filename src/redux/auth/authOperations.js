import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};


const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        toast.error("Email or password is incorrect format. Please, try again");
    }
});

const logIn = createAsyncThunk('auth/login', async  credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        toast.error("Email or password is incorrect. Please, try again");
    }
});

const logOut = createAsyncThunk('auth/logout', async ()  => {
    try {
        await axios.post('users/logout');
        token.unset();
    } catch (error) {
        toast.error("Something went wrong, please, try again");
    }
});

const fetchCurrentUser = createAsyncThunk('auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue("need to sign in");
        }
        token.set(persistedToken);
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Oops, please, sign in or sign on");
        }
    },
);


const operations = {
    register,
    logIn,
    logOut,
    fetchCurrentUser,
};

export default operations;