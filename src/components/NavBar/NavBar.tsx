import { AppBar, Box, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

import ButtonComponent from 'components/ButtonComponent/ButtonComponent';
import Logo from 'components/Logo/Logo';
import ModalComponent from 'components/ModalComponent/ModalComponent';
import useModal from 'hooks/useModal';
import { ROUTES } from 'constants/routes';

const NavBar = () => {
  const { isOpen, toggle } = useModal();

  return (
    <>
      {isOpen && (
        <ModalComponent isOpen={isOpen} toggle={toggle}></ModalComponent>
      )}
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
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {route.title}
                </NavLink>
              </Box>
            ))}
          </Toolbar>
          <ButtonComponent text="Log in" onClick={() => toggle()} />
        </Box>
      </AppBar>
    </>
  );
};

export default NavBar;
