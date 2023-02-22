import { useSelector, useDispatch } from 'react-redux';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import ButtonComponent from 'components/ButtonComponent/ButtonComponent';

import getAuthInfo from 'redux/auth/auth-selector';
import { logOut } from 'redux/auth/auth-slice';

interface IProps {
  modalToggle: () => void;
}

const AuthBar = ({ modalToggle }: IProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isLoggedIn, userName } = useSelector(getAuthInfo);

  return (
    <>
      {!isLoggedIn && (
        <ButtonComponent text={t('logIn')} onClick={modalToggle} />
      )}
      {isLoggedIn && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ marginRight: '20px', color: '#e4e35a' }}>
            {t('welcome')}, {userName}
          </Typography>
          <ButtonComponent
            text={t('logOut')}
            onClick={() => dispatch(logOut())}
          />
        </Box>
      )}
    </>
  );
};

export default AuthBar;
