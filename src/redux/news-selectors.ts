import { NewsList } from 'interfaces/interfaces';

const getNewsList = (state: NewsList) => state.newsList.newsArray;

export default getNewsList;
