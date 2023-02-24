import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const containeStyles = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'hsla(0,0%,50%,0.3)',
  paddingY: '20px',
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box sx={containeStyles}>
      <Typography marginRight={2} color="white">
        {t('footer')}
      </Typography>
      <Typography color="yellow">&#10084;</Typography>
      <Typography color="blue">&#10084;</Typography>
    </Box>
  );
};

export default Footer;
