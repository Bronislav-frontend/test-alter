import { Box, Button } from '@mui/material';

interface IProps {
  text: string;
  onClick: () => void;
}

const ButtonComponent = ({ text, onClick }: IProps) => {
  return (
    <Box>
      <Button
        variant="outlined"
        onClick={onClick}
        sx={{ backgroundColor: '#e4e35a', color: '#c444cf' }}
      >
        {text}
      </Button>
    </Box>
  );
};

export default ButtonComponent;
