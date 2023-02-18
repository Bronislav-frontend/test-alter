import { createSlice } from '@reduxjs/toolkit';
import operations from './news-operations';

const initialState = {
  newsArray: [],
};

const CardsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(operations.fetchNews.fulfilled, (state, action) => {
      state.newsArray = action.payload;
    });
  },
});

export default CardsSlice.reducer;
