import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'redux/store';
import selectors from 'redux/news/news-selectors';
import operations from 'redux/news/news-operations';
import { NewsStateItem } from 'interfaces/interfaces';

export const useNewsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const newsArray: NewsStateItem[] = useSelector(selectors.getNewsList);
  const nextPage: string = useSelector(selectors.getNextPageNews);

  useEffect(() => {
    dispatch(operations.fetchNews());
  }, [dispatch]);

  const onLoadMore = () => {
    dispatch(operations.fetchNextPageNews(nextPage));
  };

  return {
    newsArray,
    onLoadMore,
  };
};
