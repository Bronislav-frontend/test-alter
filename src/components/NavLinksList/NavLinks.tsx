import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

const NavLinksList = () => {
  return (
    <>
      {Object.values(ROUTES).map(route => (
        <Box
          key={route.title}
          sx={{ display: 'flex', alignItems: 'center', padding: '4px' }}
        >
          <NavLink
            to={route.path}
            className={({ isActive }) => (isActive ? 'active' : 'pending')}
          >
            {route.title}
          </NavLink>
        </Box>
      ))}
    </>
  );
};

export default NavLinksList;
