import { useSelector, useDispatch } from 'react-redux';
import { Typography, Box } from '@mui/material';

import ButtonComponent from 'components/ButtonComponent/ButtonComponent';

import authSelectors from 'redux/auth/auth-selector';
import { logOut } from 'redux/auth/auth-slice';

interface IProps {
  modalToggle: () => void;
}

const AuthBar = ({ modalToggle }: IProps) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUserName);
  return (
    <>
      {!isLoggedIn && <ButtonComponent text="Log in" onClick={modalToggle} />}
      {isLoggedIn && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ marginRight: '20px' }}>
            Welcome, {userName}
          </Typography>
          <ButtonComponent text="Log out" onClick={() => dispatch(logOut())} />
        </Box>
      )}
    </>
  );
};

export default AuthBar;
