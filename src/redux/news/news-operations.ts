import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const fetchNews = createAsyncThunk(
  'fetchNews',
  async (_arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `news?apikey=${process.env.REACT_APP_API_KEY}&country=ua,gb`,
      );
      toast.success(`Yey, found ${data.totalResults} news`);
      return data;
    } catch ({ message }) {
      toast.error(`Ooops, something went wrong ${message}`);
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
      toast.error(`Ooops, something went wrong ${message}`);
      return rejectWithValue(message);
    }
  },
);

const operations = {
  fetchNews,
  fetchNextPageNews,
};

export default operations;
