import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './news-slice';

const store = configureStore({
  reducer: {
    newsList: newsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
