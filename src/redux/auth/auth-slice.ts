import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from 'interfaces/interfaces';
import { toast } from 'react-toastify';

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
      toast.success(`Welcome back, ${payload.login}`);
    },
    logOut: state => {
      state.userName = '';
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
