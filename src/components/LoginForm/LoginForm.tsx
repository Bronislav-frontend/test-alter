import { TextField, Typography, Container, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { logIn } from 'redux/auth/auth-slice';

import ButtonComponent from 'components/ButtonComponent/ButtonComponent';

interface IProps {
  modalClose: () => void;
}

const styles = {
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    padding: '40px',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: '20px',
  },
};

const LoginForm = ({ modalClose }: IProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  const onSubmit = (data: any) => {
    dispatch(logIn(data));
    modalClose();
    navigate('/profile', { replace: true });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={styles.paper}>
        <Typography component="h1" variant="h5">
          {t('form')}
        </Typography>
        <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            {...register('login', {
              required: true,
              validate: value => value === process.env.REACT_APP_USER_NAME,
            })}
            fullWidth
            id="login"
            label={t('login')}
            name="login"
            autoFocus
            autoComplete="off"
          />
          <TextField
            variant="outlined"
            margin="normal"
            {...register('password', {
              required: true,
              validate: value => value === process.env.REACT_APP_USER_PASS,
            })}
            fullWidth
            name="password"
            label={t('pass')}
            type="password"
            id="password"
            sx={{ marginBottom: '60px' }}
          />
          {(errors.login || errors.password) && (
            <Typography sx={styles.error}>{t('error')}</Typography>
          )}
          <ButtonComponent text={t('logIn')} type="submit" />
        </form>
      </Box>
    </Container>
  );
};

export default LoginForm;
