import { Typography, Box, Link, CardMedia, keyframes } from '@mui/material';
import fundLogo from 'assets/images/fundLogo.svg';

const bounce = keyframes`
0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
40% {transform: translateY(-20px);} 
60% {transform: translateY(-15px);} `;

const Introduction = () => {
  return (
    <Box sx={{ paddingX: '60px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40px',
          padding: '100px',
          backgroundColor: 'hsla(0,0%,50%,0.3)',
        }}
      >
        <Typography variant="h1" sx={{ marginBottom: '20px', color: 'white' }}>
          Hello!
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: '#e4e4e4', textAlign: 'center', marginBottom: '20px' }}
        >
          Thank you for visiting this site, it was made by Ukrainian Frontend
          developer Voydylo Bronislav. Here you can find all the latest news
          from USA, United Kingdom and my country, which is fighting for it's
          own freedom and we need help. You can help by donation to funds that
          are helping in this war. Every drop matters, so, please, help us
          finish those crimes against humanity. For your comfort you can find a
          link to one of those funds below.
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
