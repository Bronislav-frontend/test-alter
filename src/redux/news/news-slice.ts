import { createSlice } from '@reduxjs/toolkit';
import { NewsState, NewsStateItem } from 'interfaces/interfaces';
import operations from './news-operations';

const initialState: NewsState = {
  status: '',
  isLoading: false,
  totalResults: 0,
  results: [],
  nextPage: '',
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    removeNewsItem: (state, { payload }) => {
      state.results = state.results.filter(
        (item: NewsStateItem) => item.title !== payload,
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(operations.fetchNews.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(operations.fetchNews.fulfilled, (_, { payload }) => {
      return {
        isLoading: false,
        ...payload,
      };
    });
    builder.addCase(operations.fetchNextPageNews.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      operations.fetchNextPageNews.fulfilled,
      (state, { payload }) => {
        state.isLoading = false;
        state.results = [...state.results, ...payload.results];
        state.nextPage = payload.nextPage;
      },
    );
  },
});

export const { removeNewsItem } = newsSlice.actions;
export default newsSlice.reducer;
