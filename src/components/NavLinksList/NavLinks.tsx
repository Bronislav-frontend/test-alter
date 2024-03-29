import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ROUTES } from 'constants/routes';

const navStyles = {
  display: 'flex',
  alignItems: 'center',
  padding: '4px',
};

const NavLinksList = () => {
  const { t } = useTranslation();
  return (
    <>
      {Object.values(ROUTES).map(route => (
        <Box key={route.title} sx={navStyles}>
          <NavLink
            to={route.path}
            className={({ isActive }) => (isActive ? 'active' : 'pending')}
          >
            {t(route.title)}
          </NavLink>
        </Box>
      ))}
    </>
  );
};

export default NavLinksList;
