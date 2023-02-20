import {
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Avatar,
} from '@mui/material';
import { useDispatch } from 'react-redux';

import { removeNewsItem } from 'redux/news/news-slice';

import closeIcon from 'assets/images/cross.svg';

interface IProps {
  image: string;
  title: string;
  summary?: string;
}

const NewsItem = ({ image, title, summary }: IProps) => {
  const dispatch = useDispatch();

  return (
    <Grid
      item
      height={800}
      xs={12}
      md={6}
      lg={4}
      position="relative"
      overflow="hidden"
    >
      <Avatar
        src={closeIcon}
        onClick={() => dispatch(removeNewsItem(title))}
        sx={{
          position: 'absolute',
          right: '4px',
          top: '50px',
          width: '20px',
          height: '20px',
          cursor: 'pointer',
        }}
      />

      <CardMedia
        component="img"
        height={400}
        image={image}
        alt="photo of a new"
      />
      <CardContent
        sx={{
          backgroundColor: 'hsla(0,0%,50%,0.3)',
          borderRadius: '8px',
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default NewsItem;
