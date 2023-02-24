import { Box, Button } from '@mui/material';

interface IProps {
  text: string;
  type?: 'button' | 'submit';
  isDisabled?: boolean;
  onClick?: () => void;
}

const buttonStyles = {
  backgroundColor: 'yellow',
  color: 'blue',
  ':hover': { backgroundColor: 'white' },
};

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
        sx={buttonStyles}
        disabled={isDisabled}
      >
        {text}
      </Button>
    </Box>
  );
};

export default ButtonComponent;
