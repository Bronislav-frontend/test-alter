import { useDispatch } from 'react-redux';
import {
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Avatar,
} from '@mui/material';

import ModalComponent from 'components/ModalComponent/ModalComponent';
import NewsItemModalContent from 'components/NewsItemModalContent/NewsItemModalContent';

import { useModal } from 'hooks/useModal';
import { removeNewsItem } from 'redux/news/news-slice';
import { notificateDelete } from 'utils/notifications';

import closeIcon from 'assets/images/cross.svg';

interface IProps {
  image: string;
  title: string;
  summary: string;
}

const NewsItem = ({ image, title, summary }: IProps) => {
  const { isOpen, modalToggle } = useModal();
  const dispatch = useDispatch();

  return (
    <>
      <ModalComponent isOpen={isOpen} modalClose={modalToggle}>
        <NewsItemModalContent title={title} paragraph={summary} />
      </ModalComponent>
      <Grid
        component="li"
        item
        xs={12}
        md={6}
        lg={4}
        position="relative"
        overflow="hidden"
        display="flex"
        flexDirection="column"
        onClick={modalToggle}
        sx={{ cursor: 'pointer' }}
      >
        <Avatar
          src={closeIcon}
          onClick={() => {
            dispatch(removeNewsItem(title));
            notificateDelete(title);
          }}
          sx={{
            position: 'absolute',
            right: '4px',
            top: '50px',
            width: '20px',
            height: '20px',
            cursor: 'pointer',
            backgroundColor: 'grey',
          }}
        />

        <CardMedia
          component="img"
          image={image}
          alt="photo of a new"
          sx={{ borderRadius: '8px 8px 0 0', minHeight: '450px' }}
        />
        <CardContent
          sx={{
            backgroundColor: 'hsla(0,0%,50%,0.3)',
            flexGrow: '1',
          }}
        >
          <Typography gutterBottom variant="h5" textAlign="center">
            {title}
          </Typography>
        </CardContent>
      </Grid>
    </>
  );
};

export default NewsItem;
