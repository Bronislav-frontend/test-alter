import { AuthState } from 'interfaces/interfaces';

interface StateArg {
  auth: AuthState;
}

const getIsLoggedIn = (state: StateArg) => state.auth.isLoggedIn;
const getUserName = (state: StateArg) => state.auth.userName;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
};

export default authSelectors;
