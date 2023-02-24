import { AppBar, Box, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import ModalComponent from 'components/ModalComponent/ModalComponent';
import LoginForm from 'components/LoginForm/LoginForm';
import AuthBar from 'components/AuthBar/AuthBar';
import LangaguesBar from 'components/LangaguesBar/LangaguesBar';
import DrawerComponent from 'components/DrawerComponent/DrawerComponent';

import { useModal } from 'hooks/useModal';
import NavLinksList from 'components/NavLinksList/NavLinks';

const styles = {
  header: {
    backgroundColor: '#477cdd',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mobToolbar: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '40px',
  },
};

const NavBar = () => {
  const { isOpen, modalToggle } = useModal();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <ModalComponent isOpen={isOpen} modalClose={modalToggle}>
        <LoginForm modalClose={modalToggle} />
      </ModalComponent>
      <AppBar position="sticky" sx={styles.header}>
        <Box sx={styles.container}>
          {matches && (
            <DrawerComponent>
              <LangaguesBar />
              <Toolbar component="nav" variant="dense" sx={styles.mobToolbar}>
                <NavLinksList />
              </Toolbar>
            </DrawerComponent>
          )}
          {!matches && (
            <>
              <LangaguesBar />
              <Toolbar component="nav" variant="dense">
                <NavLinksList />
              </Toolbar>
            </>
          )}
          <AuthBar modalToggle={modalToggle} />
        </Box>
      </AppBar>
    </>
  );
};

export default NavBar;
