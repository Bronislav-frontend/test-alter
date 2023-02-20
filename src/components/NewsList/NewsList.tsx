import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import selectors from 'redux/news/news-selectors';

import NewsItem from 'components/NewsItem/NewsItem';
import ButtonComponent from 'components/ButtonComponent/ButtonComponent';

import { useNewsList } from 'hooks/useNewsList';
import { NewsStateItem } from 'interfaces/interfaces';

import deafultNewsPicture from 'assets/images/default.png';

const NewsList = () => {
  const { newsArray, onLoadMore } = useNewsList();
  const isLoading = useSelector(selectors.getIsLoading);

  return (
    <>
      <Grid container padding={4} spacing={6}>
        {newsArray.map((charsItem: NewsStateItem, index) => (
          <NewsItem
            key={`${index} + ${charsItem.title}`}
            image={
              charsItem.image_url ? charsItem.image_url : deafultNewsPicture
            }
            title={charsItem.title}
            summary={
              charsItem.content ? charsItem.content : charsItem.description
            }
          />
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" paddingBottom={4}>
        <ButtonComponent
          text="Load more"
          onClick={onLoadMore}
          isDisabled={isLoading}
        />
      </Box>
    </>
  );
};

export default NewsList;
