import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from 'interfaces/interfaces';

const initialState: AuthState = {
  userName: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      console.log(payload);
      state.userName = payload.login;
      state.isLoggedIn = true;
    },
    logOut: state => {
      state.userName = '';
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
