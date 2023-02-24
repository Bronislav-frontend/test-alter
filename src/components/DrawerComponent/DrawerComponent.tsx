import { useState } from 'react';
import { Box, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface IProps {
  children: React.ReactNode;
}

const DrawerComponent = ({ children }: IProps) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="left"
        open={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
      >
        <Box
          sx={{
            backgroundColor: '#477cdd',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: '1',
            alignItems: 'center',
          }}
        >
          {children}
        </Box>
      </Drawer>
      <IconButton
        sx={{ color: 'white', marginLeft: 'auto' }}
        onClick={() => setIsOpenDrawer(!isOpenDrawer)}
      >
        <MenuIcon sx={{ color: 'white' }} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
