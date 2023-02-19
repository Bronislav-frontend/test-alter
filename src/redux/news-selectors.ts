import { NewsState } from 'interfaces/interfaces';

interface StateArg {
  newsList: NewsState;
}

const getNewsList = (state: StateArg) => state.newsList.results;
const getNextPageNews = (state: StateArg) => state.newsList.nextPage;
const getIsLoading = (state: StateArg) => state.newsList.isLoading;

const selectors = {
  getNewsList,
  getNextPageNews,
  getIsLoading,
};

export default selectors;
