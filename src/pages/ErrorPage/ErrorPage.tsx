import { purple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import ButtonComponent from 'components/ButtonComponent/ButtonComponent';

const primary = purple[500];

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: primary,
  },
};

const ErrorPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box sx={styles.container}>
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        {t('errorPage')}
      </Typography>
      <ButtonComponent
        text={t('goHome')}
        onClick={() => navigate('/', { replace: true })}
      />
    </Box>
  );
};

export default ErrorPage;
