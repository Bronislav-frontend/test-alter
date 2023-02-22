import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import newsSlice from './news/news-slice';
import authSlice from './auth/auth-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

export const store = configureStore({
  reducer: {
    newsList: newsSlice,
    auth: persistReducer(authPersistConfig, authSlice),
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
