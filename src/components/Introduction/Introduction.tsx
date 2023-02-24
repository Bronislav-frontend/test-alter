import { useTranslation } from 'react-i18next';
import { Typography, Box, Link, CardMedia } from '@mui/material';
import { bounceAnimation } from 'utils/bounceAnimation';
import fundLogo from 'assets/images/fundLogo.svg';

const styles = {
  container: {
    paddingX: '60px',
    paddingBottom: '40px',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px',
    padding: '60px',
    backgroundColor: 'hsla(0,0%,50%,0.3)',
  },
  title: {
    marginBottom: '20px',
    color: 'white',
  },
  text: {
    color: '#e4e4e4',
    textAlign: 'center',
    marginBottom: '20px',
  },
  handSign: {
    color: 'white',
    animation: `${bounceAnimation} 1s infinite ease`,
  },
};

const Introduction = () => {
  const { t } = useTranslation();
  return (
    <Box sx={styles.container}>
      <Box sx={styles.box}>
        <Typography variant="h1" sx={styles.title}>
          {t('hello')}
        </Typography>
        <Typography variant="h4" sx={styles.text}>
          {t('introduction')}
        </Typography>
        <Typography variant="h2" sx={styles.handSign}>
          &#9759;
        </Typography>
        <Link
          href="https://savelife.in.ua/en/"
          target="_blank"
          rel="norefferer"
          variant="h3"
          underline="none"
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
