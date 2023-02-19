import { Box, Button } from '@mui/material';

interface IProps {
  text: string;
  handleClick: () => void;
}

const ButtonComponent = ({ text, handleClick }: IProps) => {
  return (
    <Box>
      <Button
        variant="outlined"
        onClick={handleClick}
        sx={{ backgroundColor: '#e4e35a', color: '#c444cf' }}
      >
        {text}
      </Button>
    </Box>
  );
};

export default ButtonComponent;
