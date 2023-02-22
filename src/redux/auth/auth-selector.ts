import { AuthState } from 'interfaces/interfaces';

interface StateArg {
  auth: AuthState;
}

const getAuthInfo = (state: StateArg) => state.auth;

export default getAuthInfo;
