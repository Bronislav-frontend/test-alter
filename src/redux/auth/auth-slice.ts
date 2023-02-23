import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from 'interfaces/interfaces';
import { loginGreetings } from 'utils/notifications';

const initialState: AuthState = {
  userName: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.userName = payload.login;
      state.isLoggedIn = true;
      loginGreetings(payload.login);
    },
    logOut: state => {
      state.userName = '';
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
