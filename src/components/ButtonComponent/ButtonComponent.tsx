import { Box, Button } from '@mui/material';

interface IProps {
  text: string;
  type?: 'button' | 'submit';
  isDisabled?: boolean;
  onClick?: () => void;
}

const ButtonComponent = ({
  text,
  type = 'button',
  onClick,
  isDisabled,
}: IProps) => {
  return (
    <Box>
      <Button
        type={type}
        variant="outlined"
        onClick={onClick}
        sx={{ backgroundColor: '#e4e35a', color: '#c444cf' }}
        disabled={isDisabled}
      >
        {text}
      </Button>
    </Box>
  );
};

export default ButtonComponent;
