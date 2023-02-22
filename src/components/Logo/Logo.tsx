import { Avatar, Box, Link } from '@mui/material';

import logoImage from 'assets/images/logo.jpg';

const Logo = () => {
  return (
    <Box>
      <Link href="/">
        <Avatar src={logoImage} />
      </Link>
    </Box>
  );
};

export default Logo;
