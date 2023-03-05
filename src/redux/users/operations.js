import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../helpers/api';

export const loginRequest = createAsyncThunk(
  'user/login',
  async (FormData, thunkApi) => {
    try {
      const response = await api.UserAPI.userSignInRequest(FormData);
      localStorage.setItem('token', response.token);

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const registerRequest = createAsyncThunk(
  'user/register',
  async (FormData, thunkApi) => {
    try {
      const response = await api.UserAPI.userSignInRequest(FormData);
      localStorage.setItem('token', response.token);

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const logOutRequest = createAsyncThunk(
  'user/logout',
  async (_, thunkApi) => {
    try {
      const response = await api.UserAPI.userLogOutRequest();
      
      localStorage.removeItem('token', response.token);

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const getCurrentUserRequest = createAsyncThunk(
  'user/getCurrent',
  async (_, thunkApi) => {
    try {
      const response = await api.UserAPI.getUserDetailsRequest();
      
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);