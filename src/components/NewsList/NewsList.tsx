import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import selectors from 'redux/news/news-selectors';
import { useNewsList } from 'hooks/useNewsList';
import { NewsStateItem } from 'interfaces/interfaces';

import NewsItem from 'components/NewsItem/NewsItem';
import ButtonComponent from 'components/ButtonComponent/ButtonComponent';

import deafultNewsPicture from 'assets/images/default.png';

const NewsList = () => {
  const { t } = useTranslation();
  const { newsArray, onLoadMore } = useNewsList();
  const isLoading = useSelector(selectors.getIsLoading);

  return (
    <>
      <Grid container padding={4} spacing={6}>
        {newsArray.map((newsItem: NewsStateItem, index) => (
          <NewsItem
            key={`${index} + ${newsItem.title}`}
            image={newsItem.image_url ? newsItem.image_url : deafultNewsPicture}
            title={newsItem.title}
            summary={newsItem.content ? newsItem.content : newsItem.description}
          />
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" paddingBottom={4}>
        <ButtonComponent
          text={t('loadMore')}
          onClick={onLoadMore}
          isDisabled={isLoading}
        />
      </Box>
    </>
  );
};

export default NewsList;
