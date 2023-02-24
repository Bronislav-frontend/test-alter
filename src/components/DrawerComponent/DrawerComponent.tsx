import { useState } from 'react';
import { Box, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface IProps {
  children: React.ReactNode;
}

const styles = {
  container: {
    backgroundColor: '#477cdd',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    alignItems: 'center',
    paddingY: '20px',
  },
  iconButton: {
    color: 'white',
    marginRight: 'auto',
  },
};

const DrawerComponent = ({ children }: IProps) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="left"
        open={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
      >
        <Box sx={styles.container}>{children}</Box>
      </Drawer>
      <IconButton
        sx={styles.iconButton}
        onClick={() => setIsOpenDrawer(!isOpenDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
