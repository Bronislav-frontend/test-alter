import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ButtonComponent from 'components/ButtonComponent/ButtonComponent';
import ModalComponent from 'components/ModalComponent/ModalComponent';
import LoginForm from 'components/LoginForm/LoginForm';
import Logo from 'components/Logo/Logo';

import { useModal } from 'hooks/useModal';
import { ROUTES } from 'constants/routes';
import authSelectors from 'redux/auth/auth-selector';
import { logOut } from 'redux/auth/auth-slice';

const NavBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUserName);

  const { isOpen, toggler } = useModal();

  return (
    <>
      <ModalComponent isOpen={isOpen} toggle={toggler}>
        <LoginForm modalClose={toggler} />
      </ModalComponent>
      <AppBar position="sticky" sx={{ backgroundColor: '#477cdd' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Toolbar component="nav" variant="dense">
            <Logo />
            {Object.values(ROUTES).map(route => (
              <Box
                key={route.title}
                sx={{ display: 'flex', alignItems: 'center', padding: '4px' }}
              >
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    isActive ? 'active' : 'pending'
                  }
                >
                  {route.title}
                </NavLink>
              </Box>
            ))}
          </Toolbar>
          {!isLoggedIn && <ButtonComponent text="Log in" onClick={toggler} />}
          {isLoggedIn && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ marginRight: '20px' }}>
                Welcome, {userName}
              </Typography>
              <ButtonComponent
                text="Log out"
                onClick={() => dispatch(logOut())}
              />
            </Box>
          )}
        </Box>
      </AppBar>
    </>
  );
};

export default NavBar;
