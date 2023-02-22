import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h3" sx={{ color: 'white' }}>
        {t('profilePage')}
      </Typography>
    </Box>
  );
};

export default ProfilePage;
