import { Typography, Box, Link, CardMedia, keyframes } from '@mui/material';
import fundLogo from 'assets/images/fundLogo.svg';
import { useTranslation } from 'react-i18next';

const bounce = keyframes`
0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
40% {transform: translateY(-20px);} 
60% {transform: translateY(-15px);} `;

const Introduction = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ paddingX: '60px', paddingBottom: '40px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40px',
          padding: '60px',
          backgroundColor: 'hsla(0,0%,50%,0.3)',
        }}
      >
        <Typography variant="h1" sx={{ marginBottom: '20px', color: 'white' }}>
          {t('hello')}
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: '#e4e4e4', textAlign: 'center', marginBottom: '20px' }}
        >
          {t('introduction')}
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: 'white', animation: `${bounce} 1s infinite ease` }}
        >
          &#9759;
        </Typography>
        <Link
          href="https://savelife.in.ua/en/"
          target="_blank"
          rel="norefferer"
          variant="h3"
          underline="none"
          sx={{ color: '#e7e35b' }}
        >
          <CardMedia
            component="img"
            height={200}
            image={fundLogo}
            alt="logo of a fund <Come back alive>"
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Introduction;
