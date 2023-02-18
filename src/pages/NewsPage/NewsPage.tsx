import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Avatar, Typography } from '@mui/material';
import { AppDispatch } from 'redux/store';
import getNewsList from 'redux/news-selectors';
import operations from 'redux/news-operations';
import { NewsItem } from 'interfaces/interfaces';

const NewsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const newsArray: NewsItem[] = useSelector(getNewsList);

  useEffect(() => {
    dispatch(operations.fetchNews());
  }, [dispatch]);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ sm: 2 }}>
      {newsArray.map((newsItem: NewsItem) => (
        <Grid key={newsItem.id} item>
          <Avatar src={newsItem.imageUrl} />
          <Typography>{newsItem.title}</Typography>
          <Typography>{newsItem.summary}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsPage;
