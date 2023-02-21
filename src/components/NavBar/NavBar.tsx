import { AppBar, Box, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import ModalComponent from 'components/ModalComponent/ModalComponent';
import LoginForm from 'components/LoginForm/LoginForm';
import AuthBar from 'components/AuthBar/AuthBar';

import { useModal } from 'hooks/useModal';
import { ROUTES } from 'constants/routes';

const NavBar = () => {
  const { isOpen, modalToggle } = useModal();

  return (
    <>
      <ModalComponent isOpen={isOpen} modalClose={modalToggle}>
        <LoginForm modalClose={modalToggle} />
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
          <AuthBar modalToggle={modalToggle} />
        </Box>
      </AppBar>
    </>
  );
};

export default NavBar;
