import { Box, Typography } from '@mui/material';

interface IProps {
  title: string;
  paragraph: string;
}

const NewsItemModalContent = ({ title, paragraph }: IProps) => {
  return (
    <Box textAlign="center">
      <Typography variant="h4" marginBottom={4}>
        {title}
      </Typography>
      <Typography>{paragraph}</Typography>
    </Box>
  );
};

export default NewsItemModalContent;
