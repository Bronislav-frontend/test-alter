import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './news/news-slice';
import authSlice from './auth/auth-slice';

const store = configureStore({
  reducer: {
    newsList: newsSlice,
    auth: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
