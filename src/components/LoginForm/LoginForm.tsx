import { TextField, Typography, Container, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { logIn } from 'redux/auth/auth-slice';

import ButtonComponent from 'components/ButtonComponent/ButtonComponent';

const classes = {
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

interface IProps {
  modalClose: () => void;
}

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

  console.log(errors);

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={classes.paper}>
        <Typography component="h1" variant="h5">
          {t('form')}
        </Typography>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px',
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
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
            <Typography
              sx={{ color: 'red', textAlign: 'center', marginBottom: '20px' }}
            >
              {t('error')}
            </Typography>
          )}
          <ButtonComponent text={t('logIn')} type="submit" />
        </form>
      </Box>
    </Container>
  );
};

export default LoginForm;
