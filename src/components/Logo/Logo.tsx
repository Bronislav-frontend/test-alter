import { Avatar, Box } from '@mui/material';

import logoImage from 'assets/images/logo.jpg';

const Logo = () => {
  return (
    <Box sx={{ marginRight: '10px' }}>
      <Avatar src={logoImage} />
    </Box>
  );
};

export default Logo;
