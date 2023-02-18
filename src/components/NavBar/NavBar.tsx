import { AppBar, Box, Link, Toolbar, Button } from '@mui/material';

import { ROUTES } from 'constants/routes';

const NavBar = () => {
  return (
    <AppBar position="static" color="secondary">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Toolbar component="nav" variant="dense" sx={{ overflowX: 'auto' }}>
          {Object.values(ROUTES).map(route => (
            <Link
              underline="none"
              color="inherit"
              noWrap
              key={route.title}
              href={route.path}
              sx={{ p: 1, flexShrink: 0 }}
            >
              {route.title}
            </Link>
          ))}
        </Toolbar>
        <Box>
          <Button variant="contained">Log in</Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default NavBar;
