import { AuthState } from 'interfaces/interfaces';

interface StateArg {
  auth: AuthState;
}

const getIsLoggedIn = (state: StateArg) => state.auth.isLoggedIn;

export default getIsLoggedIn;
