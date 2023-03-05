import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { registerRequest, loginRequest, logOutRequest, getCurrentUserRequest } from './operations';

const initialState = {
  userData: {
    name: null,
    email: null,
  },
  isLoggedIn: false,
  status: 'idle',
  error: null,
};
const extraAction = [loginRequest, registerRequest, logOutRequest, getCurrentUserRequest];

const getAction = type => extraAction.map(action => action[type]);

const handlePending = state => {
  state.status = 'pending';
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.status = 'rejected';
  state.error = payload;
};

const handleFulfilled = state => {
  state.status = 'resolved';
};

const userSlice = createSlice({
  name: 'user',

  initialState,

  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(loginRequest.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.userData.name = payload.user.name;
        state.userData.email = payload.user.email;
      })
      .addCase(registerRequest.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.userData.name = payload.user.name;
        state.userData.email = payload.user.email;
      })
      .addCase(logOutRequest.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.userData.name = null;
        state.userData.email = null;
      })
      .addCase(getCurrentUserRequest.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload;
      })
      .addMatcher(isAnyOf(...getAction('pending')), handlePending)
      .addMatcher(isAnyOf(...getAction('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getAction('rejected')), handleRejected);
  },
});

export const userReducer = userSlice.reducer;
