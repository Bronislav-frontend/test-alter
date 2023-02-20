import { AppBar, Box, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

import ButtonComponent from 'components/ButtonComponent/ButtonComponent';
import ModalComponent from 'components/ModalComponent/ModalComponent';
import { useModal } from 'hooks/useModal';
import Logo from 'components/Logo/Logo';
import { ROUTES } from 'constants/routes';

const NavBar = () => {
  const { isOpen, toggler } = useModal();

  return (
    <>
      <ModalComponent isOpen={isOpen} toggle={toggler} />
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
          <ButtonComponent text="Log in" onClick={toggler} />
        </Box>
      </AppBar>
    </>
  );
};

export default NavBar;
