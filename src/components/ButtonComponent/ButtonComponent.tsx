import { Box, Button } from '@mui/material';

interface IProps {
  text: string;
  isDisabled?: boolean;
  onClick: () => void;
}

const ButtonComponent = ({ text, onClick, isDisabled }: IProps) => {
  return (
    <Box>
      <Button
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
