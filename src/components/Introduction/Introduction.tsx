import { useTranslation } from 'react-i18next';
import {
  Typography,
  Box,
  Link,
  CardMedia,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { bounceAnimation } from 'utils/bounceAnimation';
import fundLogo from 'assets/images/fundLogo.svg';

const styles = {
  container: {
    padding: '40px',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px',
    backgroundColor: 'hsla(0,0%,50%,0.3)',
  },
  mobBox: {
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: 'white',
  },
  text: {
    color: '#e4e4e4',
    textAlign: 'center',
    marginBottom: '20px',
  },
  handSign: {
    textAlign: 'center',
    color: 'white',
    animation: `${bounceAnimation} 1s infinite ease`,
  },
  fundImg: {
    minWidth: '200px',
  },
};

const Introduction = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  console.log(matches);
  return (
    <Box sx={[!matches && styles.container]}>
      <Box sx={[matches ? styles.mobBox : styles.box]}>
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
            image={fundLogo}
            alt="logo of a fund <Come back alive>"
            sx={[!matches && styles.fundImg]}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Introduction;
