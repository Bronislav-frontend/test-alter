import { Avatar, Box, Link, useTheme, useMediaQuery } from '@mui/material';

import logoImage from 'assets/images/logo.jpg';

const styles = {
  container: {
    marginRight: '24px',
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
};

const Logo = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={[!matches && styles.container]}>
      <Link href="/" sx={[matches && styles.link]}>
        <Avatar src={logoImage} />
      </Link>
    </Box>
  );
};

export default Logo;
