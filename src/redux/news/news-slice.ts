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
      return {
        ...state,
        results: state.results.filter(
          (item: NewsStateItem) => item.title !== payload,
        ),
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(operations.fetchNews.pending, state => {
      return {
        ...state,
        isLoading: true,
      };
    });

    builder.addCase(operations.fetchNews.fulfilled, (_, { payload }) => {
      return {
        ...payload,
        isLoading: false,
      };
    });

    builder.addCase(operations.fetchNews.rejected, state => {
      return {
        ...state,
        isLoading: false,
      };
    });

    builder.addCase(operations.fetchNextPageNews.pending, state => {
      return {
        ...state,
        isLoading: true,
      };
    });

    builder.addCase(
      operations.fetchNextPageNews.fulfilled,
      (state, { payload }) => {
        return {
          ...state,
          nextPage: payload.nextPage,
          isLoading: false,
          results: [...state.results, ...payload.results],
        };
      },
    );

    builder.addCase(operations.fetchNextPageNews.rejected, state => {
      return {
        ...state,
        isLoading: false,
      };
    });
  },
});

export const { removeNewsItem } = newsSlice.actions;
export default newsSlice.reducer;
