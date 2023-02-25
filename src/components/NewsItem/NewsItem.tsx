import { useDispatch } from 'react-redux';
import {
  ListItem,
  Typography,
  CardMedia,
  CardContent,
  Avatar,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import ModalComponent from 'components/ModalComponent/ModalComponent';
import NewsItemModalContent from 'components/NewsItemModalContent/NewsItemModalContent';

import { removeNewsItem } from 'redux/news/news-slice';
import { notificateDelete } from 'utils/notifications';
import { useModal } from 'hooks/useModal';

import closeIcon from 'assets/images/cross.svg';

interface IProps {
  image: string;
  title: string;
  summary: string;
}

const styles = {
  newsItem: {
    cursor: 'pointer',
    display: 'flex',
    flex: '1 0 200px',
    alignItems: 'stretch',
    position: 'relative',
  },
  mobNewsItem: {
    flexDirection: 'column',
  },
  closeIcon: {
    position: 'absolute',
    right: '20px',
    top: '11px',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    backgroundColor: 'grey',
  },
  cardImage: {
    maxWidth: '200px',
    borderRadius: '8px 0 0 8px',
  },
  mobCardImage: {
    flex: '1',
    borderRadius: '8px 8px 0 0',
  },
  cardContent: {
    backgroundColor: 'hsla(0,0%,50%,0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: '1',
    borderRadius: '0 8px 8px 0',
  },
  mobCardContent: {
    borderRadius: '0 0 8px 8px',
  },
};

const NewsItem = ({ image, title, summary }: IProps) => {
  const dispatch = useDispatch();
  const { isOpen, modalToggle } = useModal();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <ModalComponent isOpen={isOpen} modalClose={modalToggle}>
        <NewsItemModalContent title={title} paragraph={summary} />
      </ModalComponent>
      <ListItem
        onClick={modalToggle}
        sx={[styles.newsItem, matches && styles.mobNewsItem]}
      >
        <Avatar
          src={closeIcon}
          onClick={() => {
            dispatch(removeNewsItem(title));
            notificateDelete(title);
          }}
          sx={styles.closeIcon}
        />

        <CardMedia
          component="img"
          image={image}
          alt="photo of a new"
          sx={[matches ? styles.mobCardImage : styles.cardImage]}
        />
        <CardContent
          sx={[styles.cardContent, matches && styles.mobCardContent]}
        >
          <Typography
            gutterBottom
            variant="h5"
            textAlign="center"
            marginBottom={0}
          >
            {title}
          </Typography>
        </CardContent>
      </ListItem>
    </>
  );
};

export default NewsItem;
