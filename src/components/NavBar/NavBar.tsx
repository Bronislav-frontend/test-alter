import { AppBar, Box, Toolbar } from '@mui/material';
import ModalComponent from 'components/ModalComponent/ModalComponent';
import LoginForm from 'components/LoginForm/LoginForm';
import AuthBar from 'components/AuthBar/AuthBar';
import LangaguesBar from 'components/LangaguesBar/LangaguesBar';

import { useModal } from 'hooks/useModal';
import NavLinksList from 'components/NavLinksList/NavLinks';

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
          <LangaguesBar />
          <Toolbar component="nav" variant="dense">
            <NavLinksList />
          </Toolbar>
          <AuthBar modalToggle={modalToggle} />
        </Box>
      </AppBar>
    </>
  );
};

export default NavBar;
