import { useSelector } from 'react-redux';
import getAuthInfo from 'redux/auth/auth-selector';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { isLoggedIn } = useSelector(getAuthInfo);

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
