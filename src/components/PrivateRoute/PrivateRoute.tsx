import { useSelector } from 'react-redux';
import getIsLoggedIn from 'redux/auth/auth-selector';

import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
