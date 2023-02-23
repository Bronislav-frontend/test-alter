import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificateSuccess, notificateError } from 'utils/notifications';
import { NewsState } from 'interfaces/interfaces';

interface IResponse {
  data: NewsState;
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const fetchNews = createAsyncThunk(
  'fetchNews',
  async (_arg, { rejectWithValue }) => {
    try {
      const { data }: IResponse = await axios.get(
        `news?apikey=${process.env.REACT_APP_API_KEY}&country=ua,gb`,
      );
      notificateSuccess(data.totalResults);
      return data;
    } catch ({ message }) {
      notificateError(message);
      return rejectWithValue(message);
    }
  },
);

const fetchNextPageNews = createAsyncThunk(
  'fetchNextPageNews',
  async (url: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `news?apikey=${process.env.REACT_APP_API_KEY}&country=ua,gb&page=${url}`,
      );
      return data;
    } catch ({ message }) {
      notificateError(message);
      return rejectWithValue(message);
    }
  },
);

const operations = {
  fetchNews,
  fetchNextPageNews,
};

export default operations;
