import { TextField, Typography, Container, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    dispatch(logIn(data));
    modalClose();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={classes.paper}>
        <Typography component="h1" variant="h5">
          LOG IN FORM
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
            label="Login"
            name="login"
            autoComplete="off"
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
            label="Password"
            type="password"
            id="password"
            autoComplete="off"
            sx={{ marginBottom: '60px' }}
          />
          <ButtonComponent text="Log In" type="submit" />
        </form>
      </Box>
    </Container>
  );
};

export default LoginForm;
